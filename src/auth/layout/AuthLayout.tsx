import { Card, Title, LogoText } from '../../ui/components'

interface Props {
    children: React.ReactNode,
    title: string
}

export const AuthLayout = ({ children, title }: Props) => {
    return (
        <div className="w-full h-dvh flex justify-center items-center">
            <Card className="w-md sm:h-[90%] lg:h-auto relative h-dvh">

                <span className='absolute left-2'>
                    <LogoText className="text-[0.7rem] -rotate-45" />
                </span>

                <div className="flex flex-col gap-10 h-full">
                    <Title className="text-2xl font-bold text-center">
                        {title}
                    </Title>

                    <div className='h-full'>
                        {children}
                    </div>
                </div>
            </Card>
        </div>
    )
}