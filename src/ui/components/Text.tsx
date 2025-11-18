interface Props {
    children: React.ReactNode,
    className?: string
}

export const Text = ({ children, className }: Props) => {
    return (
        <h1 className={`text-base text-(--color-text-body) ${className}`}>
            {children}
        </h1>
    )
}