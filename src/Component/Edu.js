import React, { Component } from 'react';

class Edu extends Component {
    
    render() {
        const {type,duration,institute,marks}= this.props.edu;
        return (
            <div>
                <b>{type}</b> | <b>{institute}</b> | <b>{duration}</b> |
                <b>{marks}</b>
            </div>
        );
    }
}

export default Edu;