import React from "react";
// import decor from "../../../content/images/decor.jpg";
// import design from "../../../content/images/design.jpg";
// import restoration from "../../../content/images/restoration.jpg";
import back from "../../../content/images/main_back.jpg";
import DealMenu from "../../common/DealMenu/DealMenu";
import "./Main.scss";

function Main() {
    return (
        <section className="main">
            <img src={back} className="main__back"/>
            <h1 className="main__title">Tanya Lookas</h1>
            <DealMenu/>
        </section>
    );
}

export default Main;