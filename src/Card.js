import React from 'react';

function Card({person, maxId}) {
    const {id, name, city, country, title, employer, favoriteMovies} = person;
    
    // create an object with an edit and new key, then create an if else block to return the correct template
    // if (something.edit) {
    //     return (
    //         null
    //     );
    // } else if (something.new) {
    //     return (

    //     )
    // } else {
    return (
        <div>
            <p>{id}/{maxId}</p>
            <h1>{name.first + ' ' + name.last}</h1>
            <p><strong>From:</strong> {city}, {country}</p>
            <p><strong>Job Title:</strong> {title}</p>
            <p><strong>Employer:</strong> {employer}</p>
            <p><strong>Favorite Movies:</strong></p>
            <ol>
                <li>{favoriteMovies[0]}</li>
                <li>{favoriteMovies[1]}</li>
                <li>{favoriteMovies[2]}</li>
            </ol>
        </div>
    );
    // }
}
export default Card;