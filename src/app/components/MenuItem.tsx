import { NavLink } from 'react-router-dom';

interface Props {
    text: string,
    path: string
}

export const MenuItem = ({text, path}: Props) => {
    return (
        <li className="cursor-pointer">
            <NavLink to={path} className={({isActive}) => isActive ? "transition-all font-semibold ml-2 text-(--color-primary)" : "text-(--color-text-body) font-semibold hover:ml-2 transition-all"}>
                {text}
            </NavLink>
        </li>
    )
}