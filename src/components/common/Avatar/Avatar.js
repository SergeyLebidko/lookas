import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import avatar from "../../../content/images/avatar.jpg";
import wl from "../../../content/images/wl.jpg";
import {appContext} from "../../../utils/context";
import "./Avatar.scss";

function Avatar() {
    const [hasVisible, setHasVisible] = useState(false);
    const {line, imgLoadHandler} = useContext(appContext);

    useEffect(() => {
        if (line > 400) setHasVisible(true);
    }, [line]);

    const avatarClasses = classNames('avatar__photo', {'avatar__photo_rised': hasVisible});
    const logoClasses = classNames('avatar__logo', {'avatar__logo_rised': hasVisible});

    return (
        <div className="avatar">
            <img className={avatarClasses} src={avatar} onLoad={imgLoadHandler}/>
            <img className={logoClasses} src={wl} onLoad={imgLoadHandler}/>
        </div>
    );
}

export default Avatar;