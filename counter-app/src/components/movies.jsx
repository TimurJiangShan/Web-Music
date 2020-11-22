import React, { Component } from 'react';
import { getMovies } from '../mock/services/fakeMovieService';
import 'bootstrap/dist/css/bootstrap.css';

class Movies extends Component {
  state = { 
    movies: getMovies()
  };


  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter((c) => c._id !== movie._id);
    this.setState({
      movies: movies
    })
  }



  render() { 
    return ( 
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    );
  }
}
 
export default Movies;