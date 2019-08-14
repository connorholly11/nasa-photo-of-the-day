import React from "react"
//child of Photo

const PhotoBox = props => {
    console.log(props);
    return(
    <div className="cardBox">
        <h1> {props.photoData.title} </h1>
        <p> {props.photoData.explanation}</p>
        <img alt="nasa photo" src={props.photoData.hdurl}/>
    </div>
    )
}


export default PhotoBox;
