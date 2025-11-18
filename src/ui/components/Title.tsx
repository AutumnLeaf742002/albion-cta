interface Props {
    children: React.ReactNode,
    className?: string
}

export const Title = ({ children, className }: Props) => {

    return (
        <h1 className={`text-(--color-text-title) ${className}`}>
            {children}
        </h1>
    )
}