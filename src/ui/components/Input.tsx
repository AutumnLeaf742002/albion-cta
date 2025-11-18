import { Text } from './'

import type {Path, UseFormRegister, FieldValues} from "react-hook-form"

interface Props<TForm extends FieldValues> {
    
    name: Path<TForm>,
    register: UseFormRegister<TForm>,
    label: string,
    placeholder?: string
    type?: string,
    error?: string
}

export const Input = <TForm extends FieldValues>({ name, register, label="no label", placeholder, type="text", error = "" }: Props<TForm>) => {

    return (
        <span className="flex flex-col gap-2">
            <label>
                <Text>
                    {label}
                </Text>
            </label>
            <input {...register(name)} type={type} placeholder={placeholder} className={`w-full h-10 border border-(--color-border) focus:border-(--color-primary) px-3 bg-(--color-surface-alt) outline-none text-white rounded-sm transition-all ${error && "border-red-300!"}`} />

            {
                error && (
                    <Text className="text-red-300!">
                        {error}
                    </Text>
                )
            }

        </span>
    )
}