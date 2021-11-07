import React, {useContext} from "react";
import avatar from "../../../content/images/avatar.jpg";
import wl from "../../../content/images/wl.jpg";
import {appContext} from "../../../utils/context";
import "./Avatar.scss";

function Avatar() {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <div className="avatar">
            <img className="avatar__photo" src={avatar} onLoad={imgLoadHandler}/>
            <img className="avatar__logo" src={wl} onLoad={imgLoadHandler}/>
        </div>
    );
}

export default Avatar;