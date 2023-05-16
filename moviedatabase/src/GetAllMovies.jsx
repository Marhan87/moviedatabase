import React from 'react'

export default function GetAllMovies() {
    const [allMovies, setAllMovies] = React.useState([])

    React.useEffect(() => {fetch(`https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(movieData => setAllMovies(movieData))
    }, [])
    const allMovieNames = allMovies.map((movie) => {
        return (movie["name"])
    })
    return allMovieNames
}