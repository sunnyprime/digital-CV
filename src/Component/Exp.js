import React, { Component } from 'react';

class Exp extends Component {
    render() {
        const { as, company, duration, description } = this.props.exp
        return (
            <div>
                   Working as <b>{as}</b> in <b>{company}</b> | Worked from <b>{duration}</b>
                    | {description}               
            </div>
        );
    }
}

export default Exp;