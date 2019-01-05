import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Category from './category';
import SearchBar from './search-bar';
import $ from 'jquery';



const url = 'http://127.0.0.1:5000';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      selectedMovie: null,
      newmovies: null,
      placeholder: 'Search for something...'
    };
  }
  componentDidMount = () => {
    this.GetInitialChararcters();
  };

  handleMovieSelect = () => {
    $.getJSON(`${url}/newmovies`, result => {
      const movies = result;
      console.log(movies);
      this.setState({ movies: movies });
    });

  };
  topRated = () => {
    $.getJSON(`${url}/toprated`, result => {
      const movies = result;
      this.setState({ movies: movies });
    });

  };
  mostView = () => {
    $.getJSON(`${url}/mostviewed`, result => {
      const movies = result;
      console.log(movies);
      this.setState({ movies: movies });
    });

  };

  Animasyon = () => {
    $.getJSON(`${url}/animasyon`, result => {
      const movies = result;
      console.log(movies);
      this.setState({ movies: movies });
    });

  };
  Dram = () => {
    $.getJSON(`${url}/dram`, result => {
      const movies = result;
      console.log(movies);
      this.setState({ movies: movies });
    });

  };
  Macera = () => {
    $.getJSON(`${url}/macera`, result => {
      const movies = result;
      console.log(movies);
      this.setState({ movies: movies });
    });
  };
  GetInitialChararcters() {
    $.getJSON(`${url}`, result => {
      const movies = result;
      this.setState({ movies: movies });
    });
  }
  CharacterSearch = term => {
    $.getJSON(`http://www.omdbapi.com/?s=${term}&apikey=bf3e79db`, result => {
      const movies = result.Search;
      this.setState({ movies: movies });
    });
  }

  render() {
    return (
      <div className="container-fluid ">
        <Header />
        <SearchBar onSearchButtonClick={this.CharacterSearch} placeholderText={this.state.placeholder} />
        <Category onMovieSelect={this.handleMovieSelect} toprated={this.topRated} mostView={this.mostView} animasyon={this.Animasyon} dram={this.Dram} macera={this.Macera} />
        <Main movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;