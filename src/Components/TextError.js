import React from 'react'
import '../App.css';

const TextError = (props) => {
  return (
    <div className="TextError">
         {
            props.children
         }
    </div>
  )
}

export default TextError