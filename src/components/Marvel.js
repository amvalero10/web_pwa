import React, {useState, useEffect} from "react";
import md5 from 'md5'
import {Tarjeta} from './Tarjeta';

let apiKey = 'Aqui la llave publica' //llave publica
let KeyPrivate = 'Aqui la llave privada' //llave privada

let ts= new Date().getTime()
let hash = md5( ts + KeyPrivate + apiKey )



function Marvel(){


    let [characters, setCharacters] = useState(null)

  
    //useEffect( () => {
    //    fetch('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&apikey='+apiKey+'&hash='+hash)
    //    .then(response => response.json() )
        //.then( data => console.log(data.data.results) )
    //   .then( data => setCharacters(data.data.results) )
    //},
    //[])

    

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("charactersMarvel") === null) {
                setCharacters("Loading...")
            } else {
                setCharacters( JSON.parse( localStorage.getItem( "charactersMarvel" ) ) );
            }
        } else {
            const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&apikey='+apiKey+'&hash='+hash;
            fetch(URL).then(res=>res.json())
            .then(res=>{
                setCharacters(res.data.results);

                localStorage.setItem("charactersMarvel",   JSON.stringify(res.data.results) );

            })
        }
    }, []);

    
return(


<div className="container" >

<h1> Characters </h1>


{characters && characters.map( (element) => (

    <Tarjeta
        thumbnail = {element.thumbnail.path+'.'+element.thumbnail.extension}
        name = {element.name}
        description = {element.description}
    />
))}

</div>

)






}

export default Marvel               

