import { Navigate, Route, Routes } from "react-router"

import { Dashboard } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={ <Navigate to="/app/dashboard" /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
    )
}