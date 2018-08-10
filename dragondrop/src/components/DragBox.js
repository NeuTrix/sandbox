import React, { Component } from 'react';
import '../App.css'

const Col = (props) => {
  return (
    < div
      className = 'column'
      id = {props.id}
      onDragOver = { props.handleDragOver }
      onDrop = { props.handleDrop } 
    >
      <span className = 'title'> <h2> { props.id } </h2> </span>
      { props.tasks[props.id] }
    </div>
  )
}

class DragBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      taskList: [
        { id: '0', category: 'wip', title: 'first' , status: 'pending'},
        { id: '1', category: 'wip', title: 'second' , status: 'pending'},
        { id: '2', category: 'wip', title: 'third' , status: 'pending'},
        { id: '3', category: 'wip', title: 'fourth' , status: 'pending'}
      ]
    }
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(event) {
    let item = event.target
    event.dataTransfer.setData('id', item.id)
    event.dataTransfer.setData('parent_id', item.parentNode.id)
  }

  handleDragOver (event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault();
    console.log('==>', event.target.className)
    let type = event.target.className;
    let id = event.dataTransfer.getData('id')
    let parent_id = event.dataTransfer.getData('parent_id')
    console.log(`===> sup! ${id} AND ${parent_id}`)
    let tasks = this.state.taskList.filter (item => {
      if (item.id === id && type === 'column') {
        item.category === 'wip'
          ? item.category = 'comp'
          : item.category = 'wip' 
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
      comp: []
    }
    
    this.state.taskList.forEach ( (item) => {
     tasks[item.category].push(
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
        <Col 
          id = 'wip'
          tasks = {tasks}
          handleDragOver = {this.handleDragOver}
          handleDrop = {this.handleDrop}
        />

        <div id='view'>
        {tasks.wip[0]}
        </div>

        <Col 
          id = 'comp'
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