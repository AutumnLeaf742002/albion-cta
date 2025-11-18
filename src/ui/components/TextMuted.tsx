interface Props {
    children: React.ReactNode,
    className?: string
}

export const TextMuted = ({ children, className }: Props) => {
    return (
        <h1 className={`text-sm text-(--color-text-muted) ${className}`}>
            {children}
        </h1>
    )
}