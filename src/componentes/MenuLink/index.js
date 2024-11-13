import styles from './MenuLink.module.css'
import { NavLink } from "react-router-dom";

export default function MenuLink( { children, to } ) {
    return (
        <NavLink
         className={ ( { isActive } ) => {
            return [
                isActive ? styles.linkDestacado : "",
                styles.link
            ].join(" ")
        }
         } to={to}
        >
            {children}
        </NavLink>
    )
}