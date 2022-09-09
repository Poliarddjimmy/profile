import { GRAPHQL_API_URL } from "../utils/constants"
import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cache } from "./cache";

const httpLink = createHttpLink({
    uri: GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token
  if(typeof window !== 'undefined') {
    token = window.localStorage.getItem("accessToken");
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      hostname: typeof window !== 'undefined' ? window.location.hostname : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});

export default client;