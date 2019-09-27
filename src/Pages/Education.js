import React, { Component } from 'react';
import { educations } from '../Data/lifeDetails'
import Edu from '../Component/Edu';

class Education extends Component {
    state = {
        education:educations
    };
    render() {
        const { education } = this.state;
        return (
            <div className="centered">
               <h3>Education</h3>
               <ul>
               
               {education.map(edu => (
                   <li><Edu key={edu.id} edu={edu} /></li>
               ))}
               
               </ul> 
            </div>
        );
    }
}

export default Education;