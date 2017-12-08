/* global it beforeEach describe expect */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('the App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  describe('the buttons', () => {
    it('renders the translate button', () => {
      expect(wrapper.find('#translate-button').exists()).toBe(true)
    })
    it('renders the clear button', () => {
      expect(wrapper.find('#clear-button').exists()).toBe(true)
    })

    it('renders the encode radio input', () => {
      expect(wrapper.find('#encode').exists()).toBe(true)
    })

    it('updates the input box when given text', () => {
      wrapper.setState({inputVal: '{}'})
      expect(wrapper.find('#input-box').text()).toBe('')
      wrapper.find('#input-box').simulate('change', {target: {value: 'hello'}})
      expect(wrapper.find('#input-box').text()).toBe('')
    })
  })

  describe('the top boxes', () => {
    it('renders the input box', () => {
      expect(wrapper.find('#input-box').exists()).toBe(true)
    })

    it('renders the rot number box', () => {
      expect(wrapper.find('#rotation-count').exists()).toBe(true)
    })
    it('renders the output box', () => {
      expect(wrapper.find('#output-box').exists()).toBe(true)
    })
  })
})
