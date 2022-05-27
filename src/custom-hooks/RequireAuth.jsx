import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'

const RequireAuth = ({ children }) => {

    const { token } = useAuth()
    const location = useLocation()
    return (
        <>
            {
                token ? children : <Navigate to='/Login' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth