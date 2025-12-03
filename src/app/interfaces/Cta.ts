import type { CtaBuild } from "./CtaBuild"

export interface Cta {
    uid: string,
    name?: string
    creator: string,
    guild: string,
    day: string,
    start: string,
    end: string,
    objetive: string,
    notes: string
    builds?: CtaBuild[]
}