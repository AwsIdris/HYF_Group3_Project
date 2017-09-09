import React, { Component } from 'react';
import store from './components/store'
import * as operations  from './components/operations'
import './App.css'

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
        <div className="screen">
          <div className="t">{store.state.stackt}</div>
          <div className="z">{store.state.stackz}</div>
          <div className="y">{store.state.stacky}</div>
          <div className="x">{store.state.stackx}</div>
        </div>

        <div className="mathtable">
          {
            allKeys().map(function(row){
              var mutants = row.map(function(operand){
                return (
                  <div className="numoperan"
                  id={operand ===('ENTER') || operand ==='CLR'
                      || operand ==='CHC'  || operand ==='EEX'                     
                      || operand ==='CLx'  || operand ==='-'
                      || operand ==='+'  || operand ==='x'
                      || operand ==='÷'  
                    
                    ? "blue":null}
                      onClick={()=>operations.operations(operand)}> {operand}</div>
                      // onClick={()=> input.performOperation(label)
                     
                )
              }.bind(this))
              return (
                <div className="rows" > {mutants}</div>
              )
            }.bind(this))

          }
        </div>
      </div>

    )
  }
  
}

function allKeys(){
let math=[
              ["Xy","log","In","ex","CLR"],
              ["√x","arc","sin","cos","tan"],
              ["1/x","x-y","R↓","STO","RCL"],
              ["ENTER","CHC","EEX","CLx"],
              ["-",7,8,9],
              ["+",4,5,6],
              ["x",1,2,3],
              ["÷",0,".","π"]
          ]     ;
            return math;
}

