import { useForm } from 'react-hook-form';

import { Text } from './Text';
import { useSearchParams } from 'react-router-dom';

interface Props {

    icon: React.ReactNode,
    placeholder?: string,
    buttonText: string
}

interface TimeFields {
    start: string,
    end: string
}

export const Search = ({ icon, buttonText }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams({start: "00:00", end: "00:00"})
    const start = searchParams.get("start") ?? "01:00"
    const end = searchParams.get("end") ?? "02:00"

    const {register, handleSubmit} = useForm<TimeFields>({
        defaultValues: {
            start: start,
            end: end
        }
    })

    const onSubmit = (data: TimeFields) => {

        if (!data.start || !data.end) return

        setSearchParams({start: data.start, end: data.end})
    }

    return (
        <form className="flex flex-col md:flex-row gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-2'>
                <Text>
                    Inicio UTC:
                </Text>
                <input {...register("start")} type="time" className='text-(--color-text-body)' />
            </div>
            <span className='md:flex items-center hidden'>
                <Text>
                    -
                </Text>
            </span>
            <div className='flex items-center gap-2'>
                <Text>
                    Fin UTC:
                </Text>
                <input {...register("end")} type="time" className='text-(--color-text-body)' />
            </div>
            <button className="bg-(--color-primary) min-w-24 h-10 rounded-sm cursor-pointer transition hover:bg-(--color-primary-hover) text-neutral-900 font-semibold text-base flex gap-1 items-center justify-center">
                {icon}
                {buttonText}
            </button>
        </form>
    )
}