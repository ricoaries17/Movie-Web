import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'

class Empty extends Component{
    render(){
        return
    }
}

class Movie extends Component {
    viewMovie() {
    $('.active').attr('class', 'deactive');
    $('#movie').attr('class', 'deactive');
    $('#detail').attr('class', 'active');
    $('.card-content-active').attr('class', 'card-content-deactive');
    
      // console.log("Trying to view movie")
      // console.log(this.props.movie.title)
      const poster =this.props.movie.poster_src
      const judul =this.props.movie.title
      const deskripsi= this.props.movie.overview
      const rating=this.props.movie.vote_average
      const tanggal=this.props.movie.release_date
      $('#detail').html(`
      <div>
      
        <img alt="poster" src="`+poster+`"></img>
        <div className="active">
        <h3>"`+judul+`"</h3>
        <p>"`+deskripsi+`"</p>
        <p>Rating : `+rating+`</p>
        <p>`+tanggal+`</p>

      </div>`)
    }
  
    render() {
      return (
          <div className="card-content-active" id="list">
              <img alt="poster" width="120" src={this.props.movie.poster_src}></img>
              <div className="active">
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.vote_average}</p>
                <p>{this.props.movie.release_date}</p>
                <input className="button" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
              </div>
          </div>
      )
      
  }
};
  
  export default Movie;