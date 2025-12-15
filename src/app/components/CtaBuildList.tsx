import { NavLink } from "react-router-dom";

import type { CtaBuild } from "../interfaces";

interface Props {
    build: CtaBuild[]
}

export const CtaBuildList = ({ build }: Props) => {

    return (
        <div className="bg-(--color-surface) p-5 rounded-xl border border-(--color-border)">
            <h2 className="text-lg font-semibold text-(--color-text-title)">Builds permitidas</h2>

            <div className="mt-3 flex flex-col gap-3">
                {build.map((b) => (
                    <div
                        key={b.build_uid}
                        className="flex items-center justify-between bg-(--color-surface-alt) p-3 rounded-lg"
                    >
                        <div className="flex flex-col">
                            <span className="font-semibold text-(--color-text-title)">{b.name} - {b.member ?? ""}</span>
                            <span className="text-sm text-(--color-text-muted)">{b.role}</span>
                        </div>

                        <div className="flex gap-2">
                            <button className="w-14 py-1 text-center rounded font-semibold bg-green-700 text-white cursor-pointer hover:bg-green-600 transition text-sm">
                                Tomar
                            </button>

                            <NavLink
                                to={`/app/builds/${b.build_uid}`}
                                className="px-3 py-1 rounded bg-(--color-primary)/50 text-(--color-primary-text) text-sm hover:bg-(--color-primary-hover) font-semibold transition"
                            >
                                Ver build
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
