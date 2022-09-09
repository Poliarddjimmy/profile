import { gql } from "@apollo/client";
export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      uuid
      firstName
      lastName
      fullName
      email
    }
  }
`;


export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const AUTH_DATA = gql`
  query AuthData {
    authData @client
  }
`;
