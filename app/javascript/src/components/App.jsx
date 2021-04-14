import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  RedirectRoute,
} from "react-router-dom";
import initializeLogger from "common/logger";
import LoginForm from "components/Authentication/Login";
import SignupForm from "components/Authentication/Signup";
import Home from "components/Home";
import NavBar from "components/NavBar";
import CreatePoll from "components/Poll/CreatePoll";
import Poll from "components/Poll/Poll";
import { getFromLocalStorage, setToLocalStorage } from "helpers/storage";
import { requestIntercepts, setAuthHeaders } from "apis/axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { either, isEmpty, isNil } from "ramda";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initializeLogger();
    requestIntercepts();
    setAuthHeaders(setLoading);
  }, []);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn =
    !either(isNil, isEmpty)(authToken) && authToken !== "undefined";
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <ToastContainer />
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
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
      <Route path="*" component={LoginForm} />)
    </Switch>
  );
};
export default App;
