import React from 'react';
import './keys.css';
//import  {operations} from './'
import * as operations  from './operations'
export  function keys() {
   
  
  
    const enterStatus=false;
    
    return (
     <div className="calculatorBody">
         <div className="mathtable">
          {
            this.key.map(function(row){
              var mutants = row.map(function(operand){
                return (
                  <div className="numoperan" 
                  > {operand}</div>
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
