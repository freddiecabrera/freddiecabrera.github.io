import React from 'react'
import { aboutContainer, aboutTitle, aboutTopPara, aboutBottomPara, aboutDivider } from '../styles/style'

const About = props => (
  <div style={aboutContainer}>
    <h1 style={aboutTitle}>ABOUT</h1>
    <h4 style={aboutTopPara}>I'M A DEVELOPER, I’M A FOOTBALLER, I LOVE THE WORLD AND IT'S NATURE, I LOVE DESIGN, AND I LOVE TECHNOLOGY. MY NAME IS FREDDIE CABRERA, AND I AM FROM BAKERSFIELD CALIFORNIA</h4>
    <div style={aboutDivider} className="divider"></div>
    <h5 style={aboutBottomPara}>I enjoy writing clean code as if it were a fine art. I am a Full Stack Web Developer, with front-end tendencies. I care about animals, climate change, deforestation, and ocean pollution.</h5>
  </div>
)

module.exports = About
