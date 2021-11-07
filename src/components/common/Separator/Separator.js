import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Separator.scss";

export const FULL_LINE = 'full_line';
export const SHORT_LINE = 'large_line';

function Separator({title, lineType}) {
    const lineClasses = classNames(
        'separator__line',
        {
            'separator__line_full_line': lineType === FULL_LINE,
            'separator__line_short_line': lineType === SHORT_LINE
        }
    );

    return (
        <div className="separator">
            <div className={lineClasses}/>
            <span className="separator__title">{title}</span>
        </div>
    );
}

Separator.propTypes = {
    title: PropTypes.string,
    lineType: PropTypes.string
}

export default Separator;