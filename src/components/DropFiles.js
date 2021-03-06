import React, { Component } from 'react'

class DragAndDrop extends Component {
  state = {
    dragging: false
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({dragging: true})
    }
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({dragging: false})
    }
  }
  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({dragging: false})
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.props.handleDrop(e.dataTransfer.items)
      e.dataTransfer.clearData()
      this.dragCounter = 0
    }
  }
  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          position: 'relative'
        }}
        ref={this.dropRef}
        onDragEnter={this.handleDragIn}
        onDragLeave={this.handleDragOut}
        onDragOver={this.handleDrag}
        onDrop={this.handleDrop}
      >
        {this.state.dragging &&
          <div
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}
export default DragAndDrop
