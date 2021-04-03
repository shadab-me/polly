import Logger from "js-logger";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  useEffect(() => {
    initializeLogger();
    Logger.info("log from js logger");
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div className="bg-blue-900 font-weight-900">Home</div>}
        />
        <Route exact path="/about" render={() => <div>About</div>} />
      </Switch>
    </Router>
  );
};

export default App;
