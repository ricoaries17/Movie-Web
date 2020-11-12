import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
    viewMovie() {
      // console.log("Trying to view movie")
      // console.log(this.props.movie.title)
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
    }
  
    render() {
      return (
          <div className="card-content">
              <img alt="poster" width="120" src={this.props.movie.poster_src}></img>
              <div className="Keterangan">
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <input id="button" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
              </div>
          </div>
      )
      
  }
};
  
  export default Movie;