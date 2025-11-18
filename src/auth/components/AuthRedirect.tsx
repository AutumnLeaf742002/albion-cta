import { Link } from "react-router"

import { Text } from '../../ui/components'

interface Props {
    text: string,
    link: string,
    path: string
}

export const AuthRedirect = ({ text, link, path }: Props) => {
    return (
        <Link to={path} className="flex gap-1 justify-center">
            <Text>
                {text}
            </Text>
            <span className="text-(--color-secondary)">
                {link}
            </span>
        </Link>
    )
}