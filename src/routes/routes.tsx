import { Navigate, useRoutes } from 'react-router-dom'
import React from 'react'

import adminRoutes from '../admin/routes'
import sessionRoutes from '../session/routes'
import statusRoutes from '../status/routes'

export const AllPages = function AllPages() {
  return useRoutes([
    ...adminRoutes,
    ...sessionRoutes,
    ...statusRoutes,
    {
      path: '/',
      element: <Navigate to="/status" />,
    },
  ])
}
