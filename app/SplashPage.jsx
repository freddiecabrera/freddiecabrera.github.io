import React from 'react'
const SplashPage = React.createClass({
  render () {
    return (
      <div>
        <video id='BackgroundVideo' muted loop autoPlay>
          <source
            src='http://bit.ly/1UHLoUb'
          />
        </video>
        <div className="sp-text-container">
          <h3>Freddie Cabrera</h3>
          <p>Web Developer</p>
          <a className="btn-floating btn-large waves-effect waves-light pink accent-3 animated infinite pulse"><i className="material-icons">more_horiz</i></a>
        </div>
      </div>
    )
  }
})

module.exports = SplashPage
