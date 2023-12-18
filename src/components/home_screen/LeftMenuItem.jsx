import React from 'react'

export default function LeftMenuItem(props) {
  return (
    <div className='item'>
        {props.icon}

        <p className={props.selected === true ? 'selected' : ''}>{props.text}</p>
  </div>
  )
}
