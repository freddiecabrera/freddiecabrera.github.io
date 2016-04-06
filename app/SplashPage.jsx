import React from 'react'
import { redColor, verticalText, spTextContainer } from '../styles/style.jsx'
const SplashPage = React.createClass({
  render () {
    return (
      <div>
        <video id='BackgroundVideo' muted loop autoPlay>
          <source
            src='http://bit.ly/1UHLoUb'
          />
        </video>
          <a className='fader' style={verticalText} href="mailto:freddie.cabrera@scndhalf.com">freddie.cabrera@scndhalf.com</a>
          <div className="fader" style={spTextContainer}>
          <h4 style={ redColor }>Freddie Cabrera</h4>
          <p>Full Stack Web Developer</p>
          <a className="btn-floating btn-large waves-effect waves-light indigo accent-4 animated infinite pulse"><i className="material-icons">play_arrow</i></a>
        </div>
      </div>
    )
  }
})

module.exports = SplashPage
