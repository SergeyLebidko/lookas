import React, {useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DealLabel from "../DealLabel/DealLabel";
import {appContext} from "../../../utils/context";
import "./DealCard.scss";

function DealCard({title, text, imgSource, hasSelect}) {
    const {imgLoadHandler} = useContext(appContext);

    const cardClasses = classNames('deal_card', {'deal_card_visible': hasSelect});

    return (
        <div className={cardClasses}>
            <img className="deal_card__background" src={imgSource} onLoad={imgLoadHandler}/>
            <DealLabel title={title} text={text}/>
        </div>
    );
}

DealCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imgSource: PropTypes.string,
    hasSelect: PropTypes.bool
}

export default DealCard;