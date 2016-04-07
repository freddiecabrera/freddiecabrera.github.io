import React from 'react'
import { tabHolder, temp, navHeader, mouseIcon, navHeaderP } from '../styles/style'
import HorizontalFab from './HorizontalFab'

const NavBar = React.createClass({
  getInitialState: function() {
  return {HF: ''};
  },
  componentDidMount () {
    var  lastScrollPosition = 0
    window.onscroll = function() {
      let newScrollPosition = window.scrollY
      console.log(newScrollPosition);
      if (newScrollPosition <= 71){
        this.setState({
          HF: null
        })
      }else{
        this.setState({
          HF: <HorizontalFab />
        })
      }
      lastScrollPosition = newScrollPosition
    }.bind(this)
  },
  render () {
    return (
      <div>
        <div className='bgImageContainer'>
          <img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300" alt="background-image" className='bgImage'/>
        </div>
        <div className='navContainer faderTwo'>
        <p className='pTag'>F</p>
        <ul className='menu'>
          <li style={tabHolder} href="#">HOME</li>
          <li style={tabHolder} href="#">STACK</li>
          <li style={tabHolder} href="#">SERVICES</li>
          <li style={tabHolder} href="#">RESUME</li>
          <li style={tabHolder} href="#">ABOUT</li>
          <li style={tabHolder} href="#">CONTACT</li>
        </ul>
        <h4 style={navHeader}>WELCOME</h4>
        <p style={navHeaderP}>I hope you enjoy your experiance, scroll down to get to know me.</p>
        <img src='http://imgh.us/mouse.svg' style={mouseIcon}/>
        {this.state.HF}
      </div>
    </div>
    )
  }
})
module.exports = NavBar
