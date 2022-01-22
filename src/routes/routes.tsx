import { Navigate, useRoutes } from 'react-router-dom'
import React from 'react'

import NotFound from './NotFound'
import Status from './Status'
import Incident from './Incident'

export const AllPages = function AllPages() {
  return useRoutes([
    {
      path: '/status',
      element: <Status />,
    },
    {
      path: '/incident/:id',
      element: <Incident />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <Navigate to="/status" />,
    },
  ])
}
