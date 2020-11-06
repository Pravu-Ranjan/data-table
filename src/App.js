import React, { Fragment } from "react";
import CorporateProfiles from "./Components/Layouts/CorporateProfiles";
import Appbar from "./Components/Layouts/Navbar"
import "./App.css";

import {BrowserRouter as Router } from "react-router-dom" 

function App() {
  return (
  <Fragment>
    <Router>
    <Appbar/>
    <CorporateProfiles/>
    </Router>
    
  </Fragment>
  );
}

export default App;
