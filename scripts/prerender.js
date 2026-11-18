// Pre-renders each route to static HTML after `react-scripts build`, so the
// pages are readable without JavaScript (recruiter tools, ATS crawlers, AI
// screeners, link previews). The browser then hydrates the same markup.
//
//   build/index.html     "/"          (home)
//   build/projects.html  "/projects"  (GitHub Pages serves it at /projects)
//   build/404.html       empty shell for unknown paths (client-side render)
//
// Source files are compiled on the fly with CRA's own Babel preset. Image
// imports resolve to the same URLs webpack produced, so hydration matches.

process.env.NODE_ENV = 'test'; // babel-preset-react-app: CommonJS output for Node
process.env.BABEL_ENV = 'test';

const fs = require('fs');
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const BUILD = path.join(ROOT, 'build');
const SITE = 'https://eastonshaum.com';

const ROUTES = [
  {
    url: '/',
    file: 'index.html',
    title: 'Easton Shaum · Software Engineer',
  },
  {
    url: '/projects',
    file: 'projects.html',
    title: 'Projects · Easton Shaum',
    description:
      'Projects by Easton Shaum: Pokéleap, LISAP, ClipForge, Kronos Trader and earlier full-stack work.',
  },
];

// ---- asset imports -> the URLs webpack emitted -----------------------------
const manifest = JSON.parse(fs.readFileSync(path.join(BUILD, 'asset-manifest.json'), 'utf8')).files;
const emitted = Object.values(manifest);
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.webp': 'image/webp' };

function assetUrl(file) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const re = new RegExp(`/static/media/${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.[0-9a-f]{8}${ext.replace('.', '\\.')}$`);
  const hit = emitted.find((u) => re.test(u));
  if (hit) return hit;
  // Small files are inlined by CRA (url-loader, under 10 kB)
  return `data:${MIME[ext]};base64,${fs.readFileSync(file).toString('base64')}`;
}

for (const ext of Object.keys(MIME)) {
  Module._extensions[ext] = (mod, filename) => {
    mod.exports = { __esModule: true, default: assetUrl(filename) };
  };
}
Module._extensions['.css'] = () => {};

// ---- compile src/*.js(x) with CRA's Babel preset ---------------------------
const loadJs = Module._extensions['.js'];
function compile(mod, filename) {
  if (!filename.startsWith(SRC)) return loadJs(mod, filename);
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    babelrc: false,
    configFile: false,
    presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
  });
  mod._compile(code, filename);
}
Module._extensions['.js'] = compile;
Module._extensions['.jsx'] = compile;

// ---- render ----------------------------------------------------------------
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { AppRoutes } = require(path.join(SRC, 'App.js'));

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const shell = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) {
  throw new Error('build/index.html has no empty #root; was it already pre-rendered?');
}
fs.writeFileSync(path.join(BUILD, '404.html'), shell);

for (const route of ROUTES) {
  const html = renderToString(
    React.createElement(StaticRouter, { location: route.url }, React.createElement(AppRoutes))
  );
  if (html.length < 500) throw new Error(`Route ${route.url} rendered almost nothing`);

  let page = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  page = page.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  page = page.replace(/(<meta property="og:title" content=")[^"]*/, `$1${escapeAttr(route.title)}`);
  page = page.replace(/(<meta property="og:url" content=")[^"]*/, `$1${SITE}${route.url === '/' ? '/' : route.url}`);
  if (route.description) {
    page = page.replace(/(<meta name="description" content=")[^"]*/, `$1${escapeAttr(route.description)}`);
  }
  fs.writeFileSync(path.join(BUILD, route.file), page);
  console.log(`Pre-rendered ${route.url} -> build/${route.file} (${(html.length / 1024).toFixed(1)} kB of HTML)`);
}
