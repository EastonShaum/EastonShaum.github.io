import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './pages/projects'
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />

            <Route component={AboutMe} />
          </Switch>
        <Footer></Footer>
        
      </div>
    </Router>
  );
}

export default App;
