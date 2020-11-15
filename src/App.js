import React from "react";
import MembershipForm from "./form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <MembershipForm />
          </Route>
          <Route path="/">
            <h2>This is homepage</h2>
            <Link to="/form">go to form</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
