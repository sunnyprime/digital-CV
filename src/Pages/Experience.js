import React, { Component } from 'react';
import Exp from '../Component/Exp';
import { expData } from '../Data/lifeDetails'

class Experience extends Component {
    state = {
        expr: expData
      };
      removeTour = id => {
        console.log(id);
        console.log("test");
        
      };
    render() {
        const { expr } = this.state;
        console.log(expr);
        
        return (
            <div className="centered">
                <h4>Experience:-</h4>
                <ul>
                <li>
               {expr.map(exp => (
                   <Exp key={exp.id} exp={exp} /> 
               ))}</li>
               </ul>
                
            </div>
        );
    }
}



export default Experience;