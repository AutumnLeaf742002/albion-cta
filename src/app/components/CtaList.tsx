import type { Cta } from "../interfaces"
import { CtaItem } from "./CtaItem"

const ctas: Cta[] = [
    {
        uid: "cta-001",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-11-29",
        start: "20:00",
        end: "21:00",
        objetive: "Ava Road Dive",
        notes: "Armaduras ligeras, no llevar loot caro."
    },
    {
        uid: "cta-002",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-11-29",
        start: "22:00",
        end: "23:30",
        objetive: "ZvZ práctica",
        notes: "Formación obligatoria. Tanques al frente."
    },
    {
        uid: "cta-003",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-11-30",
        start: "18:00",
        end: "19:00",
        objetive: "Gank en Roads",
        notes: "Monturas rápidas. Build de gank obligatoria."
    },
    {
        uid: "cta-004",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-11-30",
        start: "19:30",
        end: "21:00",
        objetive: "Spider fuerte",
        notes: "Se reparten cofres al final."
    },
    {
        uid: "cta-005",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-01",
        start: "17:00",
        end: "18:10",
        objetive: "Castillo pequeño",
        notes: "Necesitamos healers extra."
    },
    {
        uid: "cta-006",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-01",
        start: "21:00",
        end: "22:00",
        objetive: "Dungeon Avalonia 8",
        notes: "Food 6.1 mínimo."
    },
    {
        uid: "cta-007",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-02",
        start: "16:00",
        end: "17:30",
        objetive: "Outpost",
        notes: "Focus en capturas rápidas."
    },
    {
        uid: "cta-008",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-02",
        start: "19:00",
        end: "20:00",
        objetive: "Ava roaming",
        notes: "Se priorizan kills. No limpiar mobs."
    },
    {
        uid: "cta-009",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-03",
        start: "23:00",
        end: "00:30",
        objetive: "Raid de gremio",
        notes: "Builds full meta. Entrada a tiempo."
    },
    {
        uid: "cta-010",
        creator: "Alex",
        guild: "Templarios",
        day: "2025-12-04",
        start: "15:30",
        end: "16:30",
        objetive: "Hideout scouting",
        notes: "Solo monturas ágiles. No pelear."
    }
]


export const CtaList = () => {
    return (
        <div>
            {
                ctas.map(cta => (
                    <CtaItem key={cta.uid} cta={cta} />
                ))
            }
        </div>
    )
}