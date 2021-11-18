import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {PRELOADER_CAPTION} from "../../../constants/settings";
import "./Preloader.scss";

const PULSAR_RISE_MODE = 'pulsar_rise';
const PULSAR_JUMP_MODE = 'pulsar_jump';
const PULSAR_REMOVE_MODE = 'pulsar_remove';

const CAP_RISE_MODE = 'cap_rise';
const CAP_REMOVE_MODE = 'cap_remove';

const CAP_COUNT = PRELOADER_CAPTION.length;
const JUMP_MIN_LIMIT = 3;

function Preloader({mountContent, hasAllLoad, hidePreloader}) {
    const [mode, setMode] = useState(CAP_RISE_MODE);

    const capAnimationCount = useRef(0);
    const pulsarJumpCount = useRef(0);

    const getCapClasses = index => classNames(
        'preloader__cap_element',
        {
            'preloader__raised_up_cap_element': (mode === CAP_RISE_MODE) && (index % 2 === 0),
            'preloader__removed_down_cap_element': (mode === CAP_REMOVE_MODE) && (index % 2 ===0),
            'preloader__raised_down_cap_element': (mode === CAP_RISE_MODE) && (index % 2 === 1),
            'preloader__removed_up_cap_element': (mode === CAP_REMOVE_MODE) && (index % 2 ===1)
        }
    );

    const pulsarClasses = classNames(
        'preloader__pulsar',
        {
            'preloader__rised_pulsar': mode === PULSAR_RISE_MODE,
            'preloader__jumped_pulsar': mode === PULSAR_JUMP_MODE,
            'preloader__removed_pulsar': mode === PULSAR_REMOVE_MODE
        }
    );

    const getCapInline = index => ({
        left: `${index * (100 / CAP_COUNT)}%`,
        width: `calc(${100 / CAP_COUNT}% + 1px)`,
        animationDelay: `${200 * (index + 3)}ms`,
        fontSize: `${Math.floor(100 / CAP_COUNT)}vw`
    });

    const hasPulsar = () => mode === PULSAR_RISE_MODE || mode === PULSAR_JUMP_MODE || mode === PULSAR_REMOVE_MODE;

    const modeSwitcher = () => {
        if (mode === CAP_RISE_MODE) {
            capAnimationCount.current += 1;
            if (capAnimationCount.current === CAP_COUNT) {
                setMode(PULSAR_RISE_MODE);
                mountContent();
                return;
            }
        }

        if (mode === PULSAR_RISE_MODE) {
            setMode(PULSAR_JUMP_MODE);
            return;
        }

        if (mode === PULSAR_JUMP_MODE) {
            pulsarJumpCount.current += 1;
            if (pulsarJumpCount.current >= JUMP_MIN_LIMIT && hasAllLoad) setMode(PULSAR_REMOVE_MODE);
            return;
        }

        if (mode === PULSAR_REMOVE_MODE) {
            setMode(CAP_REMOVE_MODE);
            return;
        }

        if (mode === CAP_REMOVE_MODE) {
            capAnimationCount.current += 1;
            if (capAnimationCount.current === (CAP_COUNT * 2)) hidePreloader();
        }
    }

    return (
        <div className="preloader">
            {Array(CAP_COUNT).fill(true).map(
                (_, index) =>
                    <div
                        key={index}
                        className={getCapClasses(index)}
                        style={getCapInline(index)}
                        onAnimationEnd={modeSwitcher}
                    >
                        {PRELOADER_CAPTION[index]}
                    </div>
            )}
            {hasPulsar() &&
            <div
                className={pulsarClasses}
                onAnimationIteration={modeSwitcher}
                onAnimationEnd={modeSwitcher}
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
