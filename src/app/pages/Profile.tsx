import { IoCreateOutline } from "react-icons/io5"

import { AppLayout } from "../layout/AppLayout"
import { Card, Text } from "../../ui/components"
import { NavLink } from 'react-router-dom';

const user = {
    name: "AutumnLeaf",
    email: "autumnleaf@email.com",
    role: "DPS",
    guild: "Templarios",
    joinedAt: "2024-03-12",
    stats: {
        builds: 5,
        ctas: 12,
        attendance: "87%",
    },
    builds: [
        "Avalon DPS Build",
        "Hellgate Mobility",
        "ZvZ Bloodletter",
    ],
}

export const Profile = () => {

    return (
        <AppLayout>
            <div className="space-y-6">

                <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                        <Text className="text-2xl font-bold">
                            {user.name}
                        </Text>

                        <Text className="text-sm text-(--color-text-muted)">
                            {user.email}
                        </Text>
                    </div>

                    <NavLink to={"/app/profile/edit"}>
                        <IoCreateOutline color="white" size={24} />
                    </NavLink>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                    <Card className="text-center">
                        <Text className="text-sm text-(--color-text-body">Rol en juego</Text>
                        <Text className="text-base font-medium">{user.role}</Text>
                    </Card>

                    <Card className="text-center">
                        <Text className="text-sm text-(--color-text-body">Gremio</Text>
                        <Text className="text-base font-medium">{user.guild}</Text>
                    </Card>

                </div>

                <div>
                    <Text className="mb-3 text-lg font-semibold">
                        Estadísticas
                    </Text>

                    <div className="grid grid-cols-3 gap-3">
                        <Card className="text-center">
                            <Text className="text-xl font-bold">{user.stats.builds}</Text>
                            <Text className="text-xs text-gray-400">Builds</Text>
                        </Card>

                        <Card className="text-center">
                            <Text className="text-xl font-bold">{user.stats.ctas}</Text>
                            <Text className="text-xs text-gray-400">CTAs</Text>
                        </Card>

                        <Card className="text-center">
                            <Text className="text-xl font-bold">{user.stats.attendance}</Text>
                            <Text className="text-xs text-gray-400">Asistencia</Text>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
