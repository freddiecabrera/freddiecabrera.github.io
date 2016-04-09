import React from 'react'
import { resumeContainer, resumeIcon, servicesTitle, webStackPara } from '../styles/style'

const Resume = props => (
  <div style={resumeContainer}>
    <i className="material-icons" style={resumeIcon}>description</i>
    <p style={servicesTitle}>RESUME</p>
    <div className="container-fluid" style={{color: 'white', marginTop: '10%'}}>
      <div className="row">

        <div className='col s12'>
          <div className='col s4' style={{marginLeft: '6%'}}>
            <img style={{height: '60px'}} src="http://imgh.us/suitcase.svg" alt=""/>
            <h6>WORK EXPERIANCE</h6>
          </div>
          <div className='col s5 push-s1' style={{textAlign: '-webkit-left'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>OPERATOR 1</p>
            <p>Weatherford COROD | April 2014 - October 2015 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1qCDTSa'>weatherford.com</a></p>
            <p style={{color: '#2962ff'}}>19 months</p>
            <div className="divider" style={{marginRight: '30%', backgroundColor: '#707070'}} ></div>
            <p>
              <span style={{color: '#2962ff'}}>-</span> Build incoming orders <br />
              <span style={{color: '#2962ff'}}>-</span> Ensure orders are correct <br />
              <span style={{color: '#2962ff'}}>-</span> Weld material with fusion welder <br />
              <span style={{color: '#2962ff'}}>-</span> Grind Weld to specified size <br />
              <span style={{color: '#2962ff'}}>-</span> Measure weld and material with micrometer <br />
              <span style={{color: '#2962ff'}}>-</span> Sand blast COROD <br />
              <span style={{color: '#2962ff'}}>-</span> Heat treat and harden material <br />
              <span style={{color: '#2962ff'}}>-</span> Build COROD strings to specified footage <br />
              <span style={{color: '#2962ff'}}>-</span> Maintain  clean worksite
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>FIELD SERVICE TECHNICIAN</p>
            <p>LIBERTY LIFT SOLUTIONS LLC | September 2013 - April 2014 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1RWUw1v'>libertylift.com</a></p>
            <p style={{color: '#2962ff'}}>8 months</p>
            <div className="divider" style={{marginRight: '72%', backgroundColor: '#707070'}} ></div>
            <p>
              <span style={{color: '#2962ff'}}>-</span> Preventive maintenance inspections <br />
              <span style={{color: '#2962ff'}}>-</span> Pumping unit installation <br />
              <span style={{color: '#2962ff'}}>-</span> Polished rod replacement <br />
              <span style={{color: '#2962ff'}}>-</span> Changing of belts, sheaves and prime movers <br />
              <span style={{color: '#2962ff'}}>-</span> Optimization – stroke changes, unit balancing and rod string adjustment <br />
              <span style={{color: '#2962ff'}}>-</span> Bearing maintenance <br />
              <span style={{color: '#2962ff'}}>-</span> Gas lift system setup and repair <br />
              <span style={{color: '#2962ff'}}>-</span> Hydraulic jet pump installation and service
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>FIELD SERVICE TECHNICIAN</p>
            <p>Weatherford ALS | March 2013 - August 2013 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1WjtFlA'>weatherford.com</a></p>
            <p style={{color: '#2962ff'}}>6 months</p>
            <div className="divider" style={{marginRight: '72%', backgroundColor: '#707070'}} ></div>
            <p>
              <span style={{color: '#2962ff'}}>-</span> Preventive maintenance inspections <br />
              <span style={{color: '#2962ff'}}>-</span> Pumping unit installation <br />
              <span style={{color: '#2962ff'}}>-</span> Polished rod replacement <br />
              <span style={{color: '#2962ff'}}>-</span> Changing of belts, sheaves and prime movers <br />
              <span style={{color: '#2962ff'}}>-</span> Optimization – stroke changes, unit balancing and rod string adjustment <br />
              <span style={{color: '#2962ff'}}>-</span> Bearing maintenance <br />
              <span style={{color: '#2962ff'}}>-</span> Gas lift system setup and repair <br />
              <span style={{color: '#2962ff'}}>-</span> Hydraulic jet pump installation and service
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>SHOP HAND</p>
            <p>Weatherford COROD | April 2013 - March 2013 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1qCDTSa'>weatherford.com</a></p>
            <p style={{color: '#2962ff'}}>11 months</p>
            <div className="divider" style={{marginRight: '72%', backgroundColor: '#707070'}} ></div>
            <p>
              <span style={{color: '#2962ff'}}>-</span> Operate 5 ton overhead cranes <br />
              <span style={{color: '#2962ff'}}>-</span> Order parts/tools needed for the entire plant. <br />
              <span style={{color: '#2962ff'}}>-</span> Shipping and receiving <br />
              <span style={{color: '#2962ff'}}>-</span> Maintenance <br />
              <span style={{color: '#2962ff'}}>-</span> Cut, weld, and grind COROD samples when needed <br />
              <span style={{color: '#2962ff'}}>-</span> Operate Komatsu loader <br />
              <span style={{color: '#2962ff'}}>-</span> Operate Mig welder <br />
              <span style={{color: '#2962ff'}}>-</span> Operate torch <br />
              <span style={{color: '#2962ff'}}>-</span> Maintain clean worksite
            </p>
          </div>
        </div>

        <div className="divider col s12" style={{backgroundColor: '#707070', margin: '120px 0 120px 0'}}></div>

        <div className='col s12'>
          <div className='col s4' style={{marginLeft: '6%'}}>
            <img style={{height: '60px'}} src="http://imgh.us/medical.svg" alt=""/>
            <h6>EDUCATION</h6>
          </div>
          <div className='col s5 push-s1' style={{textAlign: '-webkit-left'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>FULL STACK WEB DEVELOPMENT</p>
            <p>Self Taught University | June 2015 - Present </p>
            <p style={{color: '#2962ff'}}>Current</p>
            <div className="divider" style={{marginRight: '30%', backgroundColor: '#707070'}} ></div>
            <p>
              I have been learning Full Stack Web Development from the best teachers in the industry through these websites: <br />
              <span style={{color: '#2962ff'}}>-</span> <a style={{color: 'white'}} href='http://www.reactjsprogram.com/'> reactjsprogram.com</a> <br />
              <span style={{color: '#2962ff'}}>-</span> <a style={{color: 'white'}} href='https://frontendmasters.com/courses/'> frontendmasters.com</a> <br />
              <span style={{color: '#2962ff'}}>-</span> <a style={{color: 'white'}} href='https://egghead.io/'> egghead.io</a> <br />
              <span style={{color: '#2962ff'}}>-</span> <a style={{color: 'white'}} href='https://www.freecodecamp.com/'> freecodecamp.com</a> <br />
              <span style={{color: '#2962ff'}}>-</span> <a style={{color: 'white'}} href='https://www.coursera.org/'> coursera.org</a>
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%', marginBottom: '10%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>TRANSFEROLOGY</p>
            <p>Taft College | 2010 - 2011 </p>
            <p style={{color: '#2962ff'}}>Dropped Out</p>
            <div className="divider" style={{marginRight: '72%', backgroundColor: '#707070'}} ></div>
            <p>I dropped out so that I could work to take care of my family and put <br /> my wife through college. I was working on transfer credits.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

module.exports = Resume
