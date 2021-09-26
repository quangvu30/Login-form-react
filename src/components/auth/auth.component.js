import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";
import useToken from "../../useToken";

function Auth() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              P2P Transaction
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/">
                <Login setToken={setToken} />
              </Route>
              <Route exact path="/sign-in">
                <Login setToken={setToken} />
              </Route>
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
