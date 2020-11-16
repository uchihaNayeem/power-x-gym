import React from "react";
import MembershipForm from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Pricing from "./components/service/Pricing/Pricing";
import OurClasses from "./components/service/OurClasses/OurClasses";

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
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <h2>this is home page.</h2>
            <Link to="/form">form</Link>
            <br />
            <Link to="/pricing">pricing</Link>
            <br />
            <Link to="/services">our services</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
