import React, { Component } from 'react'
import Counter from './Counter'
import Greeter from './Greeter'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Greeter name="Human"/>
        <Counter />
      </div>
    )
  }

}

export default App
