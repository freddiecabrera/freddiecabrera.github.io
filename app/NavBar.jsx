import React from 'react'
import { tabHolder, temp, navHeader, mouseIcon, navHeaderP } from '../styles/style'
import HorizontalFab from './HorizontalFab'
import scrollTo from './ScrollTo'

const NavBar = React.createClass({
  getInitialState () {
    return ({
      HF: null
    })
  },
componentDidMount() {
    let lastScrollPosition = 0
    window.onscroll = function() {
        let newScrollPosition = window.scrollY
        console.log(newScrollPosition);
        if (newScrollPosition <= 71) {
            this.setState({HF: null})
        } else {
            this.setState({HF: <HorizontalFab/>})
        }
        lastScrollPosition = newScrollPosition
    }.bind(this)
},
  scrollHere (location) {
    scrollTo(location)
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
          <li onClick={this.scrollHere.bind(this, 734)} style={tabHolder} href="#">STACK</li>
          <li onClick={this.scrollHere.bind(this, 1578)} style={tabHolder} href="#">SERVICES</li>
          <li onClick={this.scrollHere.bind(this, 2375)} style={tabHolder} href="#">RESUME</li>
          <li onClick={this.scrollHere.bind(this, 5043)} style={tabHolder} href="#">WORK</li>
          <li onClick={this.scrollHere.bind(this, 5902)} style={tabHolder} href="#">ABOUT</li>
        </ul>
        <h4 style={navHeader}>WELCOME</h4>
        <p style={navHeaderP}>I hope you enjoy your experience, scroll down and get to know me.</p>
        <img onClick={this.scrollHere.bind(this, 734)} src='http://imgh.us/mouse.svg' style={mouseIcon}/>
        {this.state.HF}
      </div>
    </div>
    )
  }
})
module.exports = NavBar
