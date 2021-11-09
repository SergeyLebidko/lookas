import React, {useContext} from "react";
import {IMG_SOURCES} from "../../../constants/settings";
import {appContext} from "../../../utils/context";
import "./MiniSlider.scss";

function MiniSlider() {
    const {imgLoadHandler} = useContext(appContext);

    return (
        <div className="mini_slider">
            {Array(6).fill(1).map(
                (_, index) =>
                    <img
                        key={index}
                        src={IMG_SOURCES[`mini_slide${index + 1}`]}
                        onLoad={imgLoadHandler}
                    />
            )}
        </div>
    );
}

export default MiniSlider;