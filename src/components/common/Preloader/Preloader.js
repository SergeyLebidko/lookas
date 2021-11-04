import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Preloader.scss";

const PULSAR_RISE_MODE = 'pulsar_rise';
const PULSAR_JUMP_MODE = 'pulsar_jump';
const PULSAR_REMOVE_MODE = 'pulsar_remove';

const CAP_RISE_MODE = 'cap_rise';
const CAP_REMOVE_MODE = 'cap_remove';

const CAP_COUNT = 10;
const JUMP_MIN_LIMIT = 3;

function Preloader({mountContent, hasAllLoad, hidePreloader}) {
    const [capAnimation, setCapAnimation] = useState(CAP_RISE_MODE);
    const capAnimationCount = useRef(0);

    const [pulsarAnimation, setPulsarAnimation] = useState(PULSAR_RISE_MODE);
    const pulsarJumpCount = useRef(0);

    const pulsarClasses = classNames(
        'preloader__pulsar',
        {
            'preloader__rised_pulsar': pulsarAnimation === PULSAR_RISE_MODE,
            'preloader__jumped_pulsar': pulsarAnimation === PULSAR_JUMP_MODE,
            'preloader__removed_pulsar': pulsarAnimation === PULSAR_REMOVE_MODE
        }
    );

    const pulsarAnimationEndHandler = () => {
        if (pulsarAnimation === PULSAR_RISE_MODE) {
            setPulsarAnimation(PULSAR_JUMP_MODE);
            return;
        }
        if (pulsarAnimation === PULSAR_REMOVE_MODE) {
            setCapAnimation(CAP_REMOVE_MODE);
        }
    }

    const pulsarAnimationIterationHandler = () => {
        if (hasAllLoad && pulsarJumpCount.current > JUMP_MIN_LIMIT) {
            setPulsarAnimation(PULSAR_REMOVE_MODE);
            return;
        }
        pulsarJumpCount.current++;
    }

    const capAnimationEndHandler = () => {
        capAnimationCount.current += 1;
        if (capAnimationCount.current === CAP_COUNT) mountContent();
        if (capAnimationCount.current === (CAP_COUNT * 2)) hidePreloader();
    }

    const getCapInline = index => ({
        left: `${index * (100 / CAP_COUNT)}%`,
        width: `${100 / CAP_COUNT}%`,
        animationDelay: `${200 * (index + 3)}ms`
    });

    const capClasses = classNames(
        'preloader__cap_element',
        {
            'preloader__raised_cap_element': capAnimation === CAP_RISE_MODE,
            'preloader__removed_cap_element': capAnimation === CAP_REMOVE_MODE
        }
    );

    return (
        <div className="preloader">
            {Array(CAP_COUNT).fill(true).map(
                (_, index) =>
                    <div
                        key={index}
                        className={capClasses}
                        style={getCapInline(index)}
                        onAnimationEnd={capAnimationEndHandler}
                    />
            )}
            {capAnimationCount.current >= CAP_COUNT &&
            <div
                className={pulsarClasses}
                onAnimationIteration={pulsarAnimationIterationHandler}
                onAnimationEnd={pulsarAnimationEndHandler}
            />
            }
        </div>
    );
}

Preloader.propTypes = {
    mountContent: PropTypes.func,
    hasAllLoad: PropTypes.bool,
    hidePreloader: PropTypes.func
}

export default Preloader;
