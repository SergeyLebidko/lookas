import React from "react";
import PropTypes from "prop-types";
import "./DealLabel.scss";

function DealLabel({title, text}) {
    return (
        <div className="deal_label">
            <div className="deal_label__title_block">
                <span className="deal_label__title">
                    {title}
                </span>
            </div>
            <div className="deal_label__text_block">
                {text}
            </div>
        </div>
    );
}

DealLabel.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default DealLabel;