import { Navigate, Route, Routes } from "react-router"

import { Profile, Dashboard, Cta, Guild, SearchGuild, CtaView, Builds, BuildView, GuildView } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/app/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cta" element={<Cta />} />
            <Route path="/cta/:id" element={<CtaView />} />
            <Route path="/guild" element={<Guild />} />
            <Route path="/guild/:id" element={<GuildView />} />
            <Route path="/search-guild" element={<SearchGuild />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/builds/:id" element={<BuildView />} />
        </Routes>
    )
}