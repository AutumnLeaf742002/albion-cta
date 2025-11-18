import { IoMenu } from "react-icons/io5"
import { Text, TextMuted } from "../../ui/components"

interface Props {
    toggleExpand: () => void,
    expand: boolean
}

export const Header = ({ toggleExpand, expand }: Props) => {

    const ioMenuColor = expand ? "#c026d3" : "#dcdcdc"

    return (
        <div className="h-12 md:h-14 bg-(--color-surface) border border-b-(--color-border) flex justify-between items-center px-4 md:px-8">

            <span className="flex items-center gap-1">
                <Text>
                    Alexis
                </Text>

                <div className="w-1 h-1 bg-(--color-primary) rounded-full"></div>

                <TextMuted>
                    Tanque
                </TextMuted>
            </span>

            <span className="flex items-center">
                <IoMenu color={ioMenuColor} onClick={toggleExpand} className="cursor-pointer hover:scale-110 transition" size={22} />
            </span>
        </div>
    )
}