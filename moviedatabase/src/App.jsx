import React from 'react'
import './App.css'
import GetAllMovies from './GetAllMovies'
import MovieSearch from './MovieSearch'

function App() {
  const allMovieNames = GetAllMovies()
  return (
    <>
        <MovieSearch suggestions={allMovieNames} />
    </>
  )
}

export default App
