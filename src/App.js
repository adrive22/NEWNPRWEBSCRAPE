import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/nav";
import Header from "./components/header/header";

const App = () => (
<div> <Nav /> 
<Header />
</div>
);

export default App;