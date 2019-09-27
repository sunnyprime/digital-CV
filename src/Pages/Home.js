import React, { Component } from 'react';
// import { personal, contactData } from "./../Data/personal";

class Home extends Component {
 
        
    
    render() {
        
        
        
        return (
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <ul className="list-group">
                <li className="list-group-item">Name:{personal.name}</li>
                <li className="list-group-item">Date of Birth:{personal.dob}</li>
            </ul>

            </div>                 
            </div>                
            </div>
        );
    }
}
const personal = 
{
    name: "Vivek kumar",
    dob:"10/03/1994",
    Nationality: "Indian",
    Marital: "Single",
    Language:"English & Hindi"
}


export default Home;