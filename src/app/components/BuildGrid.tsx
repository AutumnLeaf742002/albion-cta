import { useState } from 'react';

import type { Build } from '../interfaces';

import { BuildItem } from './BuildItem';
import { Text } from '../../ui/components';

const mockBuilds: Build[] = [
    {
        uid: "bldA9f3K",
        name: "Tank Avalon",
        role: "Tank",
        description: "Build defensiva para engages prolongados.",
    },
    {
        uid: "bldQ7x2M",
        name: "Healer ZvZ",
        role: "Healer",
        description: "Curaciones en área para peleas masivas.",
    },
    {
        uid: "bldP4R8L",
        name: "DPS Bruiser",
        role: "DPS",
        description: "Daño constante con buena supervivencia.",
    },
    {
        uid: "bldZ1N6C",
        name: "Support Arcano",
        role: "Support",
        description: "Buffs y control para apoyar al frontline.",
    },
    {
        uid: "bldM5E2W",
        name: "Scout Solo",
        role: "Utility",
        description: "Movilidad y visión para reconocimiento.",
    },
]

export const BuildGrid = () => {

    const [rolFilter, setRolFilter] = useState<string>("5")

    const onSelectChange = async (e:React.ChangeEvent<HTMLSelectElement>) => {

        setRolFilter(e.currentTarget.value)
    }

    const onFilter = () => {

        console.log(rolFilter)
    }

    return (
        <div>
            <span className='flex gap-2 my-4'>
                <Text>
                    Rol -
                </Text>

                <select className='text-(--color-text-body) outline-none border-b border-neutral-400 pb-1' value={rolFilter} onChange={(e) => onSelectChange(e)}>
                    <option value="5">Todo</option>
                    <option value="0">Tanque</option>
                    <option value="1">Dps</option>
                    <option value="2">Healer</option>
                    <option value="3">Support</option>
                    <option value="4">Montura</option>
                </select>

                <button className='text-(--color-text-body) bg-(--color-primary) px-3 py-1 rounded cursor-pointer font-semibold hover:bg-(--color-primary-hover) transition text-sm'
                    onClick={onFilter}
                >
                    Aplicar
                </button>
            </span>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {mockBuilds.map((build) => (
                    <BuildItem key={build.uid} {...build} />
                ))}
            </div>
        </div>
    )
}