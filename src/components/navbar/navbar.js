import React, {Component} from 'react'

import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Mahesh</div>
          <span>toggle</span>
        </div>
        <div className="n-right">
          <ul style={{listStyleType: 'none'}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Testimonials</li>
          </ul>

          <button className="button">Contact us</button>
        </div>
      </div>
    )
  }
}

export default Navbar
