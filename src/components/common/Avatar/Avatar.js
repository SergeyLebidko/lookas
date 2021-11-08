import React, {useContext, useRef, useState} from "react";
import classNames from "classnames";
import {appContext} from "../../../utils/context";
import {H_DIRECTION, V_DIRECTION, IMG_SOURCES} from "../../../constants/settings";
import {getDistancePercent} from "../../../utils/utils";
import {useVisibleControl} from "../../../utils/hooks";
import "./Avatar.scss";

const HALF_INTERVAL = 5;

function Avatar() {
    const [hasPhotoVisible, setHasPhotoVisible] = useState(false);
    const [hasLogoVisible, setHasLogoVisible] = useState(false);

    const {line, direction, imgLoadHandler} = useContext(appContext);

    const avatarRef = useRef(null);
    const logoRef = useRef(null);

    useVisibleControl(avatarRef, line, direction, 1 / 4, setHasPhotoVisible, hasPhotoVisible);
    useVisibleControl(logoRef, line, direction, 3 / 4, setHasLogoVisible, hasLogoVisible);

    const avatarClasses = classNames('avatar__photo', {'avatar__photo_rised': hasPhotoVisible});
    const logoClasses = classNames('avatar__logo', {'avatar__logo_rised': hasLogoVisible});

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
            <img
                className={avatarClasses}
                src={IMG_SOURCES['avatar']}
                ref={avatarRef}
                onLoad={imgLoadHandler}
            />
            <img
                className={logoClasses}
                style={getLogoInline()}
                src={IMG_SOURCES['wl']}
                ref={logoRef}
                onLoad={imgLoadHandler}
            />
        </div>
    );
}

export default Avatar;