import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
