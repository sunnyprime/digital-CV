import React, { Component } from 'react';

class Pro extends Component {
    render() {
        const { name, place ,duration, technology, hardware,detail }= this.props.pro
        return (
            <div>
               <b>Name:</b> {name}<br/>
                <b>Duration:</b> {duration}<br/>
                <b>place:</b> {place}<br/>
                <b>Techonlogy Used:</b> {technology} <br/>
                <b>Hardware:</b>: {hardware}
                <b>Description</b>: {detail}


            </div>
        );
    }
}

export default Pro;