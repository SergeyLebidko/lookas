import React, {useEffect, useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import {appContext} from "../../utils/context";
import {IMG_COUNT} from "../../constants/settings";
import "./App.scss";

function App() {
    const appRef = useRef(null);

    const [hasPreloader, setHasPreloader] = useState(true);
    const [imgLoadCount, setImgLoadCount] = useState(0);

    const imgLoadHandler = () => setImgLoadCount(oldValue => oldValue + 1);
    const hidePreloader = () => setHasPreloader(false);

    // TODO. Тестовый код имитирующий загрузку изображений. В дальнейшем должен быть удален
    useEffect(() => {
        for (let i = 0; i < IMG_COUNT; i++) setTimeout(() => imgLoadHandler(), i * 200);
    }, []);

    return (
        <div className="app" ref={appRef}>
            <appContext.Provider value={{hasPreloader}}>
                <Main/>
                <About/>
            </appContext.Provider>
            {hasPreloader && <Preloader hasAllLoad={IMG_COUNT === imgLoadCount} hidePreloader={hidePreloader}/>}
        </div>
    );
}

export default App;
