import store from './store'
export  function operations (value) {
  let  [x,y,z,t,] = store.state.stack;
 
    let operation=store.state.keypressed;
    
    if(store.state.keypressed===true){
      reOrder();
      store.setState({keypressed:false})

    }
   
 
    
    
    if (Number.isInteger(value) && store.state.lastValue===null){
      console.log("lastvalu =true","value=",value);
      store.setState({lastValue:value});x='';x=x+value.toString() }else
       if(Number.isInteger(value) && store.state.lastValue!==null) {
      x=x+value.toString()

    }   
    
    switch(value){
      case "CLR":[x,y,z,t]=[0,0,0,0];
      store.setState({lastValue:null})
     
    break;
    case "CLx":  x=0;
        store.setState({lastValue:null})
    break;
    case "R↓": [x,y,z,t]=[y, z, t, x];
    
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
              store.setState({keypressed:true});
              //  keyStatus=true; 
               y=0           
        break;
        case "-":
          x=parseFloat(y)-parseFloat(x);
          store.setState({keypressed:true});
          y=0  
             break;
             case "x":
          x=parseFloat(y)*parseFloat(x);
          store.setState({keypressed:true});
          y=0  
             break;
             case "÷":
          x=parseFloat(y)/parseFloat(x);
          store.setState({keypressed:true});
          y=0  
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
      store.setState({keypressed:true});
      break;
    case 'TAN':
      if (operation === 'ARC') {
        x = covertToDegree(Math.atan(Number(x)))
      } else {
        x = Math.tan(convertToRadians(Number(x)))
      }
      operation = value
      store.setState({keypressed:true});
      break;
      //-------------------------
      case 'ex':
    x = Math.exp(Number(x))
    operation = value
    store.setState({keypressed:true});
      break;
    case 'LOG':
      x = Math.log10(Number(x))
      operation = value
      store.setState({keypressed:true});
      break;
    case 'LN':
      x = Math.log(Number(x))
      operation = value
      store.setState({keypressed:true});
      break;

        default: //console.log("undefined selction")
        };
//       console.log('x=',x,'  y=',y,'  z=',z,'  t=',t)
// console.log('store.x=',store.state.stack1,'  store.y=',store.state.stack2,'  store.z=',store.state.stack3,'  store.t=',store.state.stack4)
console.log('=============================');

        store.setState({
    stack:[x,y,z,t],
    keypressed : operation,
    keyStatus:true
    
  })
        function reOrder() {
    t=z;
          z=y;
          y=x;  
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
