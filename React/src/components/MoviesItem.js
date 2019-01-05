import React from 'react';
import Trigger from './modal';


const MoviesItem = props => {
    const { movie } = props;
    return (

        <div className="box" onClick={() => props.movieinfo()}>
            <img src={`${movie.Poster}`}
                alt={movie.Title} />
            <div className="inner">
                <h3>{movie.Title}</h3>
                <h3>{movie.Year}</h3>
                <p>{movie.Plot}</p>
                <a href={movie.Fragman} className="button fit" target="_blank" data-poptrox="youtube,800x400">Watch Fragman</a>
            </div>
            <Trigger />
        </div>
    );
};
export default MoviesItem;