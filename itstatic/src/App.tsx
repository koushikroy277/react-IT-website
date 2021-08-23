import React from "react";
import "./App.scss";

// React Router DOM
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";

// Common Component
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect exact to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
