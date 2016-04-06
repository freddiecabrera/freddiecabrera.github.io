import React from 'react'
const SplashPage = React.createClass({
  render () {
    return (
        <video id='BackgroundVideo' muted loop autoPlay>
          <source
            src='http://bit.ly/22bptnw'
          />
        </video>
    )
  }
})

module.exports = SplashPage
