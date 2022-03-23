import react from "react";

const fruitArray=["apple","orange","grapes","banana"];
const fruitList=fruitArray.map((item) =><p>{item}</p>)

/*spread operator*/
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
function Mapfun(){
    return(
        <div className="Mapfun">
            <h1>{fruitList}</h1>
            <p>{one}</p>
            <p>{two}</p>
            <p>{rest}</p>
        </div>
    )
}

export default Mapfun;