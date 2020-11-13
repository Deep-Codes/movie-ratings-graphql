
const { gql } = require("apollo-server-express");

module.exports = gql`
  type Movie {
    name: String!
    genres: String!
    rating: Float!
    language: String!
  }

  type Query {
    hello: String!
    movies: [Movie!]!
    movie(name: String! ): Movie!
    moviesList(sorted: Boolean! ): [Movie!]!
  }
`;