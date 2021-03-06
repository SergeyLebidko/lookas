import React, {useContext} from "react";
import {ReactComponent as Arrow} from "../../../content/icons/arrow.svg";
import DealMenu from "../../common/DealMenu/DealMenu";
import {appContext} from "../../../utils/context";
import {IMG_SOURCES} from "../../../constants/settings";
import "./Main.scss";

function Main() {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <section className="main">
            <img src={IMG_SOURCES['back']} className="main__back" onLoad={imgLoadHandler}/>
            <h1 className="main__title">Tanya Lookas</h1>
            <Arrow className="main__arrow"/>
            <DealMenu/>
        </section>
    );
}

export default Main;