import React, {useRef, useState} from "react";
import classNames from "classnames";
import "./Preloader.scss";

const RISE_MODE = 'rm';
const JUMP_MODE = 'jm';
const FULL_MODE = 'fm';

function Preloader() {
    const [animation, setAnimation] = useState(RISE_MODE);
    const jumpCount = useRef(0);

    const pulsarClasses = classNames(
        'preloader__pulsar',
        {
            'preloader__rised_pulsar': animation === RISE_MODE,
            'preloader__jumped_pulsar': animation === JUMP_MODE,
            'preloader__full_pulsar': animation === FULL_MODE
        }
    );

    const animationSwitcher = () => {
        if (animation === RISE_MODE) {
            setAnimation(JUMP_MODE);
            return;
        }
        if (animation === JUMP_MODE) jumpCount.current++;
        if (jumpCount.current === 5) setAnimation(FULL_MODE);
    }

    return (
        <div className="preloader">
            <div className={pulsarClasses} onAnimationIteration={animationSwitcher} onAnimationEnd={animationSwitcher}/>
        </div>
    );
}

export default Preloader;
