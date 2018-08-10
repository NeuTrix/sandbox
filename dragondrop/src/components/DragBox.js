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
      <Drags id='left'   val= 'L'/> 
      <Drags id='middle' val= 'M'/>
      <Drags id='right'  val= 'R'/>
    </div>
  )
}

class DragBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasksList: [
        { category: 'wip', title: 'first' , status: 'pending'},
        { category: 'wip', title: 'second' , status: 'pending'},
        { category: 'wip', title: 'third' , status: 'pending'},
        { category: 'wip', title: 'fourth' , status: 'pending'}
      ]
    }
  }

  render () {
    let task = {
      wip: [],
      comp: []
    }

    this.state.tasksList.forEach ( item => {
     task[item.category].push(
       <div
        key= {item.title}
        className= 'draggable'
        title= {item.title}
      >
        {item.title}
      </div>

     )
    })

    return (
    <div className= 'grid' >
      <Col id='wip' title= "WIP" />
      <div id='view'/>
      <Col id= 'done' title= "Done" />
    </div>
  )
  }
}

export default DragBox