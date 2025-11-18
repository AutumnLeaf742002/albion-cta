import { LogoText } from '../../ui/components';
interface Props {
    expand: boolean
}

export const Menu = ({expand = true}: Props) => {

    const styleExpanded = expand ? "w-60 md:w-84" : "w-0"

    return (
        <aside className="flex absolute md:relative h-full">
            <menu className={`bg-(--color-surface) flex-1 border-r border-(--color-border) overflow-hidden transition-all ${styleExpanded}`}>

                <header className='flex items-center justify-center border-b border-(--color-border) h-12 md:h-14'>
                    <LogoText />
                </header>

            </menu>
        </aside>
    )
}