

function add(a,b) {
  let add=a+b;
  return add;
}
function sub(a,b) {
   let sub=a-b;
    return sub;
  }
  function mul(a,b) {
    let mul=a*b;
    return mul;
  }
  function div(a,b) {
    let div=a/b;
    div=div.toFixed(2);//indicate how many number display after fraction.
    return div;
  }

export {add,sub,mul,div};
