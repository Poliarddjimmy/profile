import { LOGIN_USER, LOGOUT } from './../graphql/mutations';
import { useMutation, useQuery } from "@apollo/client" 
import { IS_LOGGED_IN, AUTH_DATA, CURRENT_USER } from "../graphql/queries"

interface LoginProps {
  email: string;
  password: string;
}

export default function useAuth() {

  const { 
    loading: currentUserLoading, 
    error: currentUserError, 
    data: currentUserData, 
    refetch: refetchCurrentUser } = useQuery(CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  })
  
  const { 
    loading: isLoginLoading, 
    error: isLoginError, 
    data: isLoginData, 
    refetch: isLoginAuth } = useQuery(IS_LOGGED_IN, {
      fetchPolicy: "cache-first",
      errorPolicy: "ignore",
    })


  const { 
    loading: authLoading, 
    error: authError, 
    data: authData, 
    refetch: refetchAuth 
  } = useQuery(AUTH_DATA, {
    fetchPolicy: "cache-first",
    errorPolicy: "ignore",
  })

  const [logout, { data: logoutData, error: logoutError }] = useMutation(LOGOUT, {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
    refetchQueries: [{ query: CURRENT_USER }]
  })

  const logoutUser = () => {
    logout({ variables: { } })
  }


  const [LoginUserMutation, { data: loginData, error: loginError }] = useMutation(LOGIN_USER, {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
    refetchQueries: [{ query: CURRENT_USER }]
  })

  const login = (input: LoginProps) => {
    LoginUserMutation({ variables: { input } })
  }

  return { 
    login,
    loginData,
    loginError,

    logoutUser,
    logoutData,
    logoutError,

    authData,
    authLoading,
    authError,
    refetchAuth,

    isLoginLoading,
    isLoginError,
    isLoginData,
    isLoginAuth,

    currentUserData,
    currentUserLoading,
    currentUserError,
    refetchCurrentUser,
  }
}