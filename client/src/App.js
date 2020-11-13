import React from "react";
import './App.css';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import  Movies  from "./Movies";


const GET_MOVIES = gql`
  query getMovies {
    myMovies : movies{
      name,
      genres,
      rating,
      language
    }
  }
`

function App() {
  const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Movie Ratings</h1>

        <Query query={GET_MOVIES}>
          {
            (props) => {
              console.log("Props: " , props)
              const { error , loading , data }= props;
              if(error) return <div> Error: {error.message} </div>
              if(loading) return <div>Loading .... </div>
              if(!data || !data.myMovies){
                return <div> No Movies Found! </div>
              }
              return <Movies movies={data.myMovies} />
            }
          }
        </Query>
      </div>
    </ApolloProvider>
    
  );
}

export default App;
