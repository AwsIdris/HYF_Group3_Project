import React, { Component } from 'react';


import './App.css';

export default class App extends Component {
  state={
          math:[
              ["Xy","log","In","ex","CLR"],
              ["√x","arc","sin","cos","tan"],
              ["1/x","x-y","R↓","STO","RCL"],
              ["ENTER","CHC","EEX","CLx"],
              ["-",7,8,9],
              ["+",4,5,6],
              ["x",1,2,3],
              ["÷",0,".","π"]
          ],
          stackt:"",
          stackz:"",
          stacky:"",
          stackx:"",
          enterStatus:false
          
    };
        static enterStatus=false;
updateExpression= (value)=>{
    //  var input=this.state.sta
    
    if (Number.isInteger(value) && this.state.enterStatus===false ){return this.setState({stackx:this.state.stackx+value.toString()})} 
    else if(Number.isInteger(value) && this.state.enterStatus===true){
    return this.setState({stackx:value,enterStatus:false})}

    switch(value){
      case "CLR":        
          return (this.setState({ 
          stackt:0,
          stackz:0,
          stacky:0,
          stackx:0 }));
     
    break;
    case "CLx": return (this.setState({ stackx:"" }));
    break;
    case "R↓":  return (this.setState({ 
         
          stackt:this.state.stackx,
          stackz:this.state.stackt,
          stacky:this.state.stackz,
          stackx:this.state.stacky }));
     
    break;
    case "ENTER":return (this.setState({ 
          enterStatus:true,          
          stackt:this.state.stackz,
          stackz:this.state.stacky,
          stacky:this.state.stackx,      
          
           }));
        break;
        case "x-y":var oldXvalu=this.state.stackx;return (this.setState({ 
          stackx:this.state.stacky,
          stacky:oldXvalu,
                
          
           }));
        break;
        case "+":return (this.setState({ 
          stackx:parseFloat(this.state.stackx)+parseFloat(this.state.stacky),
           }));
        break;
        case "-":return (this.setState({ 
          stackx:parseFloat(this.state.stacky)-parseFloat(this.state.stackx),
           }));
        break;
        case ".":var strn=(this.state.stackx).toString();if (!(strn).includes('.')){

         return (this.setState({stackx:this.state.stackx+value})) }else{
           (this.setState({stackx:this.state.stackx}))

         };
        break;
        default: console.log("undefined selction");
        }

    
}  
  
  
  render() {
    return (
      <div className="calculatorBody">
        <div className="t">t:{this.state.stackt}</div>
        <div className="z">z:{this.state.stackz}</div>
        <div className="y">y:{this.state.stacky}</div>
        <div className="x">x:{this.state.stackx}</div>

        <div className="mathtable">
          {
            this.state.math.map(function(row){
              var mutants = row.map(function(operand){
                return (
                  <div className="numoperan" 
                  id={operand ===('ENTER') || operand ==='CLR'
                      || operand ==='CHC'  || operand ==='EEX'                     
                      || operand ==='CLx'  || operand ==='-'
                      || operand ==='+'  || operand ==='x'
                      || operand ==='÷'  
                    
                    ? "blue":null}
                      onClick={this.updateExpression.bind(null,operand)}> {operand}</div>
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


 