import React from 'react';
import _ from 'lodash';
import MoviesItem from './MoviesItem';

const Main = props => {
    return (
        <div className="col-md-8">
            <div id="main">
                <div className="inner">
                    {/* Boxes */}
                    <div className="thumbnails">
                        {_.map(props.movies, movie => (
                            <MoviesItem key={movie.imdbID} movie={movie} onMovieSelect={props.onMovieSelect} movieinfo={props.MovieSelect} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;