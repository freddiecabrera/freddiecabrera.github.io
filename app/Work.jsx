import React from 'react'
import { servicesContainer, webStackIcon, workTitle, webStackPara } from '../styles/style'

const Work = pops => (
  <div style={ servicesContainer } className='container'>
    <div className='stackContainer faderTwo'>
    <img  src='http://imgh.us/webdesign.svg' style={webStackIcon} />
      <p style={workTitle}>PORTFOLIO</p>
      <p style={webStackPara}>These are some of the projects I have built.</p>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>
            <div className="card col s3 z-depth-4" style={{marginLeft: '6%', marginTop: '6%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://d13yacurqjgara.cloudfront.net/users/366584/screenshots/2473300/404-01.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project<i className="material-icons right">close</i></span>
                <p>Oh snap! It looks like I haven't finished any projects worth showing. I'm working on it though just hold up a bit.</p>
              </div>
            </div>
            <div className="card col s3 z-depth-4" style={{marginLeft: '6%', marginTop: '6%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://d13yacurqjgara.cloudfront.net/users/366584/screenshots/2473300/404-01.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project<i className="material-icons right">close</i></span>
                <p>Oh snap! It looks like I haven't finished any projects worth showing. I'm working on it though just hold up a bit.</p>
              </div>
            </div>
            <div className="card col s3 z-depth-4" style={{marginLeft: '6%', marginTop: '6%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://d13yacurqjgara.cloudfront.net/users/366584/screenshots/2473300/404-01.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project<i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project<i className="material-icons right">close</i></span>
                <p>Oh snap! It looks like I haven't finished any projects worth showing. I'm working on it though just hold up a bit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

module.exports = Work
