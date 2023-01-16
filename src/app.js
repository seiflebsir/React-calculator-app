import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


function App() {
    const[result,setresult] = useState('');
    
    const clickhandler  = (event)=>{
    setresult(result.concat(event.target.value));
    }
    //clear the setresult
    const cleardisplay =()=>{
        setresult('')
    }
    //evaluation the result  with function eval(string)
    const calculate = (event)=>{
       setresult(eval(result.toString()));
  }

         return (
      <div className="calc">
       <input type="test" placeholder="0" id="answer" value={result}/>
       <input type="button" value="9" className='button' onClick={clickhandler}/>
       <input type="button" value="8" className='button'onClick={clickhandler}/> 
       <input type="button" value="7" className='button' onClick={clickhandler}/> 
       <input type="button" value="6" className='button' onClick={clickhandler}/> 
       <input type="button" value="5" className='button' onClick={clickhandler}/> 
       <input type="button" value="4" className='button' onClick={clickhandler}/> 
       <input type="button" value="3" className='button' onClick={clickhandler}/> 
       <input type="button" value="2" className='button' onClick={clickhandler}/> 
       <input type="button" value="1" className='button' onClick={clickhandler}/> 
       <input type="button" value="0" className='button' onClick={clickhandler}/> 

       <input type="button" value="+" className='button' onClick={clickhandler}/> 
       <input type="button" value="-" className='button' onClick={clickhandler}/>
       <input type="button" value="/" className='button' onClick={clickhandler}/> 
       <input type="button" value="*" className='button' onClick={clickhandler}/>
       <input type="button" value="%" className='button' onClick={clickhandler}/> 
       <input type="button" value="." className='button' onClick={clickhandler}/> 
       <input type="button" value="Clr" className='button'id='buttonone' onClick={cleardisplay}/> 
       <input type="button" value="=" className='button'  id='buttonone' onClick={calculate} /> 
    
      </div>
    );
  }
  
  export default App;