import { useState } from "react"
import { Header, Menu } from "../components"
import { useDevice } from "../../ui/hooks"

interface Props {
    children: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {

    const device = useDevice()
    const [expand, setExpand] = useState(device)

    const toggleExpand = () => setExpand(!expand)

    return (
        <main className="w-dvw h-dvh bg-(--color-background) flex overflow-hidden">

            <Menu expand={expand} />

            {/* Contenedor derecho en columna */}
            <div className="flex-1 flex flex-col">

                <Header toggleExpand={toggleExpand} expand={expand} />

                {/* Solo el contenido hace scroll */}
                <div className="flex-1 min-h-0 p-4 md:px-8 overflow-y-auto">
                    {children}
                </div>
            </div>

        </main>
    )
}
