import type { Cta } from "../interfaces";

interface Props {
    cta: Cta
}

export const CtaHeader = ({ cta }: Props) => {

    return (
        <div className="bg-(--color-surface) p-5 rounded-xl border border-(--color-border)">
            <h1 className="text-xl font-bold text-(--color-text-title)">
                {cta.name}
            </h1>

            <div className="mt-3 text-sm flex flex-col gap-1">
                <p className="flex gap-1">
                    <span className="text-(--color-text-muted)">
                        Creador:
                    </span>
                    {cta.creator}
                </p>
                <p className="flex gap-1">
                    <span className="text-(--color-text-muted)">
                        Fecha:
                    </span>
                    {cta.day}
                </p>
                <p className="flex gap-1">
                    <span className="text-(--color-text-muted)">
                        Horario:
                    </span>
                    {cta.start} — {cta.end}
                </p>
                <p className="flex gap-1">
                    <span className="text-(--color-text-muted)">
                        Gremio:
                    </span>
                    {cta.guild}
                </p>
            </div>
        </div>
    );
};
