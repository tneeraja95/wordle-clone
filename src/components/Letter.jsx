import React from 'react'
import './Letter.css'

function Letter({letter, bgColor, width="43"}) {
  return (
    <div className='letter' style={{backgroundColor: bgColor, width: width+"px" }}>
      {letter}
    </div>
  )
}

export default Letter
