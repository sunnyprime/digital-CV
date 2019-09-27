import React, { Component } from 'react';

class Keyskills extends Component {
    render() {
        return (
            <div className="centered">
                <h4>KeySkills</h4>
                <ul>
                    <li><b>Programming Languange:</b>{keyskills.Programming}</li>
                    <li><b>FrameWork:</b>{keyskills.Framework}</li>
                    <li><b>Operating System:</b>{keyskills.Operating_System}</li>
                    <li><b>Board:</b>{keyskills.Board}</li>
                    <li><b>Database:</b>{keyskills.Database}</li>
                </ul>
            </div>
        );
    }
}
const keyskills = 
    {
        Programming: "Python, HTML, CSS, Java Script",
        Framework:"Bootstrap, Django, ReactJS, Angular",
        Operating_System: "Linux, Raspbian, Windows",
        Board: "Node MCU, Raspberry pi, Arduino",
        Database:"MySQL, MongoDB "
    }


export default Keyskills;