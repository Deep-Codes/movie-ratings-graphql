
const { gql } = require("apollo-server-express");

module.exports = gql`
  type Movie {
    name: String!
    year: Int!
    rating: Int!
    language: Int!
  }

  type Query {
    hello: String!
    movie: [Movie!]!
  }
`;