import { useState } from "react"

import { Header, Menu } from "../components"

interface Props {
    children: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {

    const [expand, setExpand] = useState(false)

    const toggleExpand = () => {
        
        setExpand(!expand)
    }

    return (
        <main className="w-dvw h-dvh bg-(--color-background) flex">

            <Menu expand={expand} />

            <div className="flex-1">

                <Header toggleExpand={toggleExpand} expand={expand} />

                <div className="p-4 md:px-8">
                    {children}
                </div>
            </div>

        </main>
    )
}