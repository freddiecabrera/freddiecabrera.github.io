import React from 'react'
const PropTypes = React.PropTypes
import scrollTo from './ScrollTo'

const HorizontalFab = React.createClass({
  scrollHere (destination) {
    scrollTo(destination)
  },
  render () {
return (
  <div className="faderThree fixed-action-btn click-to-toggle animated infinite pulse vertical" style={{bottom: '45px', right: '24px'}}>
    <a className="btn-floating btn-large indigo accent-4">
      <i className="large material-icons">more_vert</i>
    </a>
    <ul>
      <li onClick={this.scrollHere.bind(this, 0)}><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">home</i></a></li>
      <li onClick={this.scrollHere.bind(this, 734)}><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">code</i></a></li>
      <li onClick={this.scrollHere.bind(this, 1471)}><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">work</i></a></li>
      <li onClick={this.scrollHere.bind(this, 2211)}><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">description</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">accessibility</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">email</i></a></li>
    </ul>
  </div>
)
}
})



module.exports = HorizontalFab
