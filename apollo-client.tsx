import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_END_POINT,
  cache: new InMemoryCache(),
});

export default client;
