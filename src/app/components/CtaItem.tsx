import { useNavigate } from "react-router-dom"

import type { Cta } from "../interfaces"

import { Text } from "../../ui/components"
import { IoTimeOutline } from "react-icons/io5"
import { FaRegCalendarAlt } from "react-icons/fa"

interface Props {
    cta: Cta
}

export const CtaItem = ({ cta }: Props) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate(`/app/cta/${cta.uid}`)
    }

    return (
        <div
            onClick={onClick}
            className="
                w-full
                bg-(--color-surface)
                border-b border-(--color-border)
                p-4
                flex flex-col gap-2
                cursor-pointer
                transition
                hover:bg-(--color-surface-alt)
                hover:border-(--color-primary)
            "
        >
            <Text className="text-lg font-semibold text-(--color-text-title)">
                {cta.objetive}
            </Text>

            <div className="flex items-center gap-2 text-(--color-text-muted) text-sm">
                <FaRegCalendarAlt size={14} className="text-(--color-primary)" />
                <span>{cta.day}</span>
            </div>

            <div className="flex items-center gap-2 text-(--color-text-body) text-sm">
                <IoTimeOutline size={16} className="text-(--color-primary)" />
                <span>{cta.start} — {cta.end} UTC</span>
            </div>
            <Text className="text-xs text-(--color-text-muted)">
                Creado por {cta.creator}
            </Text>
        </div>
    )
}
