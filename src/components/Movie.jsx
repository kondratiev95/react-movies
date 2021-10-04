import React from 'react';

function Movie(props) {

    const { 
        Title: title, 
        Year: year, 
        imdbID: id, 
        Type: type, 
        Poster: poster
    } = props;

    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ?
                        <img classNameName="activator" src={`https://via.placeholder.com/300x450?text=${title}`}/>
                        :
                        <img classNameName="activator movie-img" src={poster}/> 
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>                    
                <p>{year}</p><span className="right">{type}</span>
            </div>
        </div>
    )
}

export { Movie };