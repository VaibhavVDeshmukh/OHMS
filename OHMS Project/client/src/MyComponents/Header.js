import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './Homepage/AboutUs';
import HomePage from './Homepage/HomePage';
import Disclaimer from './Homepage/Disclaimer';
import hlogo2 from './Images/hlogo2.png'

class Header extends Component {
  constructor(props) {
    super();
  }



  render(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light header">
        <div>
          <a href="/HomePage"><img className="imgheight" src={hlogo2} /></a>
        </div>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav mr-auto">̥
            <li className="nav-item">
              <a className="nav-link" href="HomePage"><b>Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="AboutUs"><b>About Us</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Disclaimer"><b>Facilities</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="DoctorsPanel"><b>Panel Of Doctors</b></a>
            </li>
          </ul>
        </div>
        
      </nav>
    )
  }



}
export default Header;