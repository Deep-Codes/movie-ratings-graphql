import React from 'react';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(15, 15, 15, 0.2);
  border-radius: 4px;
  width: 500px;
  height: 50px;
`;

const MovieName = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;
const MovieRating = styled.h3`
  font-size: 22px;
  font-weight: bold;
`;
const MovieLanguage = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const Movies = (props) => {
  const { movies } = props;
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <Movie>
          <MovieName>{movie.name}</MovieName>
          <MovieRating>{movie.rating}</MovieRating>
          <MovieLanguage>{movie.language}</MovieLanguage>
        </Movie>
      ))}
    </MoviesContainer>
  );
};

export default Movies;
