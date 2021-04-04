import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from "./components/Home.js";


function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <h1>*** RECIPES ***</h1>
        {/* <nav>
          <Link exact to="/">
            All Recipes
          </Link>
        </nav> */}
        
      </header>
      <Switch>
        <Route 
          path="/"
          render={() => <Home />}
         />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
