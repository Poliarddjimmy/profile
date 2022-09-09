import { gql } from "graphql-tag";

export const SIGN_USER_UP = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      
        user {
          id
          uuid
          firstName
          lastName
          email
        }
        token
    }
  }
`

export const LOGOUT = gql`
  mutation Logout($input: LogoutInput!) {
    logout(input: $input) {
      success
    }
  }
`

export const LOGIN_USER = gql`
  mutation LoginUserMutation($input: LoginInput!) {
    login(input: $input) {
        user {
          id
          uuid
          firstName
          lastName
          email
        }
        token
    }
  }
`