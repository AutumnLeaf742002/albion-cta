import { Title, Text } from "./"

interface Props {
    title: string,
    text: string,
    icon: string
}

export const CardLanding = ({ title="no title", text="no text", icon }: Props) => {
    return (
        <div className="border border-(--color-border) p-5 bg-(--color-background) rounded-md flex flex-col gap-5 w-104">
            <span>
                <img src={icon} alt="icon card" className="w-7" />
            </span>
            <div className="flex flex-col gap-4">
                <Title className="text-xl font-bold">
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
            </div>
        </div>
    )
}