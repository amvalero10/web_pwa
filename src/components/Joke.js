import React, {useState, useEffect} from "react";

function Joke(){

    let [joke, setJoke] = useState(null)

  
    //useEffect( () => {
    //    fetch(" https://api.chucknorris.io/jokes/random")
    //    .then(response => response.json() )
        //.then( data => console.log(data.value) )
    //    .then( data => setjoke(data.value) )
    //},
    //[])


    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("joke") === null) {
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("joke"));
            }
        } else {
            const URL = "https://api.chucknorris.io/jokes/random";
            fetch(URL).then(res=>res.json()).then(res=>{
                setJoke(res.value);
                localStorage.setItem("joke", res.value);
            })
        }
    }, []);




return(
    <div>
    <h1> Joke </h1>
    <p>{joke}</p>
    </div>
)
}

export default Joke               