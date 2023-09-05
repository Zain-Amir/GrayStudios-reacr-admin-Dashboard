import React from 'react'

const Button = ({color,bgColor,text,borderRadius,Size}) => {
  return (
    <button type ='button' 
      style={{backgroundColor:bgColor , color :color, borderRadius:borderRadius} }
      className='p-2 text-${size} hover:bg-white hover:text-slate-900 '
    >

        {text}
    </button>
  )
}

export default Button