import React from 'react'
import { workContainer, webStackIcon, workTitle, webStackPara } from '../styles/style'

const Work = pops => (
  <div style={ workContainer } className='container'>
    <div className='stackContainer faderTwo'>
    <img  src='http://imgh.us/webdesign.svg' style={webStackIcon} />
      <p style={workTitle}>PORTFOLIO</p>
      <p style={webStackPara}>This is Ullibol, a data visualization web app. I haven't launched it yet but click on the images to check out the code/current progress.</p>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12' style={{marginTop: '3em'}}>
            <a href='https://github.com/freddiecabrera/ullibol-client' target='github'><img className='waves-effect waves-light z-depth-3' src='http://i.imgur.com/F6TpPON.png' style={{height: '13em', margin: '1em'}} /></a>
            <a href='https://github.com/freddiecabrera/ullibol-client' target='github'><img className='waves-effect waves-light z-depth-3' src='http://i.imgur.com/GjIn0EO.png' style={{height: '13em', margin: '1em'}} /></a>
            <a href='https://github.com/freddiecabrera/ullibol-client' target='github'><img className='waves-effect waves-light z-depth-3' src='http://i.imgur.com/DRcnCEZ.jpg' style={{height: '13em', margin: '1em'}} /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

module.exports = Work
