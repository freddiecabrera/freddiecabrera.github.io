import React from 'react'

const SplashPage = React.createClass({
  render () {
    return (
        <video id='BackgroundVideo' loop autoPlay>
          <source
            src='https://11-lvl3-pdl.vimeocdn.com/01/1680/5/133404714/392104762.mp4?expires=1459914788&token=0659e40a0a14a99785bd3'
          />
        </video>
    )
  }
})

module.exports = SplashPage
