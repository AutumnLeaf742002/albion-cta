// import { useParams } from "react-router-dom";

import type { Cta } from "../interfaces"

import { AppLayout } from "../layout/AppLayout"

import { CtaHeader, CtaDescription, CtaBuildList } from "../components"


const cta: Cta = {
    uid: "3",
    name: "Avalon Push",
    creator: "Alexis",
    day: "2025-01-12",
    start: "21:00",
    end: "23:00",
    guild: "Templarios",
    objetive: "Limpiar zonas Avalonianas y capturar 2 energías.",
    notes: "Traer comida de resistencia. No se acepta gear 4.1.",
    builds: [
        { slot_id: 1, build_uid: "1", name: "Tank Mazo", role: "Tank", member: "Alex" },
        { slot_id: 2, build_uid: "2", name: "Arcane Support", role: "Support", member: "Esther" },
        { slot_id: 3, build_uid: "3", name: "Fire DPS", role: "DPS", member: "Roberto" },
    ],
}

export const CtaView = () => {
    // const { id } = useParams();

    return (
        <AppLayout>
            <div className="p-4 flex flex-col gap-6 text-(--color-text-body)">

                <CtaHeader cta={cta} />

                <CtaDescription objetive={cta.objetive} notes={cta.notes} />

                <CtaBuildList build={cta.builds ?? []} />

            </div>
        </AppLayout>
    )
}