import React from "react";
import MenuContext from "./menuContext";

const MenuContextProvider = ({ children }) => {

    let dishes = JSON.parse(localStorage.getItem("Menu"));
    let [menu, setMenu ] = React.useState(dishes);
    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContextProvider;
