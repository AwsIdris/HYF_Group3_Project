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
                  <button className={`CalculatorKey KeyPad-${operand.label}`}                 
                    	    onClick={()=>fn.operations(operand.label ,operand.keyCode)}> {operand.label}</button>                                                                            
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
              [{label:"xʸ" ,keyCode:"pow"},{label: "LOG",keyCode:"log"},{label:"LN" ,keyCode:"ln"},{label:"eˣ" ,keyCode:"exp"},{label:"CLR" ,keyCode:"clr"}],
              [{label: "√x",keyCode:"sqrt"},{label:"ARC" ,keyCode:"arc"},{label:"SIN" ,keyCode:"sin"},{label: "COS",keyCode:"cos"},{label: "TAN",keyCode:'tan'}],
              [{label: "¹/x",keyCode:"reciprocal"},{label: "x↔︎y",keyCode:"swap"},{label: "R↓",keyCode:"rollDown"},{label: "STO",keyCode:"sto"},{label: "RCL",keyCode:"rcl"}],
              [{label: "Enter ↑",keyCode:"enter"},{label: "CHS",keyCode:"chs"},{label: "EEX",keyCode:"eex"},{label: "CLX",keyCode:"clx"}],
              [{label: "-",keyCode:"sub"},{label: 7,keyCode:"d7"},{label: 8,keyCode:"d8"},{label: 9,keyCode:"d9"}],
              [{label: '+',keyCode:'add'},{label: 4,keyCode:"d4"},{label: 5,keyCode:"d5"},{label: 6,keyCode:"d6"}],
              [{label: "x",keyCode:"mul"},{label: 1,keyCode:"d1"},{label: 2,keyCode:"d2"},{label: 3,keyCode:"d3"}],
              [{label: "÷",keyCode:"div"},{label: 0,keyCode:"d0"},{label: ".",keyCode:"dot"},{label: "π",keyCode:"pi"}]
          ]    
            return math
}