import { NavLink } from "react-router-dom"

import type { Build } from "../interfaces"

import { Card } from "../../ui/components"


export const BuildItem = (build: Build) => {
    return (
        <NavLink to={`/app/builds/${build.uid}`}>
            <Card key={build.uid} className="space-y-4 cursor-pointer border transition hover:border-(--color-primary)">

                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                        {build.name}
                    </h3>
                    <span className="rounded-full bg-(--color-primary) px-3 py-1 text-sm text-white">
                        {build.role}
                    </span>
                </div>

                {build.description && (
                    <p className="text-sm text-(--color-text-body)">
                        {build.description}
                    </p>
                )}
            </Card>
        </NavLink>
    )
}