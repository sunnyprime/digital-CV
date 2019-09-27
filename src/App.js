import React from 'react';
import Home from './Pages/Home';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './Component/Navbar';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Keyskills from './Pages/Keyskills';
import Links from './Pages/Links';
import Project from './Pages/Project';
import Website from './Pages/Website';
import Default from './Pages/Default';
import SideNav from './Component/SideNav';


function App() {
  return (
    <Router>
      <main>
      <Navbar></Navbar>
      <div className="fluid-container">
        <div className="row">
        <div className="col-12 col-lg-3 col-md-3 col-sm-12">
        <SideNav></SideNav>
        </div>        
        <div className="col-8">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Experience" exact component={Experience} />
        <Route path="/Keyskills" exact component={Keyskills} />
        <Route path="/Links" exact component={Links} />
        <Route path="/Project" exact component={Project} />
        <Route path="/Website" exact component={Website} />
        <Route component={Default} />
        </Switch>     
        </div></div></div>
      </main>
    </Router>
  );
}

export default App;
