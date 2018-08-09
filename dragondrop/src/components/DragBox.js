import React, { Compnent } from 'react';
import '../App.css'

function DragBox () {
  return (
    <div className= 'grid' >
      <div className= 'box' id='left'> 
        <h1> L </h1> 
      </div>
      <div className= 'box' id='middle'>
        <h1> M </h1> 
      </div>
      <div className= 'box' id='right'>
        <h1> R </h1> 
      </div>
    </div>
  )
}

export default DragBox