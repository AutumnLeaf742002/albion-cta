import { Title } from "./"

interface Props {
    text: string,
    type?: Variants,
    callback?: () => void
}

type Variants = "button" | "submit" | "reset"

export const ButtonPrimary = ({ text = "no text", type = "button", callback }: Props) => {
    return (
        <button className="bg-(--color-primary) min-w-30 px-4 h-10 rounded-sm cursor-pointer hover:shadow-[0px_0px_7px_var(--color-primary)] transition hover:-translate-y-0.5 w-full" type={type} onClick={callback}>
            <Title className="font-semibold">
                {text}
            </Title>
        </button>
    )
}
