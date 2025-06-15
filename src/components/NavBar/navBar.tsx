import type React from "react"
import { NavLink } from "react-router-dom"

const routes: Array<{ name: string, path: string }> = [
    { name: 'Home', path: '/' },
    { name: 'List', path: '/' },
]

export const NavBar: React.FC = () => {
    return (
        <div className="w-full bg-slate-900 text-slate-400">
            {routes.map((route) => <NavLink to={route.path} className={'nav-link'}>
                <span className="nav-text">{route.name}</span>
            </NavLink>)}
        </div>
    )
}
