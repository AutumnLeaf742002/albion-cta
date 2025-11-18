import { Navigate, Route, Routes } from "react-router"

import { AuthRoutes } from "../auth/routes"
import { AppRoutes } from "../app/routes"

import { Landing } from "../ui/pages"

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="auth/*" element={ <AuthRoutes /> } />
            <Route path="app/*" element={ <AppRoutes /> } />
            <Route path="/" element={ <Landing /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}