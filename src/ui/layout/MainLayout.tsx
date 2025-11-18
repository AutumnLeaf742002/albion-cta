interface Props {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <main className="bg-(--color-background) w-screen min-h-screen overflow-hidden">
            {children}
        </main>
    )
}