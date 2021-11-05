import React, {useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {appContext} from "../../../utils/context";
import "./DealCard.scss";

function DealCard({imgSource, hasSelect}) {
    const {imgLoadHandler} = useContext(appContext);

    const cardClasses = classNames('deal_card', {'deal_card_visible': hasSelect});

    return (
        <div className={cardClasses}>
            <img src={imgSource} onLoad={imgLoadHandler}/>
        </div>
    );
}

DealCard.propTypes = {
    imgSource: PropTypes.string,
    hasSelect: PropTypes.bool
}

export default DealCard;