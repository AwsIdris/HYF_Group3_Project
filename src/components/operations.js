import store from './store'
export  function operations (value) {
  const {
    stack4,
    stack3,
    stack2,
    stack1,
    keypressed,
   
   } = store.state
    let stackt = stack4
    let stackz = stack3
    let stacky = stack2
    let stackx = stack1
    let operation = keypressed
    if(store.state.keypressed===true){
      reOrder();
      store.setState({keypressed:false})

    }
   
 
    
    
    if (Number.isInteger(value) && store.state.lastValue===null){store.setState({lastValue:value});stackx='';stackx=stackx+value.toString() }else
       if(Number.isInteger(value) && store.state.lastValue!==null) {
      stackx=stackx+value.toString()

    }   
    
    switch(value){
      case "CLR":
      stackt=0;
      stackz=0;
      stacky=0;
      stackx=0;
      store.setState({lastValue:null})
     
    break;
    case "CLx":  stackx=0;
        store.setState({lastValue:null})
    break;
    case "R↓": let tmp= stackx ;       
          stackx=stacky;
          stacky=stackz;
          stackz=stackt;
          stackt=tmp;
          store.setState({lastValue:null})
     
    break;
    case "ENTER": 
          stackt=stackz;
          stackz=stacky;
          stacky=stackx;  
          store.setState({lastValue:null})
          // keyStatus=true;
        break;
        case "x-y":let oldXvalu=stackx; 
          stackx=stacky;
          stacky=oldXvalu;
          store.setState({lastValue:null})
          // keyStatus=true
                    
          
        break;
        case "+" : stackx=parseFloat(stacky)+parseFloat(stackx);
              store.setState({keypressed:true});
              //  keyStatus=true; 
               stacky=0           
        break;
        case "-":
          stackx=parseFloat(stacky)-parseFloat(stackx);
          store.setState({keypressed:true});
          stacky=0  
             break;
             case "x":
          stackx=parseFloat(stacky)*parseFloat(stackx);
          store.setState({keypressed:true});
          stacky=0  
             break;
             case "÷":
          stackx=parseFloat(stacky)/parseFloat(stackx);
          store.setState({keypressed:true});
          stacky=0  
             break;
        case "◘":var strn=(stackx).toString();
        if (!(strn).includes('.')){ stackx=stackx+'.'}
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
        stackx = covertToDegree(Math.acos(Number(stackx)))
      } else {
        stackx = Math.cos(convertToRadians(Number(stackx)))
      }

      operation = value
      //store.setState({keypressed:true});

      break;
    case 'SIN':
      if (operation === 'ARC') {
        stackx = covertToDegree(Math.asin(Number(stackx)))
      } else {
        stackx = Math.sin(convertToRadians(Number(stackx)))
      }

      operation = value
      store.setState({keypressed:true});
      break;
    case 'TAN':
      if (operation === 'ARC') {
        stackx = covertToDegree(Math.atan(Number(stackx)))
      } else {
        stackx = Math.tan(convertToRadians(Number(stackx)))
      }
      operation = value
      store.setState({keypressed:true});
      break;
      //-------------------------
      case 'ex':
    stackx = Math.exp(Number(stackx))
    operation = value
    store.setState({keypressed:true});
      break;
    case 'LOG':
      stackx = Math.log10(Number(stackx))
      operation = value
      store.setState({keypressed:true});
      break;
    case 'LN':
      stackx = Math.log(Number(stackx))
      operation = value
      store.setState({keypressed:true});
      break;

        default: //console.log("undefined selction")
        };
//       console.log('stackx=',stackx,'  stacky=',stacky,'  stackz=',stackz,'  stackt=',stackt)
// console.log('store.x=',store.state.stack1,'  store.y=',store.state.stack2,'  store.z=',store.state.stack3,'  store.t=',store.state.stack4)
console.log('=============================');

        store.setState({
    stack4: stackt,
    stack3: stackz,
    stack2: stacky,
    stack1: stackx,
    operation : keypressed,
    keyStatus:true
    
  })
        function reOrder() {
    stackt=stackz;
          stackz=stacky;
          stacky=stackx;  
          store.setState({lastValue:null})
    }
        function convertToRadians(degrees) {
    return (degrees * Math.PI / 180)
  }
  function covertToDegree(radians) {
    return (radians * 180 / Math.PI)
  }
//console.log('stackx=',stackx,'  stacky=',stacky,'  stackz=',stackz,'  stackt=',stackt)
console.log('store.x=',store.state.stack1,'  store.y=',store.state.stack2,'  store.z=',store.state.stack3,'  store.t=',store.state.stack4)
 
  }  
