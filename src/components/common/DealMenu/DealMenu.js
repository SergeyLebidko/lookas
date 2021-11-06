import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import DealCard from "../DealCard/DealCard";
import design from "../../../content/images/design.jpg";
import decor from "../../../content/images/decor.jpg";
import restoration from "../../../content/images/restoration.jpg";
import {appContext} from "../../../utils/context";
import "./DealMenu.scss";

const MENU_DATA = [
    {
        id: 'des',
        title: 'Дизайн',
        text: 'Я занимаюсь дизайном помещений и фасадов, фотозон, банкетных и праздничных залов. ' +
            'Помогу подобрать правильный вид, расположение, цвет и форму всех элементов вашего помещения, выстроить узнаваемый ' +
            'единый стиль, который может стать визитной карточкой вашего бизнеса.',
        imgSource: design
    },
    {
        id: 'dec',
        title: 'Декор',
        text: 'В декоре, будь то декор отдельных элементов мебели или помещений в целом, я использую самые разные материалы: ' +
            'дерево, картон, пенопласт, полимерную глину, акриловые краски, цемент, металл и многие другие. ' +
            'Я всегда подхожу к делу творчески и сперва стараюсь разобраться в индивидуальных потребностях каждого клиента,' +
            'а потом уже предложить ему что-то действительно уникальное!',
        imgSource: decor
    },
    {
        id: 'res',
        title: 'Реставрация',
        text: 'Я занимаюсь реставрацией мебели самого различного плана: шкафы, комоды, столы, стулья, серванты и многое другое.' +
            'Помогу вдохнуть новую жизнь в ваши вещи и придать им совершенно новый самобытный вид так, что они с легкостью впишутся в ваш' +
            'интерьер и станут настоящим его украшением.',
        imgSource: restoration
    }
]

function DealMenu() {
    const [selected, setSelected] = useState(null);
    const {line} = useContext(appContext);

    useEffect(() => {
        if (line > 100) setSelected(null);
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