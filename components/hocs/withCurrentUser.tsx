import React from 'react'
import { useRouter } from "next/router"
import useAuth from '../../hooks/useAuth'

const withCurrenUser = (WrappedComponent: any) => {
  const WithCurrenUser = () => {
    const router = useRouter()

    const { currentUserData, currentUserLoading } = useAuth()
    return <WrappedComponent currentUser={currentUserData?.currentUser} />
  }
  return WithCurrenUser;
}

export default withCurrenUser;