import React, { useState } from "react";

export default function Home({moviesData}) {
  
  
  return (
    <section className="container">
      {moviesData.map((movie) => {
        return (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <div className="details">
              <h4>{movie.name}</h4>
              {/* <span>IMDB = {movie.rating}/10</span> */}
              <button>
                <a href={movie.link} target="_blank" className="watchNowBtn">
                  Watch Now
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
