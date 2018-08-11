import React, { Component } from 'react';
import '../App.css'

const Col = (props) => {
  return (
    < div
      id = {props.id}
      className = 'column'
      title = {props.title}
      onDragOver = { props.handleDragOver }
      onDrop = { props.handleDrop }
    >
      { props.tasks }
    </div>
  )
}

class DragBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: [
        { id: '1', status: 'wip', title: 'second' },
        { id: '2', status: 'wip', title: 'third' },
        { id: '3', status: 'wip', title: 'fourth' },
        { id: '0', status: 'wip', title: 'first' }
      ],
      tasks: []
    }
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    // create the draggable tasks elements
    this.state.data.forEach (item => {
      this.state.tasks.push(
        <div
          key = {item.id}
          className = 'box'
          id = {item.id}
          draggable = 'true'
          onDragStart = {this.handleDragStart}
          title = {item.title}
        >
          {item.title}
        </div>
      )
    })
  }

  // fn to rearrange arr based on target and source indices, 
  rearrange(arr, src, tgt) {
    // ensure the swap is within range
    if (tgt > arr.length) {
      return -1
    }
    // set the partitions
    let front = arr.slice(0, src)
    let end = arr.slice(src + 1)
    front.splice(tgt, 0, arr[src])
    // return the new array
    return front.concat(end)
  }
  // handle the initial drag event
  handleDragStart(event) {
    const { tasks } = this.state
    let item = event.target;
    // find the array index of the task in state
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.id === item.id) {
        event.dataTransfer.setData('index',i)
      }
    }
    event.dataTransfer.setData('id', item.id)
    event.dataTransfer.setData('parent', item.parentNode.title)
    // console.log(` Index: ${item} , Item: `, item)
  }
  // while dragging...
  handleDragOver (event) {
    event.preventDefault();
  }
  // handle the drop event
  handleDrop(event,arr) {
    event.preventDefault();
    const { tasks } = this.state
    let drop = event.target;
    let dropIndex = null;
    // find the array index of the task in state
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.id === drop.id) {
        dropIndex = i;
      }
    }

    let dragId = event.dataTransfer.getData('id')
    let parent = event.dataTransfer.getData('parent')
    // convert index from string to int '+'
    let dragIndex = +event.dataTransfer.getData('index')

    console.log(`===> parent: ${parent}, drag id: ${dragId}, dragindex: ${dragIndex}, dropIndex: ${dropIndex} `)


  }
  
  render () {
    
    return (
      <div className = 'grid' >
        <div className = 'title' id= 't1'> <h2> WIP </h2> </div>
      
       <div className = 'title' id= 'view'> 
        <h2> Swapping within a list too! </h2> 
       </div>

        <Col 
          id ='wip'
          title = 'wip'
          tasks = {this.state.tasks}
          handleDragOver = {this.handleDragOver}
          handleDrop = {this.handleDrop}
        />

      </div>
    )
  }
}

export default DragBox

// work on setting drop fn based on parent element id or title