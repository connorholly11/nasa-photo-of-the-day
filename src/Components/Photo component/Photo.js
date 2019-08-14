import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Photo(){

    const [NasaPhoto, setNasaPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response =>{
            const photoData = response.data;
            console.log(photoData);
            // setNasaPhoto = (NasaPhoto);
        })
    }, [])


    return(
        <div className="container">
            <h1>HELLO WORLD</h1>
        </div>
    )
}
