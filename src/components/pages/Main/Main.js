import React, {useContext} from "react";
import back from "../../../content/images/main_back.jpg";
import DealMenu from "../../common/DealMenu/DealMenu";
import {appContext} from "../../../utils/context";
import "./Main.scss";

function Main() {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <section className="main">
            <img src={back} className="main__back" onLoad={imgLoadHandler}/>
            <h1 className="main__title">Tanya Lookas</h1>
            <DealMenu/>
        </section>
    );
}

export default Main;