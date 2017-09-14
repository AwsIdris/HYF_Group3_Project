import React from 'react'
import * as fn from './operations'
import './KeyPad.css'


export default class KeyPad extends React.Component {
    render(){
        return(
            <div className="mathtable">
          {
            allKeys().map(function(row){
              var mutants = row.map(function(operand){
                return (
                  <button className={`CalculatorKey KeyPad-${operand}`}                 
                    	    onClick={()=>fn.operations(operand)}> {operand}</button>                               
                        )
              })
              return (
                <div className="rows" > {mutants}</div>
                      )
            })
          }
            </div>
              )
            }   
          }

    function allKeys(){
    let math=[
              ["xʸ","LOG","LN","eˣ","CLR"],
              ["√x","ARC","SIN","COS","TAN"],
              ["¹/x","x↔︎y","R↓","STO","RCL"],
              ["Enter ↑","CHS","EEX","CLX"],
              ["-",7,8,9],
              ['+',4,5,6],
              ["x",1,2,3],
              ["÷",0,".","π"]
          ]    
            return math
}