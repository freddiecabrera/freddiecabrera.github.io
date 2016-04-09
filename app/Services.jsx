import React from 'react'
import { servicesContainer, webStackIcon, servicesTitle, webStackPara, servicesDisIcon, servicesDisTitle, servicesDisPar1, blockOne } from '../styles/style'

const Services = props => (
  <div style={ servicesContainer } className='container'>
    <div className='stackContainer faderTwo'>
    <img  src='http://imgh.us/suitcase_1.svg' style={webStackIcon} />
      <p style={servicesTitle}>SERVICES</p>
      <p style={webStackPara}>If you need any work done these are the services I provide.</p>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>
            <div style={blockOne} className='col s5 offset-s2'>
              <img className='col s4' style={servicesDisIcon} src='http://imgh.us/map_11.svg' />
              <div className='col s8'>
                <p style={servicesDisTitle}>User Experiance</p>
                <p style={servicesDisPar1}>Prototyping on paper and on tools like UXPin and InVision.</p>
              </div>
              <img className='col s4' style={servicesDisIcon} src='http://imgh.us/technology_(1).svg' />
              <div className='col s8'>
                <p style={servicesDisTitle}>Web Design</p>
                <p style={servicesDisPar1}>Design using Sketch, specializing in minimal design.</p>
              </div>
            </div>
            <div className='blockTwo col s5'>
              <img className='col s4' style={servicesDisIcon} src='http://imgh.us/technology_(2).svg' />
              <div className='col s8'>
                <p style={servicesDisTitle}>Backend</p>
                <p style={servicesDisPar1}>API design and web services using Node, Express, & MongoDB</p>
              </div>
              <img className='col s4' style={servicesDisIcon} src='http://imgh.us/technology_3.svg' />
              <div className='col s8'>
                <p style={servicesDisTitle}>Web Development</p>
                <p style={servicesDisPar1}>HTML, CSS, JavaScript, ReactJS, & I also know a bit of AngularJS 1.5.X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
module.exports = Services
