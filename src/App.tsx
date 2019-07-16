import React, { useState } from 'react';
import { query } from './context/APIService';

export const Test:React.FC<{}> = () => {

    const [ movies, setMovies ] = useState<[string]>(); 

    query().then(results => {
        setMovies(results)
    })

    return (
        <div>
            <h1>Movie database</h1>
            {movies && movies.map(movie => (
                <div>{movie}</div>
            ))}
        </div>
    )
}