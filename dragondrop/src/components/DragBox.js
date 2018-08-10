import React, { Component } from 'react';
import '../App.css'

function handleDrag (event) {
  event.dataTransfer.setData('text/plain', 'Drag box, yo!')
  // event.dataTransfer.effectAllowed = 'move';
  // return alert("Wuzzup!")
}

function handleDrop (event) {
  event.preventDefault();
}

const Drags = (props) => {
  return (
    <div 
      className = 'box' 
      draggable = 'true'
      onDragStart= {handleDrag}
    >
      { props.val } 
    </div>
  )
}

const Col = (props) => {
  return (
    <div 
      className = "column"
      dragover = {handleDrop}
    > 
      <div className= 'title' >
        {props.title}
      </div>
      
    </div>
  )
}

class DragBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: [
        { category: 'wip', title: 'first' , status: 'pending'},
        { category: 'wip', title: 'second' , status: 'pending'},
        { category: 'wip', title: 'third' , status: 'pending'},
        { category: 'wip', title: 'fourth' , status: 'pending'}
      ]
    }
  }

  render () {
    let tasks = {
      wip: [],
      comp: []
    }

    this.state.taskList.forEach ( (item) => {
     tasks[item.category].push(
       <div
        key= {item.title}
        className= 'box'
        title= {item.title}
      >
        {item.title}
      </div>

     )
    })

    return (
      <div className= 'grid' >
        <div id='wip' title= "WIP">
          <span> <h2> WIP </h2> </span>
          {tasks.wip}
        </div>
        <div id='view'/>
        <div id='done' title= "Done">
          <span> <h2> COMP </h2> </span>
          {tasks.comp}
        </div>
      </div>
    )
  }
}

export default DragBox