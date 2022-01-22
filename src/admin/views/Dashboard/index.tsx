import React from 'react'
import { FormattedMessage } from 'react-intl'

const Index = function Dashboard() {
  return (
    <div className="Dashboard">
      <p>
        <FormattedMessage
          id="admin.welcome"
          values={{
            name: <strong>Admin</strong>,
          }}
        />
      </p>

    </div>
  )
}

export default Index
