import React from 'react'
import { useRouter } from "next/router"
import useAuth from '../../hooks/useAuth'
import Loading from '../loading'
import SignIn from '../../pages/signin'

const withAuth = (WrappedComponent: any) => {
  const WithAuth = () => {
    const router = useRouter()

    const { currentUserData, currentUserLoading, refetchCurrentUser } = useAuth()

    if (currentUserLoading) {
      return <Loading/>
    }
    if (currentUserData?.currentUser) {
      return <WrappedComponent currentUser={currentUserData?.currentUser} />
    }

    if (!currentUserData?.currentUser) {
      router.push('/signin')
    }

    return <div></div>

  }
  return WithAuth;
}

export default withAuth;