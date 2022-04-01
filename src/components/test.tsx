import React from 'react';
import {gql, useQuery} from "@apollo/client";


type MovieType = {
	id: string | number,
	name: string,
	genre: string,

}
type MoviesType = {
	movies: Array<MovieType>
}

const Test = () => {

    const {loading, error, data} = useQuery<MoviesType>(gql`
        {
            movies {
                id
                name
                genre
            }
        }
	`)

	return (
		<div>
			{data && data.movies.map((movie) => (
				<div key={movie.id}>
					<div>{movie.id}</div>
					<div>{movie.name}</div>
					<div>{movie.genre}</div>

				</div>
			))}
		</div>
	);
};

export default Test;