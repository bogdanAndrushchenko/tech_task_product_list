import React from "react";
import Navigation from "./Navigation";

import s from "./AppNavBar.module.scss";
import AddProductForm from "./AddProductForm";

const AppNavBar = () => {
    return (
        <header className={s.Header}>
            <Navigation/>
            <AddProductForm/>
        </header>
    );
};

export default AppNavBar;
