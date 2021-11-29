import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from './AuthContext'

const AdminRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    
    return (
        <Route {...rest}>{!user?.is_staff ? <Redirect to="/" /> : children}</Route>
    )
}

export default AdminRoute
