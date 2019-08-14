import React from "react"
//child of Photo

const PhotoBox = props => {
    console.log(props);
    return(
    <div>
        <h1> {props.title} </h1>
        <img alt="nasa photo" src={props.photoData.hdurl}/>
    </div>
    )
}


export default PhotoBox;
