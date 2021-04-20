import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'

const Routes = () => {
    return (
        <Router >
            <Route exact path="/" component={Dashboard} />
        </Router >
    )
}

export default Routes