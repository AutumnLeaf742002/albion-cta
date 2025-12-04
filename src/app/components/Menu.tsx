import { LogoText } from '../../ui/components';
import { MenuItem } from './MenuItem';

interface Props {
    expand: boolean | undefined
}

export const Menu = ({ expand = true }: Props) => {

    const styleExpanded = expand ? "w-40 md:w-54" : "w-0"

    return (
        <aside className="flex absolute md:relative h-full">
            <menu className={`bg-(--color-surface) flex-1 border-r border-(--color-border) overflow-hidden transition-all ${styleExpanded}`}>

                <header className='flex items-center justify-center border-b border-(--color-border) h-12 md:h-14'>
                    <LogoText />
                </header>

                <ul className='flex flex-col gap-2 p-4 text-nowrap'>
                    <MenuItem text="Resumen" path="/app/dashboard" />
                    <MenuItem text="Cta" path="/app/cta" />
                    <MenuItem text="Gremio" path="/app/guild" />
                    <MenuItem text="Buscar gremio" path="/app/search-guild" />
                    <MenuItem text="Builds" path="/app/builds" />
                    <MenuItem text="Perfil" path="/app/profile" />
                </ul>

            </menu>
        </aside>
    )
}