
import store from './store'
export  function operations (value) {
  let  [x,y,z,t,] = store.state.stack;
 
 // 
  let localStack = [x,y,z,t]
    let operation=store.state.keypressed;
    
    if(store.state.keypressed!==''){
      reOrder();
      store.setState({keypressed:value})
    }
   
 
    
    
    if (Number.isInteger(value) && store.state.lastValue===null){
      console.log("lastvalu =true","value=",value);
      store.setState({lastValue:value});x='';x=x+value.toString() }else
       if(Number.isInteger(value) && store.state.lastValue!==null) {
      x=x+value.toString()
    }   
    
    switch(value){
      case "CLR":localStack=[0,0,0,0];
      store.setState({lastValue:null})
     
    break;
    case "CLx":  x=0;
        store.setState({lastValue:null})
    break;
    case "R↓": localStack=[y, z, t, x];
    
          store.setState({lastValue:null})
     
    break;
    case "ENTER": 
          t=z;
          z=y;
          y=x;  
          store.setState({lastValue:null})
          // keyStatus=true;
        break;
        case "x-y":let oldXvalu=x; 
          x=y;
          y=oldXvalu;
          store.setState({lastValue:null})
          // keyStatus=true
                    
          
        break;
        case "+" : x=parseFloat(y)+parseFloat(x);
              store.setState({keypressed:value});
              //  keyStatus=true; 
               reOrderBasicOperation()          
        break;
        case "-":
          x=parseFloat(y)-parseFloat(x);
          store.setState({keypressed:value});
             reOrderBasicOperation() 
             break;
             case "x":
          x=parseFloat(y)*parseFloat(x);
          store.setState({keypressed:value});
              reOrderBasicOperation()  
             break;
             case "÷":
          x=parseFloat(y)/parseFloat(x);
          store.setState({keypressed:value});
              reOrderBasicOperation() 
             break;
        case "◘":var strn=(x).toString();
        if (!(strn).includes('.')){ x=x+'.'}
        break;
        
        //++++++
        case 'ARC':
      if (operation === 'ARC') {
        operation = ''
      } else {
        operation = value
      }
      
      break;  
    case 'COS':
      if (operation === 'ARC') {
        x = covertToDegree(Math.acos(Number(x)))
      } else {
        x = Math.cos(convertToRadians(Number(x)))
      }
      operation = value
      //store.setState({keypressed:true});
      break;
    case 'SIN':
      if (operation === 'ARC') {
        x = covertToDegree(Math.asin(Number(x)))
      } else {
        x = Math.sin(convertToRadians(Number(x)))
      }
      operation = value
      store.setState({keypressed:value});
      break;
    case 'TAN':
      if (operation === 'ARC') {
        x = covertToDegree(Math.atan(Number(x)))
      } else {
        x = Math.tan(convertToRadians(Number(x)))
      }
      operation = value
      store.setState({keypressed:value});
      break;
      //-------------------------
      case 'ex':
    x = Math.exp(Number(x))
    operation = value
    store.setState({keypressed:value});
      break;
    case 'LOG':
      x = Math.log10(Number(x))
      operation = value
      store.setState({keypressed:value});
      break;
    case 'LN':
      x = Math.log(Number(x))
      operation = value
      store.setState({keypressed:value});
      break;
        default: //console.log("undefined selction")
        };
//       console.log('x=',x,'  y=',y,'  z=',z,'  t=',t)
// console.log('store.x=',store.state.stack1,'  store.y=',store.state.stack2,'  store.z=',store.state.stack3,'  store.t=',store.state.stack4)
console.log('=============================');
        store.setState({
    stack:localStack,
    keypressed : operation,
    lastValue:true
    
  })
  //to re order the stack ater the basic operators +,-,*,/
        function reOrderBasicOperation(){
          y=z,z=t
        }
        function reOrder() {
          
          store.setState({lastValue:null})
    }
        function convertToRadians(degrees) {
    return (degrees * Math.PI / 180)
  }
  function covertToDegree(radians) {
    return (radians * 180 / Math.PI)
  }
//console.log('x=',x,'  y=',y,'  z=',z,'  t=',t)
console.log('store.x=',store.state.stack[0],'  store.y=',store.state.stack[1],'  store.z=',store.state.stack[2],'  store.t=',store.state.stack[3])
 
  } 