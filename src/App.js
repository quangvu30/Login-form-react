import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/dashboard.component";
import Auth from "./components/auth/auth.component";
import useToken from "./useToken";

function App() {
  const { token } = useToken();

  if (!token) {
    return <Auth />;
  }
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
