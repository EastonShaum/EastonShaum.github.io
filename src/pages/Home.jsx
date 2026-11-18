import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../assets/images/Portrait.jpeg';
import projects from '../assets/projects';
import ProjectFeature from '../components/ProjectFeature';
import { EMAIL, LINKEDIN } from '../components/Layout';

const skills = [
    ['languages', ['C#', 'JavaScript', 'Python', 'SQL', 'SOQL', 'HTML/CSS/Sass']],
    ['frontend', ['React', 'React Native', 'jQuery', 'Knockout.js', 'Material UI']],
    ['backend', ['ASP.NET', 'Node.js', 'Express', 'REST', 'GraphQL', 'webhooks']],
    ['identity', ['Salesforce', 'SSO / SAML 2.0', 'OAuth']],
    ['data', ['Firestore', 'MongoDB', 'MySQL', 'SQLite']],
    ['infra', ['Cloudflare', 'Firebase', 'Azure Blob', 'Caddy', 'Tailscale', 'Raspberry Pi']],
    ['ai', ['Claude Code', 'MCP', 'Claude API']],
];

const experience = [
    {
        when: '2021 – now',
        role: 'Technical Account Manager',
        org: 'Impartner',
        text: 'I fix and extend production ASP.NET (C#) partner portals, debug Salesforce and SSO (SAML 2.0) integrations from the API to the UI, and own the technical side of enterprise accounts. I resolve 35+ issues a month without engineering escalation, and I built the Claude automations and connectors my team uses every day.',
    },
    {
        when: '2020 – 2021',
        role: 'Spanish Medical Interpreter',
        org: 'In-House Interpreting',
        text: 'Interpreted live medical consultations between clinicians and Spanish-speaking patients.',
    },
    {
        when: '2021',
        role: 'Full Stack Web Development certificate',
        org: 'University of Utah',
        text: 'MERN stack bootcamp, after computer science coursework at BYU–Idaho and Utah State.',
    },
];

function SkillsObject() {
    return (
        <pre className="mono code-block">
            <span className="c-kw">const</span> skills = {'{\n'}
            {skills.map(([key, list]) => (
                <React.Fragment key={key}>
                    {'  '}<span className="c-attr">{key}</span>{': ['}
                    {list.map((s, i) => (
                        <React.Fragment key={s}>
                            <span className="c-str">"{s}"</span>{i < list.length - 1 ? ', ' : ''}
                        </React.Fragment>
                    ))}
                    {'],\n'}
                </React.Fragment>
            ))}
            {'};'}
        </pre>
    );
}

function Home() {
    const featured = projects.filter((p) => p.featured);
    return (
        <>
            <header className="hero">
                <div className="hero-text">
                    <div className="mono c-tag hero-tag"><span className="type type-open">&lt;h1&gt;</span></div>
                    <h1 className="hero-title">Hello, I’m Easton.</h1>
                    <div className="mono c-tag hero-tag"><span className="type type-close">&lt;/h1&gt;</span></div>
                    <p className="mono hero-role">
                        <span className="c-tag">&lt;p</span> <span className="c-attr">role</span>=<span className="type type-role c-str">"software engineer"</span><span className="c-tag">&gt;</span><span className="caret" aria-hidden="true" />
                    </p>
                    <p className="hero-lede">
                        I build integrations, APIs and AI-powered tools. By day I work on production
                        partner portals, Salesforce and SSO. On my own time I ship full-stack projects
                        people actually use.
                    </p>
                </div>
                <figure className="portrait">
                    <figcaption className="mono" aria-hidden="true">&lt;img <span className="c-attr">alt</span>=<span className="c-str">"me"</span> /&gt;</figcaption>
                    <img src={Portrait} alt="Easton Shaum smiling outdoors" width="220" height="220" />
                </figure>
            </header>

            <section id="work" aria-labelledby="work-h" className="section">
                <h2 id="work-h" className="mono comment">{'// recent work'}</h2>
                {featured.map((p, i) => <ProjectFeature key={p.name} project={p} flip={i % 2 === 1} />)}
                <p className="mono more"><Link to="/projects">See all projects →</Link></p>
            </section>

            <section aria-labelledby="skills-h" className="section">
                <h2 id="skills-h" className="mono comment">{'// what I work with'}</h2>
                <SkillsObject />
            </section>

            <section id="experience" aria-labelledby="exp-h" className="section">
                <h2 id="exp-h" className="mono comment">{'// experience'}</h2>
                <ol className="timeline">
                    {experience.map((e) => (
                        <li key={e.role}>
                            <span className="mono when">{e.when}</span>
                            <div>
                                <h3>{e.role}<span className="org">, {e.org}</span></h3>
                                <p>{e.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="contact" aria-labelledby="contact-h" className="section contact">
                <div className="mono c-tag">&lt;footer&gt;</div>
                <h2 id="contact-h" className="contact-title">Let’s build something.</h2>
                <p className="contact-lede">I’m looking for an engineering role building integrations, APIs and AI-powered products, remote or around Cache Valley.</p>
                <div className="buttons">
                    <a className="btn btn-primary" href={`mailto:${EMAIL}`}>Email me</a>
                    <a className="btn btn-outline" href="/EastonShaumResume.docx" download>Download résumé</a>
                    <a className="btn btn-link" href={LINKEDIN}>LinkedIn</a>
                </div>
                <div className="mono c-tag">&lt;/footer&gt;</div>
            </section>
        </>
    );
}

export default Home;
