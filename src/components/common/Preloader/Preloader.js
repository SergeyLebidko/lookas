import React, {useRef, useState} from "react";
import classNames from "classnames";
import "./Preloader.scss";

const RISE_MODE = 'rise';
const JUMP_MODE = 'jump';
const REMOVE_MODE = 'remove';

function Preloader() {
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

    const animationSwitcher = () => {
        if (animation === RISE_MODE) {
            setAnimation(JUMP_MODE);
            return;
        }
        if (animation === JUMP_MODE) jumpCount.current++;
        if (jumpCount.current === 5) setAnimation(REMOVE_MODE);
    }

    return (
        <div className="preloader">
            <div className={pulsarClasses} onAnimationIteration={animationSwitcher} onAnimationEnd={animationSwitcher}/>
        </div>
    );
}

export default Preloader;
