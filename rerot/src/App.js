import React, { Component } from 'react'
import './App.css'
import { rot } from './rot'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: '',
      outputVal: '',
      rotNum: 13
    }

    this.getInputChange = this.getInputChange.bind(this)
    this.runRot = this.runRot.bind(this)
    this.clearInputAndOutput = this.clearInputAndOutput.bind(this)
  }

  getInputChange (evt) {
    this.setState({inputVal: evt.target.value})
  }

  clearInputAndOutput (evt) {
    this.setState({inputVal: '', outputVal: ''})
  }

  runRot (evt) {
    const rotReturn = rot(this.state.inputVal, this.state.rotNum)
    console.log(rotReturn)

    this.setState({outputVal: rotReturn})
  }

  render () {
    return (
      <div className='App'>
        <div id='top-row'>
          <input
            id='input-box'
            value={this.state.inputVal}
            onChange={this.getInputChange}
          />
          <input
            id='rotation-count'
            type='text'
            value={this.state.rotNum}
            onChange={(evt) => { this.setState({rotNum: evt.target.value}) }}
          />
          <div id='output-box'>
            <p mid='output-text'>{this.state.outputVal}</p>
          </div>
        </div>

        <button
          id='translate-button'
          type='button'
          onClick={this.runRot}
        >Translate</button>
        <input
          id='encode'
          type='radio'
        />
        <button
          id='clear-button'
          type='button'
          onClick={this.clearInputAndOutput}
        >clear</button>
      </div>
    )
  }
}

export default App
