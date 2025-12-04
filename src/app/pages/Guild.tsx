import type { Guild as GuildInterface, GuildMember, GuildStat } from "../interfaces"

import { AppLayout } from "../layout/AppLayout"
import { Card, Title } from "../../ui/components"
import { Hr } from '../../ui/components/Hr';
import { StatCard } from "../components";
import { MemberList } from '../components/MembersList';

interface GuildView extends GuildInterface {
    members: number,
    joinedAt: string,
    guildRole: string
}

const guild: GuildView = {
    uid: "213",
    name: "Los Reales Furros",
    members: 42,
    creator: "AutumnLeaf",
    guildRole: "Pocho",
    joinedAt: "2024-10-12",
}

const guildStats: GuildStat[] = [
    {
        label: "CTAs",
        number: 12
    },
    {
        label: "Miembros",
        number: 42
    },
    {
        label: "Oficiales",
        number: 4
    },
    {
        label: "Builders",
        number: 3
    },
    {
        label: "Proximas CTAs",
        number: 2
    },
]

const guildMembers: GuildMember[] = [
    { uid: "1", name: "AutumnLeaf", guildRole: "Pocho", joinedAt: "2024-10-12" },
    { uid: "2", name: "DarkLord", guildRole: "Oficial", joinedAt: "2023-08-03" },
    { uid: "3", name: "HealerPro", guildRole: "Builder", joinedAt: "2025-01-20" },
]

export const Guild = () => {

    return (
        <AppLayout>
            <section className="p-4 flex flex-col gap-6">

                <Card className="">

                    <Title className="text-2xl font-semibold text-(--color-text-title)">
                        {guild.name}
                    </Title>

                    <Hr className="my-4" />

                    <h2 className="text-base font-semibold text-(--color-text-title)">Información del gremio</h2>

                    <div className="mt-3 grid grid-cols-1 gap-2 text-(--color-text-body)">
                        <p><span className="text-(--color-text-muted)">Jugadores -</span> {guild.members}</p>
                        <p><span className="text-(--color-text-muted)">Fundador -</span> {guild.creator}</p>
                        <p><span className="text-(--color-text-muted)">Ingresaste el -</span> {guild.joinedAt}</p>
                        <p><span className="text-(--color-text-muted)">Rol en gremio -</span> {guild.guildRole}</p>
                    </div>
                </Card>

                <Card>
                    <h2 className="text-base text-center md:text-left font-semibold text-(--color-text-title)">Resumen del gremio</h2>

                    <Hr className="my-4" />

                    <div className="mt-3 flex justify-center md:justify-around flex-wrap gap-2 text-(--color-text-body)">
                        {
                            guildStats.map(stat => (
                                <StatCard key={stat.label} label={stat.label} value={stat.number} />
                            ))
                        }
                    </div>
                </Card>

                <Card>
                    <MemberList members={guildMembers} />
                </Card>

            </section>
        </AppLayout>
    )
}