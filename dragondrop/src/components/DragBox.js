import React, { Component } from 'react';
import '../App.css'

class DragBox extends Component {
  constructor (props) {
    super(props)
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
    let id = event.target.id
    event.dataTransfer.setData('id', id)
    // event.dataTransfer.effectAllowed = 'move';
    console.log(`Dragging ${id}, B!`)
    // return alert("Wuzzup!")
  }

  handleDragOver (event) {
    event.preventDefault();
    console.log('daraggging fool!')
  }

  handleDrop(event) {
    event.preventDefault();
    // let id = event.target.id;
    let id = event.dataTransfer.getData('id')
    let tasks = this.state.taskList.filter (item => {
      console.log(`==> need itemId of ${item.id} to match ${id}  `)
      if (item.id === id) {
        console.log(`Found it! `)
        item.category = 'comp';
      }
      return item
    } )

    this.setState({
      ...this.state, tasks
    })
    // console.log(this.state.taskList)
    console.log(`Dropped item with id:${id} `);
    console.log(` ${this.state.taskList[0].category}`)
  }
  
  render () {
    let tasks = {
      wip: [],
      comp: []
    }
    
    this.state.taskList.forEach ( (item) => {
     tasks[item.category].push(
       <div
        key= {item.id}
        onDragStart= {this.handleDrag}
        draggable = 'true'
        className= 'box'
        title= {item.title}
        id= {item.id}
      >
        {item.title}
      </div>

     )
    })

    return (
      <div className= 'grid' >

        <div className= 'column' id='wip' title= "WIP">
          <span className= 'title'> <h2> WIP </h2> </span>
          
          {tasks.wip}
        </div>

        <div id='view'> </div>

        <div 
          className= 'column' 
          id='done' 
          title= "Done" 
          onDragOver = {this.handleDragOver}
          onDrop = {this.handleDrop}
        >
          <span className= 'title' > <h2> COMP </h2> </span >
          {tasks.comp}
        </div>

      </div>
    )
  }
}

export default DragBox