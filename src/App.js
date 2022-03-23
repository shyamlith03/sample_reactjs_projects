import React from 'react';
//import ReactDOM from 'react-dom';
import Hello from './Hello';
import Mapfun from './Mapfun';
import * as calc from './Calc';//wilcard method used here-insted of using this :
//import {add,sub,mul,div} from './Calc';
import './Style.css';

const name="shyamlith";
const fname="React sample project-";
const lname="by shyamlith";
// US English uses month-day-year order
//console.log(date.toLocaleDateString('en-US'));
// → "12/19/2012"
//const currDate=new Date().toLocaleDateString('en-GB');
var today = new Date();
const currDate=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
const currTime=new Date().toLocaleTimeString();
//var today = new Date();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function App() {
  return (
    
    <div className="App">
     
      { /*react template  literal example */ }
      <div className='heading'>
        <h2 className='title'>{` ${ fname } ${lname}`} </h2>
      </div>
      <div className='current'>
      <p>current date:{currDate}</p>
      <p>current time:{currTime}</p>
       {/*<Hello /> */}
   {/*<Mapfun /> */}
   <p>sum of 20 and 10 is {calc.add(20,10)}</p>
   <p>sub of 20 and 10 is {calc.sub(20,10)}</p>
   <p>mul of 20 and 10 is {calc.mul(20,10)}</p>
   <p>div of 22 and 10 is {calc.div(22,10)}</p>
   </div>
    </div>
  );
}

export default App;
