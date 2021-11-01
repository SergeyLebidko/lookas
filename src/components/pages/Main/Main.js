import React, {useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import mainImg from "../../../content/main.jpg";
import {appContext} from "../../../utils/context";
import "./Main.scss";

function Main({imgLoadHandler}) {
    const {hasPreloader} = useContext(appContext);

    const coverClasses = classNames('main__cover', {'main__cover_rise': !hasPreloader});

    return (
        <main className="main">
            <img className={coverClasses} src={mainImg} onLoad={imgLoadHandler}/>
        </main>
    );
}

Main.propTypes = {
    imgLoadHandler: PropTypes.func
}

export default Main;