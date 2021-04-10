import React, { useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  RedirectRoute,
} from "react-router-dom";
import initializeLogger from "../src/common/logger";
import LoginForm from "components/Authentication/Login";
import SignupForm from "components/Authentication/Signup";
import Home from "components/Home";
import NavBar from "components/NavBar";
import CreatePoll from "components/Poll/CreatePoll";
import Poll from "components/Poll/Poll";
import { getFromLocalStorage, setToLocalStorage } from "../src/helpers/storage";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  const isLoggedIn =
    getFromLocalStorage("authToken") !== null ||
    (undefined && getFromLocalStorage("email"));

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <AuthRoutes isLoggedIn={isLoggedIn} />
      ) : (
        <UnAuthRoutes isLoggedIn={isLoggedIn} />
      )}
    </Router>
  );
};
const AuthRoutes = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/poll/:id" component={Poll} />
      <Route exact path="/createpoll" component={CreatePoll} />
      <Route exact path="*" component={Home} />
    </Switch>
  );
};
const UnAuthRoutes = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/poll/:id" component={Poll} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
      <Route path="*" component={LoginForm} />)
    </Switch>
  );
};

export default App;
