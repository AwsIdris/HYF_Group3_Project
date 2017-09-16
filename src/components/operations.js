import store from './store'

export function operations (value){

  let  [x,y,z,t] = store.state.stack,
       localStack = [x,y,z,t],
       operation=store.state.keypressed
    
  if(store.state.keypressed===true){
    reOrder()
    store.setState({keypressed:false})
    }
    
  if(Number.isInteger(value) && store.state.lastValue!==null 
      && store.state.keypressed === 'SIN' 
      || store.state.keypressed === 'COS' 
      || store.state.keypressed === 'TAN'
      || store.state.keypressed === '+' 
      || store.state.keypressed === '-'
      || store.state.keypressed === 'x'
      || store.state.keypressed === '÷'
      || store.state.keypressed === '√x'
      || store.state.keypressed === '¹/x'
      || store.state.keypressed === 'xʸ'
      || store.state.keypressed === 'LOG'
      || store.state.keypressed === 'eˣ'
      || store.state.keypressed === 'LN'
      || store.state.keypressed === 'π'
      || store.state.keypressed === 'STO'
      || store.state.keypressed === 'RCL'
      || store.state.keypressed === 'R↓'){

        localStack = [x,x,y,z]           
        localStack[0]='';
        operation = null
      }
  if (store.state.lastValue === 'Error'){
      store.setState({lastValue: null})
      }
    if (store.state.keypressed ==="EEX" && Number.isInteger(value) && !(Number.isSafeInteger(x))){
      if((x.length -x.indexOf('e'))===4){
        return
      }
      
     // operation =value
     // if the last char in the x is 0 replace the 0 with the new value
     if(x[x.length-1]==='0'){
      let eexValue=x.slice(0,(x.length-1))
      console.log("eexValue",eexValue)

      localStack=[eexValue,y,z,t]}
      store.setState({lastValue:0})

    }
    //else if(store.state.keypressed ==="EEX" && and )
  if (Number.isInteger(value) && store.state.lastValue===null){
      store.setState({lastValue:value});
        localStack[0]='';
        localStack[0]=localStack[0]+value.toString() 
      } 
  else if (Number.isInteger(value) && store.state.lastValue!==null) {
      localStack[0]=localStack[0]+value.toString()
      }   
    
  switch(value){
    case "CLR":
        localStack= [0,0,0,0]
        operation =''
        store.setState({stack:localStack,
      keypressed: '',
    lastValue:null,})    
    break

    case "CLX":  localStack[0]=0;
      store.setState({lastValue:null})
      break;

    case "R↓": localStack=[y, z, t, x];
          store.setState({lastValue:null})  
          operation = value   
    break

    case 'π': 
        localStack= [3.141592653589793,y,z,t]
         store.setState({lastValue:value})
         operation = value
    break  

    case "Enter ↑": 
            if(store.state.keypressed==='EEX'){
              let be=Number(x.slice(0,x.indexOf('e')))
              let ae=Number(x.slice(x.indexOf('e')+1,x.length))
              let res=(be*(Math.pow(10,ae)))
              console.log("the number Befor e",be)
              console.log("the number after e",ae)
              console.log("the number rsult",res)
              localStack=[res,res,y,z]
              store.setState({lastValue:null})
              operation='Enter'
              
             // operation = value

            }else {
          localStack = [x,x,y,z]
          store.setState({lastValue:null})}
         // keyStatus=true;
    break

    case "x↔︎y":
          localStack = [y,x,z,t]
          store.setState({lastValue:null})
          // keyStatus=true                            
    break

    case "+" : 
          x = parseFloat(y)+parseFloat(x)
          store.setState({keypressed:value})
          operation = value
          reOrderBasicOperation()          
    break

    case "-":
          x=parseFloat(y)-parseFloat(x)
          store.setState({keypressed:value})
          operation = value
          reOrderBasicOperation() 
    break

    case "x":
          x=parseFloat(y)*parseFloat(x)
          store.setState({keypressed:value})
          operation = value
          reOrderBasicOperation()  
          break
          
    case "÷":
          x=parseFloat(y)/parseFloat(x);
          store.setState({keypressed:value});
          operation = value
          reOrderBasicOperation() 
    break

    case ".":var strn=(x).toString();
        if (!(strn).includes('.')){ localStack[0]=x+'.'}
    break
        
   case 'ARC':
        if (operation === 'ARC') {      
          operation = ''
        } else {
          operation = value
          localStack = [x,y,z,t]
        }
        break
    case 'COS':
        if (operation === 'ARC') {
          localStack[0] = covertToDegree(Math.acos(Number(x)))
        } else {
          localStack[0] = Math.cos(convertToRadians(Number(x)))
        }
          operation = value
          store.setState({keypressed:value});
    break

    case 'SIN':
        if (operation === 'ARC') {
          localStack[0] = covertToDegree(Math.asin(Number(x)))
        } else {
          localStack[0] = Math.sin(convertToRadians(Number(x)))
        }
          operation = value
          store.setState({keypressed:value});
    break

    case 'TAN':
        if (operation === 'ARC') {
          localStack[0] = covertToDegree(Math.atan(Number(x)))
        } else {
          localStack[0] = Math.tan(convertToRadians(Number(x)))
        }
        operation = value
        store.setState({keypressed:value})
    break

    case 'xʸ':
        localStack=[Math.pow(x, y),z,t,t]
        store.setState({keypressed:value})
        operation = value
    break

    case '√x':
        localStack=[Math.sqrt(x),y,z,t]
        store.setState({keypressed:value})
        operation = value
    break

    case '¹/x': 
        if ( x === 0 || x==='0') {
          localStack=['Error',y,z,t]
          store.setState({lastValue:'Error'})      
        } else { localStack=[1/parseFloat(x),y,z,t]
          store.setState({keypressed:value})  
          operation = value  
        }
    break

    case 'eˣ':
          localStack = [Math.exp(Number(x)),y,z,t]
          operation = value
          store.setState({keypressed:value})
    break

    case 'LOG':
          localStack = [Math.log10(Number(x)),y,z,t]
          operation = value
          store.setState({keypressed:value});
    break

    case 'LN':
          localStack = [Math.log(Number(x)),y,z,t]
          operation = value
          store.setState({keypressed:value})
    break

    case 'STO':
          if (store.state.keypressed === 'STO'){
              return
          } else {
            localStack = [x,y,z,t]
            store.setState({memo:x})
            store.setState({keypressed:value})
            operation = value
          }
    break

    case 'RCL':
            localStack = [store.state.memo,x,y,z]
            operation = value
            store.setState({keypressed:value})
    break

     case 'CHS':
            localStack = [-1*x,y,z,t]
            operation = value
            store.setState({keypressed:value})
    break

// we still didnt figure it out EEX 
    case 'EEX':  
    if (store.state.keypressed === 'EEX') {
      return
    }  
    if(x===0){
          localStack=[1+'e+0',y,z,t]
          operation = value
          store.setState({keypressed:value})
    } else  {
          localStack=[x+'e+0',y,z,t]
          operation = value
          store.setState({keypressed:value})
    } 
    break   
        default: //console.log("undefined selction")
    }

  store.setState({
    stack:localStack,
    keypressed : operation,
    keyStatus:true
    })

  //to re order the stack ater the basic operators +,-,*,/
  function reOrderBasicOperation(){
      localStack = [x,z,t,t]
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
     
  }  

