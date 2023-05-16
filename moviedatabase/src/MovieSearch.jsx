import React from 'react'
import MovieCard from './MovieCard'

export default function MovieSearch(props) {
    const [filtered, setFiltered] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([])
    const [searchQuery, setSearchQuery] = React.useState("")

    function onChange(event){
        const { suggestions } = props;
        const newFilteredSuggestions = suggestions.filter(
        suggestion =>
            suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setFiltered(newFilteredSuggestions);
        setShow(true);
        setInput(event.currentTarget.value)
        setSearchQuery(event.currentTarget.value)
    };

  function onClick(event){
      setFiltered([]);
      setShow(false);
      setInput(event.currentTarget.innerText)
      setSearchQuery(event.currentTarget.innerText)
    };

  function renderAutocomplete(){
      if (show && input) {
        if (filtered.length) {
          return (
            <ul className="autocomplete">
              {filtered.map((suggestion, index) => {
                if(index < 5){
                  return (
                    <li key={suggestion} onClick={onClick}>
                      {suggestion}
                    </li>
                  );
                }else {
                  return
                }
              })}
            </ul>
          );
        } else {
          return (
            <div className="no-autocomplete">
              <em>Not found</em>
            </div>
          );
        }
      }
      return <></>;
    }
    function searchForMovie(event) {
        event.preventDefault()
        fetch(`https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=${searchQuery}`, {
            method: 'GET'
          })
            .then(res => res.json())
            .then(movieData => setSearchResult(movieData))
            setShow(false);
    }   
    const resultMovies = searchResult.map((movie) => {
        return (
        <MovieCard 
            key={movie.id}
            imgUrl={movie.thumbnail}
            name={movie.name}
            description={movie.description}
            rating={movie.rating}
            duration={movie.duration}
            genres={movie.genres}
        />)
    })
  return (
      <>
      <header>
        <h1>Välkommen till filmdatabasen</h1>
        <p>Här kan du söka efter ett stort antal filmer och se information om dem</p>
        <div className="input-group">
            <input
                name="searchTerm"
                type="text"
                onChange={onChange}
                value={input}
                placeholder='Sök efter din film'
            />
            {renderAutocomplete()}
        <button onClick={searchForMovie} type="submit">Sök</button>
        </div>
      </header>
      <main>
        <div className="movie--all-movies">{resultMovies}</div>
      </main>
      </>
    );

  }