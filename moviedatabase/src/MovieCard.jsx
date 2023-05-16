import React from "react"
export default function MovieCard(props){
    const cardGenre = props.genres.map(genre => <i key={genre}>{genre}</i>)
    
    return(
        <div className="movie--card">
            <div className="movie--card-image">
                <img src={props.imgUrl}/>
                <strong>{props.name}</strong>
                <p className="movie--genres">{cardGenre}</p>
            </div>
            <div className="movie--card-info">
                <p className="movie--descr"><strong>Beskrivning:</strong><br />{props.description}</p>
                <p><strong>Betyg:</strong> {props.rating}</p>
                <p><strong>Minuter lång:</strong> {props.duration / 60}</p>
            </div>
        </div>
    )
  }