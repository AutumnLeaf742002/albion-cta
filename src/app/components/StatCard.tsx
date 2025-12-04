interface StatCardProps {
    label: string
    value: number
}

export const StatCard = ({ label, value }: StatCardProps) => {
    return (
        <div className="w-40 bg-(--color-surface) border border-(--color-border) rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
            <p className="text-4xl font-bold text-(--color-text-title)">{value}</p>
            <p className="text-sm text-(--color-text-muted) mt-1">{label}</p>
        </div>
    );
};
