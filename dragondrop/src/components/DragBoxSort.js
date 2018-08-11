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
        { id: '0', status: 'wip', title: 'first' },
        { id: '1', status: 'wip', title: 'second' },
        { id: '2', status: 'wip', title: 'third' },
        { id: '3', status: 'wip', title: 'fourth' }
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

  handleDragStart(event) {
    const { tasks } = this.state
    let id = event.target.id
    console.log(tasks)    

    // event.dataTransfer.setData('id',id)
    // event.dataTransfer.setData('index',id)
    // event.dataTransfer.setData('parentTitle',event.target.parentNode.title)

    // console.log('drag event.target: ', event.target)
  }
  // rearrange an arrary based on target and source indices, 
  // returns a new array
  rearrange (arr, src, tgt) {
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

  handleDragOver (event) {
    event.preventDefault();
    
  }

  handleDrop(event,arr) {
    event.preventDefault();
    // let id = event.dataTransfer.getData('id')
    // let test = this.state.tasks;
    // let parentTitle = event.dataTransfer.getData('parentTitle')
    // let drop = event.target;
    // let item = event.target
    
    // console.log('***> Id: ', test.indexOf(id))

    // let tasks = this.state.data.filter (item => {
    //   console.log('==>', parentTitle,drop.title)
    //   if (item.id === id) {
    //     if (drop.className === 'column' && drop.title !== parentTitle){
    //       item.status === 'wip' ? item.status = 'done' : item.status = 'wip' 
    //     }
    //   }

    //   // console.log(arr)
    //   return item
    // })

    // this.setState({
    //   ...this.state, tasks
    // })
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