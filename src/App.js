import './App.css';
import { Switch, Router } from "react-router-dom";

import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Router to="/">
          <Home />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
