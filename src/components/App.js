import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import AddProperty from "./AddProperty";
import Properties from "./Properties";

import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
