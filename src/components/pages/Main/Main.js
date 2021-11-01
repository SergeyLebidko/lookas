import React, {useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import mainImg from "../../../content/main.jpg";
import {appContext} from "../../../utils/context";
import "./Main.scss";

function Main({imgLoadHandler}) {
    const {hasPreloader} = useContext(appContext);

    const coverClasses = classNames('main__cover', {'main__cover_rise': !hasPreloader});
    const titleClasses = classNames('main__title', {'main__title_rise': !hasPreloader});
    const descriptionClasses = classNames('main__description', {'main__description_rise': !hasPreloader});

    return (
        <main className="main">
            <img className={coverClasses} src={mainImg} onLoad={imgLoadHandler}/>
            <h1 className={titleClasses}>Tanya Lookas</h1>
            <h3 className={descriptionClasses}>design & decor</h3>
        </main>
    );
}

Main.propTypes = {
    imgLoadHandler: PropTypes.func
}

export default Main;