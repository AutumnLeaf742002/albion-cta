import { useNavigate } from "react-router-dom"

import type { GuildMember } from "../interfaces"

import { Hr } from '../../ui/components';

interface Props {
    members: GuildMember[]
}

export const MemberList = ({ members }: Props) => {

    const navigate = useNavigate()

    const onMemberClick = (uid: string) => {

        navigate(`/app/guild/member/${uid}`)
    }

    return (
        <div>

            <h2 className="text-base font-semibold text-(--color-text-title)">Jugadores del gremio</h2>

            <Hr className="my-4" />

            <div className="flex flex-col gap-2">
                {
                    members.map(member => (
                        <div
                            onClick={() => onMemberClick(member.uid)}
                            key={member.uid}
                            className="bg-(--color-surface-alt) border border-(--color-border) rounded-xl p-3 flex justify-between items-center hover:border-(--color-primary) cursor-pointer transition"
                        >
                            <div className="flex flex-col">
                                <span className="text-(--color-text-title) font-semibold">
                                    {member.name}
                                </span>

                                <span className="text-(--color-text-muted) text-sm">
                                    {member.guildRole}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
