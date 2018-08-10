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
      { props.tasks[props.title] }
    </div>
  )
}

class DragBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      taskList: [
        { id: '0', status: 'wip', title: 'first' },
        { id: '1', status: 'wip', title: 'second' },
        { id: '2', status: 'wip', title: 'third' },
        { id: '3', status: 'wip', title: 'fourth' }
      ]
    }
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(event) {
    let item = event.target
    event.dataTransfer.setData('id', item.id)
    event.dataTransfer.setData('parentTitle', item.parentNode.title)
    console.log('xxx', item.parentNode.title)
  }

  handleDragOver (event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('id')
    let parentTitle = event.dataTransfer.getData('parentTitle')
    let drop = event.target;
    let tasks = this.state.taskList.filter (item => {
      console.log('==>', parentTitle,drop.title)
      if (item.id === id) {
        if (drop.className === 'column' && drop.title !== parentTitle){
          item.status === 'wip' ? item.status = 'done' : item.status = 'wip' 
        }
      }
      return item
    })

    this.setState({
      ...this.state, tasks
    })
  }
  
  render () {
    let tasks = {
      wip: [],
      done: []
    }
    
    this.state.taskList.forEach ( (item) => {
     tasks[item.status].push(
       <div
        key = {item.id}
        className = 'box'
        id = {item.id}
        draggable = 'true'
        onDragStart = {this.handleDrag}
        title = {item.title}
      >
        {item.title}
      </div>
     )
    })

    return (
      <div className = 'grid' >
        <div className = 'title' id= 't1'> <h2> WIP </h2> </div>
      
        <Col 
          id ='wip'
          title = 'wip'
          tasks = {tasks}
          handleDragOver = {this.handleDragOver}
          handleDrop = {this.handleDrop}
        />

        <div className = 'title' id= 'view'> <h2> Phantom ZOne! </h2> </div>
        <div className = 'title' id= 't2'> <h2> Done! </h2> </div>

        <Col 
          id = 'done'
          title = 'done'
          tasks = {tasks}
          handleDragOver = {this.handleDragOver}
          handleDrop =  {this.handleDrop}
        />
          
      </div>
    )
  }
}

export default DragBox

// work on setting drop fn based on parent element id or title