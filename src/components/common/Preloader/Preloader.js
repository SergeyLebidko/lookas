import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Preloader.scss";

const RISE_MODE = 'rise';
const JUMP_MODE = 'jump';
const REMOVE_MODE = 'remove';

function Preloader({hasAllLoad, hidePreloader}) {
    const [animation, setAnimation] = useState(RISE_MODE);
    const jumpCount = useRef(0);

    const pulsarClasses = classNames(
        'preloader__pulsar',
        {
            'preloader__rised_pulsar': animation === RISE_MODE,
            'preloader__jumped_pulsar': animation === JUMP_MODE,
            'preloader__remove_pulsar': animation === REMOVE_MODE
        }
    );

    const animationEndHandler = () => {
        if (animation === RISE_MODE) {
            setAnimation(JUMP_MODE);
            return;
        }
        if (animation === REMOVE_MODE) hidePreloader();
    }

    const animationIterationHandler = () => {
        if (hasAllLoad && jumpCount.current > 3) {
            setAnimation(REMOVE_MODE);
            return;
        }
        jumpCount.current++;
    }

    return (
        <div className="preloader">
            <div
                className={pulsarClasses}
                onAnimationIteration={animationIterationHandler}
                onAnimationEnd={animationEndHandler}
            />
        </div>
    );
}

Preloader.propTypes = {
    hasAllLoad: PropTypes.bool,
    hidePreloader: PropTypes.func
}

export default Preloader;
