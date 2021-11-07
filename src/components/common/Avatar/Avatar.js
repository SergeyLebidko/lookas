import React, {useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import avatar from "../../../content/images/avatar.jpg";
import wl from "../../../content/images/wl.jpg";
import {appContext} from "../../../utils/context";
import {H_DIRECTION, V_DIRECTION} from "../../../constants/settings";
import {getDistancePercent} from "../../../utils/utils";
import "./Avatar.scss";

const HALF_INTERVAL = 7;

function Avatar() {
    const [hasVisible, setHasVisible] = useState(false);
    const {line, direction, imgLoadHandler} = useContext(appContext);
    const logoRef = useRef(null);

    useEffect(() => {
        if (line > 400) setHasVisible(true);
    }, [line]);

    const avatarClasses = classNames('avatar__photo', {'avatar__photo_rised': hasVisible});
    const logoClasses = classNames('avatar__logo', {'avatar__logo_rised': hasVisible});

    const getLogoInline = () => {
        const percent = getDistancePercent(logoRef, direction);
        if (percent === null) return {};

        let pos;

        if (direction === V_DIRECTION) {
            pos = 100 - HALF_INTERVAL * percent;
            if (pos < (100 - HALF_INTERVAL)) pos = 100 - HALF_INTERVAL;
            if (pos > (100 + HALF_INTERVAL)) pos = 100 + HALF_INTERVAL;
            return {top: `${pos}%`, right: '50%'};
        }
        if (direction === H_DIRECTION) {
            pos = HALF_INTERVAL * percent;
            if (pos < (-HALF_INTERVAL)) pos = -HALF_INTERVAL;
            if (pos > HALF_INTERVAL) pos = HALF_INTERVAL;
            return {top: `50%`, right: `${pos}%`};
        }
    }

    return (
        <div className="avatar">
            <img className={avatarClasses} src={avatar} onLoad={imgLoadHandler}/>
            <img className={logoClasses} style={getLogoInline()} src={wl} ref={logoRef} onLoad={imgLoadHandler}/>
        </div>
    );
}

export default Avatar;