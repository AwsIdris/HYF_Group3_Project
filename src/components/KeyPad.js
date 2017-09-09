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
                  id={operand ===('ENTER')  || operand ==='CLR' 
                      || operand ==='CHC'  || operand ==='EEX'                     
                      || operand ==='CLx'  || operand ==='-'
                      || operand ==='+'  || operand ==='x'
                      || operand ==='÷'  
                    }
                      onClick={()=>fn.operations(operand)}> {operand}</button>
                      // onClick={()=> input.performOperation(label)
                     
                )
              }.bind(this))
              return (
                <div className="rows" > {mutants}</div>
              )
            }.bind(this))

          }
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
              ["÷",0,"◘","π"]
          ]     ;
            return math;
}
