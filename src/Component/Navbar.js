import React from 'react';

import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">Digital CV</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link text-uppercase">Home</Link>
            </li>
            <li className="nav-item active">
                <Link to="/Experience" className="nav-link text-uppercase">Experience</Link>
            </li>
            <li className="nav-item active">
                <Link to="/Keyskills" className="nav-link text-uppercase">Keyskills</Link>
            </li>
            <li className="nav-item active">
                <Link to="/Links" className="nav-link text-uppercase">Links</Link>
            </li>
            <li className="nav-item active">
                <Link to="/Project" className="nav-link text-uppercase">Project</Link>
            </li>
            <li className="nav-item active">
                <Link to="/Website" className="nav-link text-uppercase">Website</Link>
            </li>

            </ul>
            </div>
            </nav>
        
    );
    };