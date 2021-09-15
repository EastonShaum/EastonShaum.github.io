import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

import Card from 'react-bootstrap/Card'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card>Hello WOrld!</Card>
    </div>
  );
}

export default App;
