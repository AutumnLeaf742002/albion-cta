import { Title } from "./"

interface Props {
    text: string,
    callback: () => void
}

export const ButtonDefault = ({ text, callback }: Props) => {
    return (
        <button className="border border-(--color-border) min-w-30 h-10 rounded-sm cursor-pointer transition hover:bg-[#232323]" onClick={callback}>
            <Title>
                {text}
            </Title>
        </button>
    )
}