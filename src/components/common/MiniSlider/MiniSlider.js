import React, {useContext, useEffect, useRef, useState} from "react";
import {IMG_SOURCES} from "../../../constants/settings";
import {appContext} from "../../../utils/context";
import "./MiniSlider.scss";

const SLIDE_COUNT = 6;

function MiniSlider() {
    const [slide, setSlide] = useState(0);
    const {imgLoadHandler} = useContext(appContext);

    const timer = useRef(null);

    const getNextSlide = slide => slide === (SLIDE_COUNT - 1) ? 0 : slide + 1;
    const toNext = () => setSlide(currentSlide => getNextSlide(currentSlide));

    useEffect(() => {
        timer.current = setInterval(toNext, 5000);
        return () => clearInterval(timer.current);
    }, []);

    const clickHandler = () => {
        clearInterval(timer.current);
        toNext();
        timer.current = setInterval(toNext, 5000);
    }

    return (
        <div className="mini_slider" onClick={clickHandler}>
            {Array(SLIDE_COUNT).fill(1).map(
                (_, index) =>
                    <img
                        key={index}
                        className={`mini_slider__slide ${index === slide ? 'mini_slider__visible_slide' : 'mini_slider__hide_slide'}`}
                        src={IMG_SOURCES[`mini_slide${index}`]}
                        onLoad={imgLoadHandler}
                    />
            )}
            <div className="mini_slider__counter">{slide + 1} &mdash; {SLIDE_COUNT}</div>
        </div>
    );
}

export default MiniSlider;