import React, { Component } from 'react';
import logo from './play.png';
import './App.css';
import Movie from './Movie.js'
import $ from 'jquery'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("")
    this.TopRated()
    this.gotoHome()
  }

  performSearch(searchTerm) {
    $('#movie').attr('class', 'deactive');
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=3cd63003f46b53b2f9cba3565b66ee34&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results
        var movieRows = []
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <Movie key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  TopRated() {
    console.log("Top Rated Movie")
    $('#movie').attr('class', 'active');
    const urlString = "https://api.themoviedb.org/3/trending/movie/week?api_key=3cd63003f46b53b2f9cba3565b66ee34"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results
        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <Movie key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  gotoHome(){
    $('#movie').attr('class', 'active');
    $('.card-content-deactive').attr('class', 'card-content-active');
    $('.deactive').attr('class', 'active');
    $('#detail').attr('class', 'deactive');
    
  }

  render() {
    return (
      <div className="content">
        <header>
        <nav className="NavBar">
          <div className="Logo">
            <img src={logo} height="40px"></img>
            <h2 id="Home" onClick={this.gotoHome}>Theater Flix</h2>
          </div>
          <input onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
        </nav>
        </header>
        <div className="deactive" id="detail"></div>
        <div className="active" id="movie" onLoad={this.TopRated}>
          <h2> TOP RATED MOVIES</h2>
        </div>
        {this.state.rows}

      </div>
    );
  }
}

export default App;
