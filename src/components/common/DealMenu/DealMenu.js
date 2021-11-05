import React from "react";
import "./DealMenu.scss";

function DealMenu() {
    return (
        <ul className="deal_menu">
            <li className="deal_menu__item">
                Дизайн
            </li>
            <li className="deal_menu__item">
                Декор
            </li>
            <li className="deal_menu__item">
                Реставрация
            </li>
        </ul>
    );
}

export default DealMenu;