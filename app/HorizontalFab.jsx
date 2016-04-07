import React from 'react'

const HorizontalFab = props => (
  <div className="fixed-action-btn vertical faderTwo" style={{bottom: '45px', right: '24px'}}>
    <a className="btn-floating btn-large indigo accent-4">
      <i className="large material-icons">more_vert</i>
    </a>
    <ul>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">home</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">code</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">work</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">description</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">accessibility</i></a></li>
      <li><a className="btn-floating waves-effect waves-light indigo accent-4 "><i className="material-icons">email</i></a></li>
    </ul>
  </div>
)

module.exports = HorizontalFab
