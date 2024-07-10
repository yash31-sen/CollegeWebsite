import React from 'react'
import './Title.css'
function Title({subtitle,title}) {
  return (
  <div className="title">
    <p className="subtutle">{title}</p>
    <h2>{subtitle}</h2>
  </div>
  )
}

export default Title