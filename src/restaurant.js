import React from 'react'

function Restaurant(props){
  return(
      <div>
    <h1>This is Monal Our Quality {props.tagofrest}</h1>
    <h1>It is situated in {props.location}</h1>
    <h1>Lahore is the {props.signi} of the Punjab</h1>
    </div>
  )
}
export default Restaurant