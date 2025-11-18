import type {
    FieldValues,
    Path,
    UseFormRegister
} from "react-hook-form"

import { Text } from "./"

interface Option {
    value: string | number
    text: string
    default?: boolean
}

interface Props<TForm extends FieldValues> {
    name: Path<TForm>
    register: UseFormRegister<TForm>
    label: string
    error?: string
    opts: Option[]
}

export const Select = <TForm extends FieldValues>({
    opts = [],
    label = "no label",
    name,
    register,
    error = ""
}: Props<TForm>) => {
    return (
        <span className="flex flex-col gap-2">
            <label>
                <Text>{label}</Text>
            </label>

            <select
                {...register(name)}
                defaultValue={opts.find(o => o.default)?.value ?? ""}
                className="text-white w-full h-10 border border-(--color-border) focus:border-(--color-primary) px-3 bg-(--color-surface-alt) outline-none rounded-sm transition-all"
            >
                {opts.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.text}
                    </option>
                ))}
            </select>

            {error && (
                <Text className="text-red-300!">
                    {error}
                </Text>
            )}
        </span>
    )
}
