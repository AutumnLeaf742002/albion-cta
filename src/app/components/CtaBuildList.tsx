import { NavLink } from "react-router-dom";

import type { Build } from "../interfaces";

interface Props {
    build: Build[]
}

export const CtaBuildList = ({ build }: Props) => {

    return (
        <div className="bg-(--color-surface) p-5 rounded-xl border border-(--color-border)">
            <h2 className="text-lg font-semibold text-(--color-text-title)">Builds permitidas</h2>

            <div className="mt-3 flex flex-col gap-3">
                {build.map((b) => (
                    <div
                        key={b.uid}
                        className="flex items-center justify-between bg-(--color-surface-alt) p-3 rounded-lg"
                    >
                        <div className="flex flex-col">
                            <span className="font-semibold text-(--color-text-title)">{b.name}</span>
                            <span className="text-sm text-(--color-text-muted)">{b.role}</span>
                        </div>

                        {/* Luego pondrás botón de unirse */}
                        <NavLink
                            to={`/app/builds/${b.uid}`}
                            className="px-3 py-1 rounded bg-(--color-primary)/50 text-(--color-primary-text) text-sm hover:bg-(--color-primary-hover) font-semibold"
                        >
                            Ver build
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};
