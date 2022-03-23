import React from 'react';



let currTime = new Date(2020,5,5,1);//input time.14 means 2oclock
//let currTime = new Date();take system time
currTime=currTime.getHours();

let greeting='';
const cssStyle={ };
if(currTime>=0 && currTime<12){
    greeting='good morning';
    cssStyle.color="red";
} 
else if(currTime>=12 && currTime<15){
    greeting='good afternoon';
    cssStyle.color="green";
}else{
    greeting='goodnight';
    cssStyle.color="blue";
}
function Hello() {
  return (
    
    <div className="Hello">
      
      <p >hello sir,<span style={cssStyle}>{greeting}</span> </p>
     
    </div>
  );
}

export default Hello;
