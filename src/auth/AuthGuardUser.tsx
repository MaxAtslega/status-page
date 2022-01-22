import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthGuardUser = function AuthGuardUser({ children }: {children: any}) {
  const redirect = useNavigate()
  const authenticated = true

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{authenticated ? children : redirect('/admin/login')}</>
}

export default AuthGuardUser
