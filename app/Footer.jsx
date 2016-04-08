import React from 'react'
import { footerBlock } from '../styles/style'

const Footer = props => (
  <div style={footerBlock}>
    <p style={{color: 'white', textAlign: 'center', paddingTop: '50px', fontWeight: '300', fontStyle: 'light'}}>&#174;2016 Freddie Cabrera. All Rights Reserved.<br/>Made with &#9825; under the California sun.</p>
  </div>
)

module.exports = Footer
