import React from 'react'
import './DisplayScreen.css'
import store from './store'

export default class DisplayScreen extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

	render() {
		const { displayValue, stack} = this.state


		return (
			<div className="calculator-display">
          <div >{store.state.stackt}</div>
          <div >{store.state.stackz}</div>
          <div >{store.state.stacky}</div>
          <div >{store.state.stackx}</div>
      </div>
			)
	}
}

