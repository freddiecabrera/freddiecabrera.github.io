import React from 'react'
import { spHeader, verticalText, spTextContainer, socIcons } from '../styles/style'
import { Link } from 'react-router'
const SplashPage = props => (
  <div>
    <div className='fullscreen-bg'>
    <video className='fullscreen-bg__video' muted loop autoPlay>
      <source
        src='http://bit.ly/1UHLoUb'
      />
    </video>
    </div>
    <a className='fader' style={verticalText} href="mailto:freddie.cabrera@scndhalf.com">freddie.cabrera@scndhalf.com</a>
    <div className="fader" style={spTextContainer}>
      <h4 style={spHeader}>HELLO, I'M FREDDIE</h4>
      <p>Full Stack Web Developer</p>

      <Link to='/home'>
        <div><button className="btn-floating btn-large waves-effect waves-light indigo accent-4 animated infinite pulse"><i className="material-icons">play_arrow</i></button></div>
      </Link>
    </div>
  </div>
)

module.exports = SplashPage
