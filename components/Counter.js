import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  increaseCounter () {
      this.setState({count: this.state.count + 1})
  }

  decreaseCounter () {
    this.setState({count: this.state.count - 1})
  }

  render () {
    return (
      <div>
        <h4> Counter is now {this.state.count} </h4>
        <button onClick={this.increaseCounter.bind(this)}>Moar</button>
        <button onClick={this.decreaseCounter.bind(this)}>Lass</button>
      </div>
    )
  }
}

export default Counter
