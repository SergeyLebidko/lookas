import React, {useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import {appContext} from "../../utils/context";
import {IMG_COUNT} from "../../constants/settings";
import "./App.scss";
import {useCursorPosition, useLineControl} from "../../utils/hooks";

function App() {
    const appRef = useRef(null);

    const [hasPreloader, setHasPreloader] = useState(true);
    const [imgLoadCount, setImgLoadCount] = useState(0);

    const imgLoadHandler = () => setImgLoadCount(oldValue => oldValue + 1);
    const hidePreloader = () => setHasPreloader(false);

    // TODO Тестовый вывод. В дальнейшем удалить
    const {x, y} = useCursorPosition(appRef);
    const line = useLineControl(appRef);
    console.log(`x=${x} y=${y} line=${line}`);

    return (
        <div className="app" ref={appRef}>
            <appContext.Provider value={{hasPreloader}}>
                <Main imgLoadHandler={imgLoadHandler}/>
            </appContext.Provider>
            {hasPreloader && <Preloader hasAllLoad={IMG_COUNT === imgLoadCount} hidePreloader={hidePreloader}/>}
        </div>
    );
}

export default App;
