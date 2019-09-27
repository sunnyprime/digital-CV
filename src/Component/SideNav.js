import React, { Component } from 'react';
// import image from '../../image/image'


class SideNav extends Component {
   
    render() {
        return (
            <div className="sidebar">
            <h3 className="mx-auto align-item-center">VIVEK KUMAR</h3>
            <h5>B.Tech(CSE)</h5>
            <img src={img} alt="..." className="img-thumbnail align-item-center" />
                <br/><br/>

                <h6>Personal Details:-</h6>
                <ul className="list-groups">                
                
                    <li><b>Name:</b> {personal.name}</li>
                    <li><b>Date of Birth:</b> {personal.dob}</li>
                    <li><b>Nationality:</b> {personal.Nationality}</li>
                    <li><b>Marital Status:</b> {personal.Marital}</li>
                    <li><b>Language known:</b> {personal.Language}</li>
                </ul>
                <h6>Contact Detail</h6>
                <ul>
                <li><b>Phone:</b> {contactData.phone}</li>
                <li><b>Email:</b> {contactData.email}</li>
                <li><b>Skype:</b> {contactData.skype}</li>
                <li><b>Permanent Address:</b> {contactData.permanent_add}</li>
                <li><b>Present Address:</b> {contactData.present_address}</li>
                </ul>
            </div>
        );
    }
}
const img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Wwd3zQA1jsHup0KbUuuwy-G2-lCUuQHHFJ2-mgxNAl0yzCulYg"
const personal = 
{
    name: "Vivek kumar",
    avatar:"https://avatars1.githubusercontent.com/u/32408813?s=400&u=6a7fc6dcd66e003b25bbfc9f2ed9cb366b13eec3&v=4",
    dob:"10/03/1994",
    Nationality: "Indian",
    Marital: "Single",
    Language:"English & Hindi"
}

const contactData = 
    {
        phone:"8409298120",
        email:"kr.vivek.kr@gmail.com",
        skype:"kr.vivek.kr",
        permanent_add:"C/o Shyam Narain Prasad– Advocate, Salimpur Ahara, Lane no-3, Kadam Kuan, Patna-800003",
        present_address:"Aryan Residence, Thanisandra Main Rd, Railwaymen Layout, Sri Balaji Krupa Layout, Bengaluru, Karnataka 560076"
    }



export default SideNav;