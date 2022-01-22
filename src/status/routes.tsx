import React from 'react'
import Status from './views/Status'
import Incident from './views/Incident'

const appRoutes = [
  {
    path: 'incident',
    element: <Incident />,
  },
  {
    path: 'status',
    element: <Status />,
  },
]

export default appRoutes
