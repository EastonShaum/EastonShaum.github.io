import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';

// The routes without a router, so scripts/prerender.js can render them
// inside a StaticRouter at build time.
export function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
