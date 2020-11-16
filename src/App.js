import React from "react";
import MembershipForm from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OurClasses from "./components/service/OurClasses";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <MembershipForm />
          </Route>
          <Route path="/services">
            <OurClasses />
          </Route>
          <Route path="/">
            <h2>this is home page.</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
