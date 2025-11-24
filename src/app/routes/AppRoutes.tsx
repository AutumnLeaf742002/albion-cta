import { Navigate, Route, Routes } from "react-router"

import { CtasActives, Dashboard } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={ <Navigate to="/app/dashboard" /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/cta" element={ <CtasActives /> } />
        </Routes>
    )
}