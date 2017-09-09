import React, { Component } from 'react';
import store from './components/store'
import * as operations  from './components/operations'
import './App.css'
import DisplayScreen from './components/DisplayScreen'
import KeyPad from './components/KeyPad'

export default class App extends Component {
  componentWillMount(){
    store.subscription = store.subscribe(state=>{
      this.setState(state)
    })
  }
 componentWillUnmount(){

   store.subscription.remove();
 }
  
render() {
    return (
      <div className="calculatorBody">
       <DisplayScreen />
       <KeyPad /> 
      </div>
    )
  } 
  
}


