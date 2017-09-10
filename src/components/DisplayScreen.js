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
		


		return (
			<div className="calculator-display">
          <div >{store.state.stack4}</div>
          <div >{store.state.stack3}</div>
          <div >{store.state.stack2}</div>
          <div >{store.state.stack1}</div>
      </div>
			)
	}
}

