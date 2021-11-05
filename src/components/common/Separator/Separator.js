import React from "react";
import PropTypes from "prop-types";
import "./Separator.scss";

function Separator({title}) {
    return (
        <div className="separator">
            <div className="separator__line"/>
            <span className="separator__title">{title}</span>
        </div>
    );
}

Separator.propTypes = {
    title: PropTypes.string
}

export default Separator;