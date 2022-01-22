import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import ForgotPassword from './views/ForgotPassword'
import AuthGuardUser from '../auth/AuthGuardUser'
import AdminLayout from '../components/AdminLayout'

const adminRoutes = [
  {
    path: '/admin',
    element: <Navigate to="/admin/dashboard" />,
  },
  {
    path: '/admin/login',
    element: <Login />,
  },
  {
    path: '/admin/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/admin',
    element: (
      <AuthGuardUser>
        <AdminLayout />
      </AuthGuardUser>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]

export default adminRoutes
