interface Props {
    objetive: string,
    notes: string
}

export const CtaDescription = ({ objetive, notes }: Props) => {

    return (
        <div className="bg-(--color-surface) p-5 rounded-xl border border-(--color-border)">
            <h2 className="text-lg font-semibold text-(--color-text-title)">Objetivo</h2>
            <p className="mt-2">{objetive}</p>

            {notes && (
                <>
                    <h3 className="text-lg font-semibold text-(--color-text-title) mt-4">Notas</h3>
                    <p className="mt-1 text-(--color-text-body)">{notes}</p>
                </>
            )}
        </div>
    );
};
