import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoBox from "./PhotoBox"
//parent of PhotoBox

export default function Photo(){

    const [NasaPhoto, setNasaPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response =>{
            const photoData = response.data;
            // console.log(photoData);
            setNasaPhoto (photoData);
        })
        // .catch(response =>{
        //     console.log(err);
        // })
    }, []);


    return(
        <div className="container">
            <div className="card">
                <PhotoBox 
                photoData = {NasaPhoto}/>
            </div>
        </div>
    )
}
