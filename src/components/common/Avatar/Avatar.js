import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import avatar from "../../../content/images/avatar.jpg";
import wl from "../../../content/images/wl.jpg";
import {appContext} from "../../../utils/context";
import "./Avatar.scss";
import {H_DIRECTION, V_DIRECTION} from "../../../constants/settings";

function Avatar() {
    const [hasVisible, setHasVisible] = useState(false);
    const {line, direction, imgLoadHandler} = useContext(appContext);

    useEffect(() => {
        if (line > 400) setHasVisible(true);
    }, [line]);

    const avatarClasses = classNames('avatar__photo', {'avatar__photo_rised': hasVisible});
    const logoClasses = classNames('avatar__logo', {'avatar__logo_rised': hasVisible});

    const getLogoInline = () => {
        if (direction === V_DIRECTION) return {top: '100%', right: '50%'};
        if (direction === H_DIRECTION) return {top: '50%', right: '0'};
    }

    return (
        <div className="avatar">
            <img className={avatarClasses} src={avatar} onLoad={imgLoadHandler}/>
            <img className={logoClasses} style={getLogoInline()} src={wl} onLoad={imgLoadHandler}/>
        </div>
    );
}

export default Avatar;