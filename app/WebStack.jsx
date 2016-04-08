import React from 'react'
import { webStackMargin, mongoDB, expressJS, reactJS, nodeJS } from '../styles/style'
import ReactLogo from './ReactLogo'

const WebStack = props => (
  <div style={ webStackMargin } className='container'>
    <div className='stackContainer'>
      <i className="material-icons" style={{color: '#2962ff', fontSize: '120px'}}>code</i>
      <p style={{color: '#777777', fontSize: '12px'}}>This is the current stack that I like to work with. I also have some experiance with Angular 1.5x</p>
    </div>
    <img style={mongoDB} src='https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1054px-MongoDB-Logo.svg.png' />
    <img style={expressJS} src='http://amt.in/img/services/express.png' />
    <img style={reactJS} src='https://react-materialize.github.io/assets/react-materialize-logo.svg' />
    <img style={nodeJS} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'/>
  </div>
)

module.exports = WebStack
