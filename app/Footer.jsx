import React from 'react'
import { footerBlock, footerText, footerText2, footerBlock2, socialMediaIcons } from '../styles/style'

const Footer = props => (
  <div style={{marginBottom: '0px'}} className='row'>
  <div className='col s9' style={footerBlock2}>
    <p style={footerText}>I hope you enjoyed you're experience. If you would like to work together,<br /> contact me at <a style={{color: 'white'}} href="mailto:freddiecabrera10@gmail.com">freddiecabrera10@gmail.com</a></p>
    <div style={{marginLeft: '3%'}} className='yee'>
      <a href='https://twitter.com/CabreraFreddie'><img src='http://imgh.us/symbol.svg' style={socialMediaIcons}/></a>
      <a href='https://www.linkedin.com/in/freddiecabrera'><img src='http://imgh.us/social_3.svg' style={socialMediaIcons}/></a>
      <a href='https://github.com/freddiecabrera'><img src='http://imgh.us/social-media_(1).svg' style={socialMediaIcons}/></a>
      <a href='https://www.instagram.com/scndfred/'><img src='http://imgh.us/social-media.svg' style={socialMediaIcons}/></a>
    </div>
  </div>
  <div className='col s3' style={footerBlock}>
    <p style={footerText2}>&#169;2016 Freddie Cabrera.<br/>Made with <span style={{color: '#2962ff'}}>&#9825;</span> under the California sun.</p>
  </div>
  </div>
)

module.exports = Footer
