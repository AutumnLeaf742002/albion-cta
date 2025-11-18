import { useNavigate } from "react-router"
import { Title } from "./"

interface Props {
    className?: string
}

export const LogoText = ({ className }: Props) => {

    const navigate = useNavigate()

    const goHome = ()=>{

        navigate("/")
    }

    return (
        <span className="flex cursor-pointer"  onClick={goHome}>
            <Title className={`text-2xl font-bold ${className}`}>
                Albion
                <span className="text-(--color-primary)">
                    CTA
                </span>
            </Title>
        </span>
    )
}