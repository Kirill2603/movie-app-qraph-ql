import {gql, useQuery} from "@apollo/client";
import React from "react";


export function ExchangeRates() {
    const { loading, error, data } = useQuery(gql`
        {
            movies {
                name
                genre
            }
        }
	`);

	return (
		<>
			{data && data.movies.map((m: any) => (
				<div>
					<span>{m.name}</span>
					<span> : </span>
					<span>{m.genre}</span>
				</div>
			))}
		</>
	)

}