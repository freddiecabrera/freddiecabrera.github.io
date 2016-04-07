import React from 'react'
const { element } = React.PropTypes

const Main = props => (
  <div>
    {props.children}
  </div>
)

Main.PropTypes = {
  children: element.isRequired
}

module.exports = Main
