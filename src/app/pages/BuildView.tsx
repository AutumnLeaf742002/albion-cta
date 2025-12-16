import { useParams } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"
import { Text } from "../../ui/components/Text"
import type { Build } from "../interfaces"

interface BuildItem {
    slot: string
    name: string
}

interface BuildView extends Build {
    items: BuildItem[]
}

// ⛔ Mock data (luego lo reemplazas por backend)
    const build: BuildView = {
        uid: "2313",
        name: "Avalon DPS Build",
        role: "DPS",
        creator: "Alex",
        description:
            "Build enfocada en daño sostenido para contenido Avaloniano. Prioriza movilidad y sustain",
        items: [
            { slot: "Weapon", name: "Bloodletter" },
            { slot: "Head", name: "Hunter Hood" },
            { slot: "Chest", name: "Mercenary Jacket" },
            { slot: "Shoes", name: "Scholar Sandals" },
            { slot: "Cape", name: "Thetford Cape" },
            { slot: "Food", name: "Beef Stew" },
            { slot: "Potion", name: "Healing Potion" },
        ] as BuildItem[],
    }

export const BuildView = () => {

    const { id } = useParams()

    console.log(id)

    return (
        <AppLayout>
            <div className="space-y-6">

                {/* Header */}
                <div className="flex flex-col gap-1">
                    <Text className="text-2xl font-bold">
                        {build.name}
                    </Text>

                    <Text className="text-sm text-(--color-text-muted)">
                        Rol: {build.role}
                    </Text>
                    <Text className="text-sm text-(--color-text-muted)">
                        Creador: {build.creator}
                    </Text>
                </div>

                {/* Description */}
                <div className="rounded-xl bg-neutral-900 p-4">
                    <Text className="text-sm leading-relaxed text-gray-300">
                        {build.description}
                    </Text>
                </div>

                {/* Items */}
                <div>
                    <Text className="mb-3 text-lg font-semibold">
                        Equipamiento
                    </Text>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                        {build.items.map(item => (
                            <div
                                key={item.slot}
                                className="rounded-lg bg-neutral-900 p-3 text-center"
                            >
                                <Text className="text-xs uppercase text-gray-400">
                                    {item.slot}
                                </Text>

                                <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="item img" 
                                    className="w-40 h-auto mx-auto my-4"
                                />

                                <Text className="mt-1 text-sm font-medium">
                                    {item.name}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AppLayout>
    )
}
