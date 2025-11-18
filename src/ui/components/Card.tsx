interface Props {
    children: React.ReactNode,
    className?: string
}

export const Card = ({ children, className }: Props) => {
    return (
        <div className={`bg-(--color-surface) p-5 rounded-md flex flex-col ${className}`}>
            {children}
        </div>
    )
}