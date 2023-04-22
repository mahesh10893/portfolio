import React, {Component} from 'react'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'

import './Intro.css'

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy! I am </span>
            <span>Mahesh Vallepu </span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>

          <button className="button i-button">Hire me</button>

          <div className="i-icons">
            <img src={Github} alt="Github" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="Vector1" />
          <img src={Vector2} alt="Vector2" />
          <img src={boy} alt="boy" />
        </div>
      </div>
    )
  }
}
export default Intro
