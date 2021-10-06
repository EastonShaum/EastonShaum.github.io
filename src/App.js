import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './pages/projects';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />

            <Route component={AboutMe} />
          </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
