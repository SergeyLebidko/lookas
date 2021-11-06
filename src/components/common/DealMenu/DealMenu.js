import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import DealCard from "../DealCard/DealCard";
import {MENU_DATA} from "../../../constants/settings";
import {appContext} from "../../../utils/context";
import "./DealMenu.scss";

function DealMenu() {
    const [selected, setSelected] = useState(null);
    const {line} = useContext(appContext);

    useEffect(() => {
        if (line > 200) setSelected(null);
    }, [line]);

    const getItemClasses = id => classNames('deal_menu__item', {'deal_menu_selected_item': id === selected});

    const selectHandler = id => {
        if (id === selected) {
            setSelected(null);
            return;
        }
        setSelected(id);
    }

    return (
        <>
            {MENU_DATA.map(
                ({id, title, text, imgSource}) =>
                    <DealCard
                        key={id}
                        title={title}
                        text={text}
                        imgSource={imgSource}
                        hasSelect={selected === id}
                    />
            )}
            <ul className="deal_menu">
                {MENU_DATA.map(
                    ({id, title}) =>
                        <li
                            key={id}
                            className={getItemClasses(id)}
                            onClick={() => selectHandler(id)}
                        >
                            {title}
                        </li>
                )}
            </ul>
        </>
    );
}

export default DealMenu;