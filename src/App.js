import React from 'react';
import './App.css';
import CartComponent from './components/CartComponent';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from './About';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={CartComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
