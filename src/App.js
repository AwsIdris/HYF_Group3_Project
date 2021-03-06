import React, { Component } from 'react';
import store from './components/store'
import './App.css'
import DisplayScreen from './components/DisplayScreen'
import KeyPad from './components/KeyPad'
import ProgramPlatform from './components/ProgramPlatform'

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
        <div>
       <DisplayScreen />
       <KeyPad />
        </div>
          <ProgramPlatform /> 
      </div>
    )
  } 
  
}


