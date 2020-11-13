const express  = require('express');
const {ApolloServer , gql } = require('apollo-server-express');
const PORT = 5000;

const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const server = new ApolloServer({ 
  typeDefs ,
  resolvers
 });

const app = express();

const cors =  require('cors');
app.use(cors());


server.applyMiddleware({ app })


app.listen(PORT , err => {
  if(err) return console.error("Unable to Access the GraphQL-Express Server");
  console.log(`Server Started at http://localhost:${PORT}${server.graphqlPath}`)
})
 