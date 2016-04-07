import React from 'react'
import { tabHolder, temp } from '../styles/style'
import HorizontalFab from './HorizontalFab'

var hello;

const NavBar = React.createClass({
  getInitialState: function() {
  return {HF: ''};
  },
  componentDidMount () {
    var  lastScrollPosition = 0
    window.onscroll = function() {
      let newScrollPosition = window.scrollY
      console.log(newScrollPosition);
      if (newScrollPosition <= 100){
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
    var hi = hello;
    return (
      <div className='navContainer'>
      <p className='pTag'>F</p>
        <ul className='menu'>
        <li style={tabHolder} href="#">HOME</li>
        <li style={tabHolder} href="#">STACK</li>
        <li style={tabHolder} href="#">SERVICES</li>
        <li style={tabHolder} href="#">RESUME</li>
        <li style={tabHolder} href="#">ABOUT</li>
        <li style={tabHolder} href="#">CONTACT</li>
        </ul>
        {this.state.HF}
        <h1 style={temp}>hello</h1>
      </div>

    )
  }
})
module.exports = NavBar
