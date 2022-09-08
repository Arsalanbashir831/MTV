import React from 'react'

const Label = (props) => {
  return (
   <>
    <div class="label">
    <label for="firstStep">
    <p class="number">{props.no}</p>{props.text}</label>
    </div>
   </>
  )
}

export default Label