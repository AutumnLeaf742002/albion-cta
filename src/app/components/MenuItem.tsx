import { NavLink } from 'react-router-dom';

interface Props {
    text: string,
    path: string
}

export const MenuItem = ({ text, path }: Props) => {

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `transition-all font-semibold ${isActive
                    ? "text-(--color-primary) translate-x-2"
                    : "text-(--color-text-body) hover:text-(--color-primary-hover)"
                }`
            }
        >
            <li className="cursor-pointer">
                {text}
            </li>
        </NavLink>
    )
}