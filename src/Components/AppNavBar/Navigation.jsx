import React from "react";
import {NavLink} from "react-router-dom";
import s from "./AppNavBar.module.scss";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" exact className={s.link}
                     activeClassName={s.activeLink}>
                Home
            </NavLink>
            <NavLink to="/any_page" className={s.link}
                     activeClassName={s.activeLink} disabled>
                Any page
            </NavLink>
        </nav>
    );
};

export default Navigation;
