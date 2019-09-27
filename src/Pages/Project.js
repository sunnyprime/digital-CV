import React, { Component } from 'react';
import { projectData } from '../Data/lifeDetails'
import Pro from '../Component/Pro';
class Project extends Component {
    state ={
        prodata:projectData
    }
    render() {
        const { prodata } = this.state
        return (
            <div className="centered">
                <h3>project</h3>
                <ul>
                    {prodata.map(pro => (
                        <div><li><Pro key={pro.id} pro={pro} /></li></div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Project;