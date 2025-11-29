import { useForm } from 'react-hook-form'
import { IoMdSearch } from "react-icons/io"
import { Text } from './Text'
import { useSearchParams } from 'react-router-dom'

interface TimeFields {
    start: string
    end: string,
    next: boolean
}

export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams({
        start: "00:00",
        end: "00:00",
        next: "false",
    })

    const start = searchParams.get("start") ?? "00:00"
    const end = searchParams.get("end") ?? "00:00"
    const next = searchParams.get("next") === "true"

    const { register, handleSubmit } = useForm<TimeFields>({
        defaultValues: { start, end, next }
    })

    const onSubmit = (data: TimeFields) => {
        if (!data.start || !data.end) return
        setSearchParams({
            start: data.start,
            end: data.end,
            next: String(data.next),
        })
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row items-center gap-3"
        >
            {/* Checkbox */}
            <div className="flex items-center gap-2">
                <label>
                    <Text>Ver próximas Cta</Text>
                </label>
                <input {...register("next")} type="checkbox" />
            </div>

            {/* Inicio */}
            <div className="flex items-center gap-2">
                <Text className="text-sm">Inicio UTC:</Text>
                <input
                    {...register("start")}
                    type="time"
                    className="text-(--color-text-body)"
                />
            </div>

            <span className="hidden md:flex items-center">
                <Text>-</Text>
            </span>

            {/* Fin */}
            <div className="flex items-center gap-2">
                <Text className="text-sm">Fin UTC:</Text>
                <input
                    {...register("end")}
                    type="time"
                    className="text-(--color-text-body)"
                />
            </div>

            {/* Botón */}
            <button
                className="
                    bg-(--color-primary)
                    hover:bg-(--color-primary-hover)
                    min-w-20 h-8
                    rounded-sm
                    cursor-pointer
                    transition
                    text-neutral-900
                    font-semibold
                    flex items-center justify-center gap-1
                    text-sm
                "
            >
                <IoMdSearch size={20} />
                Filtrar
            </button>
        </form>
    )
}
