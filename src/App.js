import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  state={}
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies=()=>{
    const movies=this.state.movies.map(movies =>{
      console.log(movies)
      return <Movie title={movies.title_english} poster={movies.medium_cover_image} key={movies.id} genres={movies.genres} synopsis={movies.synopsis}/>
    })
    return movies
  }

   _getMovies = async ()=>{
    const movies =await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi=()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
    .then(res=>res.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }
  render(){
    const {movies} =this.state
    return (
      <div className={movies ?"App":"App--loading"}>
       {movies ? this._renderMovies() : 'Loading'}   
    </div>
    );

  }
}

export default App;
