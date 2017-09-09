import store from './store'
export  function operations (value) {
    
let reterndValue='';
    
    if (Number.isInteger(value) && store.state.keyStatus===false ){reterndValue= store.setState({stackx:store.state.stackx+value.toString()})}   
    else if(Number.isInteger(value) && store.state.keyStatus===true){
    reterndValue= store.setState({stackx:value,keyStatus:false})}

    switch(value){
      case "CLR":        
          reterndValue= (store.setState({ 
          stackt:0,
          stackz:0,
          stacky:0,
          stackx:0 }));
     
    break;
    case "CLx": reterndValue= (store.setState({ stackx:0 }));
    break;
    case "R↓":  reterndValue= (store.setState({ 
         
          stackt:store.state.stackx,
          stackz:store.state.stackt,
          stacky:store.state.stackz,
          stackx:store.state.stacky }));
     
    break;
    case "ENTER":reterndValue= (store.setState({ 
          keyStatus:true,          
          stackt:store.state.stackz,
          stackz:store.state.stacky,
          stacky:store.state.stackx,      
          
           }));
        break;
        case "x-y":var oldXvalu=store.state.stackx;reterndValue= (store.setState({ 
          stackx:store.state.stacky,
          stacky:oldXvalu,
                
          
           }));
        break;
        case "+":reterndValue= (store.setState({ 
          stackx:parseFloat(store.state.stackx)+parseFloat(store.state.stacky),
           }));
        break;
        case "-":reterndValue= (this.setState({ 
          stackx:parseFloat(this.state.stacky)-parseFloat(this.state.stackx),
           }));
        break;
        case "◘":var strn=(this.state.stackx).toString();if (!(strn).includes('◘')){

         reterndValue= (this.setState({stackx:this.state.stackx+value})) }else{
           reterndValue=(this.setState({stackx:this.state.stackx}))

         };
        break;
        default: console.log("undefined selction")
        };
return reterndValue;
    
  }  