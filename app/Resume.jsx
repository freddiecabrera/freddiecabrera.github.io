import React from 'react'
import { resumeContainer, resumeIcon, servicesTitle, webStackPara, resumeDashColor, resumeParaStyle, dividerColors } from '../styles/style'

const Resume = props => (
  <div style={resumeContainer}>
    <img  src='http://imgh.us/interface_2.svg' style={resumeIcon} />
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
            <div className="divider" style={{marginRight: '30%', backgroundColor: 'white'}} ></div>
            <p style={resumeParaStyle}>
              <span style={resumeDashColor}>-</span> Build incoming orders <br />
              <span style={resumeDashColor}>-</span> Ensure orders are correct <br />
              <span style={resumeDashColor}>-</span> Weld material with fusion welder <br />
              <span style={resumeDashColor}>-</span> Grind Weld to specified size <br />
              <span style={resumeDashColor}>-</span> Measure weld and material with micrometer <br />
              <span style={resumeDashColor}>-</span> Sand blast COROD <br />
              <span style={resumeDashColor}>-</span> Heat treat and harden material <br />
              <span style={resumeDashColor}>-</span> Build COROD strings to specified footage <br />
              <span style={resumeDashColor}>-</span> Maintain  clean worksite
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>FIELD SERVICE TECHNICIAN</p>
            <p>LIBERTY LIFT SOLUTIONS LLC | September 2013 - April 2014 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1RWUw1v'>libertylift.com</a></p>
            <p style={{color: '#2962ff'}}>8 months</p>
            <div className="divider" style={dividerColors} ></div>
            <p style={resumeParaStyle}>
              <span style={resumeDashColor}>-</span> Preventive maintenance inspections <br />
              <span style={resumeDashColor}>-</span> Pumping unit installation <br />
              <span style={resumeDashColor}>-</span> Polished rod replacement <br />
              <span style={resumeDashColor}>-</span> Changing of belts, sheaves and prime movers <br />
              <span style={resumeDashColor}>-</span> Optimization – stroke changes, unit balancing and rod string adjustment <br />
              <span style={resumeDashColor}>-</span> Bearing maintenance <br />
              <span style={resumeDashColor}>-</span> Gas lift system setup and repair <br />
              <span style={resumeDashColor}>-</span> Hydraulic jet pump installation and service
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>FIELD SERVICE TECHNICIAN</p>
            <p>Weatherford ALS | March 2013 - August 2013 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1WjtFlA'>weatherford.com</a></p>
            <p style={{color: '#2962ff'}}>6 months</p>
            <div className="divider" style={dividerColors} ></div>
            <p style={resumeParaStyle}>
              <span style={resumeDashColor}>-</span> Preventive maintenance inspections <br />
              <span style={resumeDashColor}>-</span> Pumping unit installation <br />
              <span style={resumeDashColor}>-</span> Polished rod replacement <br />
              <span style={resumeDashColor}>-</span> Changing of belts, sheaves and prime movers <br />
              <span style={resumeDashColor}>-</span> Optimization – stroke changes, unit balancing and rod string adjustment <br />
              <span style={resumeDashColor}>-</span> Bearing maintenance <br />
              <span style={resumeDashColor}>-</span> Gas lift system setup and repair <br />
              <span style={resumeDashColor}>-</span> Hydraulic jet pump installation and service
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>SHOP HAND</p>
            <p>Weatherford COROD | April 2013 - March 2013 <br /> <a style={{color: '#2962ff'}} href='http://bit.ly/1qCDTSa'>weatherford.com</a></p>
            <p style={{color: '#2962ff'}}>11 months</p>
            <div className="divider" style={dividerColors} ></div>
            <p style={resumeParaStyle}>
              <span style={resumeDashColor}>-</span> Operate 5 ton overhead cranes <br />
              <span style={resumeDashColor}>-</span> Order parts/tools needed for the entire plant. <br />
              <span style={resumeDashColor}>-</span> Shipping and receiving <br />
              <span style={resumeDashColor}>-</span> Maintenance <br />
              <span style={resumeDashColor}>-</span> Cut, weld, and grind COROD samples when needed <br />
              <span style={resumeDashColor}>-</span> Operate Komatsu loader <br />
              <span style={resumeDashColor}>-</span> Operate Mig welder <br />
              <span style={resumeDashColor}>-</span> Operate torch <br />
              <span style={resumeDashColor}>-</span> Maintain clean worksite
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
            <div className="divider" style={{marginRight: '30%', backgroundColor: 'white'}} ></div>
            <p style={resumeParaStyle}>
              I have been learning Full Stack Web Development from the best teachers in the industry through these websites: <br />
              <span style={resumeDashColor}>-</span> <a style={resumeParaStyle} href='http://www.reactjsprogram.com/'> reactjsprogram.com</a> <br />
              <span style={resumeDashColor}>-</span> <a style={resumeParaStyle} href='https://frontendmasters.com/courses/'> frontendmasters.com</a> <br />
              <span style={resumeDashColor}>-</span> <a style={resumeParaStyle} href='https://egghead.io/'> egghead.io</a> <br />
              <span style={resumeDashColor}>-</span> <a style={resumeParaStyle} href='https://www.freecodecamp.com/'> freecodecamp.com</a> <br />
              <span style={resumeDashColor}>-</span> <a style={resumeParaStyle} href='https://www.coursera.org/'> coursera.org</a>
            </p>
          </div>
          <div className='col s12' style={{textAlign: '-webkit-left', marginLeft: '48%', marginBottom: '10%'}}>
            <p style={{backgroundColor: '#2962ff', minWidth: '300%'}}>TRANSFEROLOGY</p>
            <p>Taft College | 2010 - 2011 </p>
            <p style={{color: '#2962ff'}}>Dropped Out</p>
            <div className="divider" style={dividerColors} ></div>
            <p style={resumeParaStyle}>I dropped out so that I could work to take care of my family and put my wife through college. I was <br /> working on transfer credits.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

module.exports = Resume
