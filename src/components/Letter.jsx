import React from 'react'
import './Letter.css'

function Letter({letter, bgColor, onLetterClick, width="43"}) {
   // console.log(typeof letter);
   let key = letter;
   if(typeof letter === 'object') //backspace is a symbol object
        key = 'Backspace';
  return (
    <div className='letter' style={{backgroundColor: bgColor, width: width+"px" }} onClick={()=> {onLetterClick(key)}} >
      {letter}
    </div>
  )
}

export default Letter
