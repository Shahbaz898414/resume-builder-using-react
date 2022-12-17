import React from 'react'
import style from './Input.module.css'

function Inputcontrol({label,...props}) {
  return (
    <div className={style.container}>
      {
        label&&<label htmlFor="">{label}</label>
      }

      <input type="text" {...props}/>
      
    </div>
  )
}

export default Inputcontrol