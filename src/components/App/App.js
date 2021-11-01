import React, {useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import {appContext} from "../../utils/context";
import {IMG_COUNT} from "../../constants/settings";
import "./App.scss";

function App() {
    const [hasPreloader, setHasPreloader] = useState(true);
    const [imgLoadCount, setImgLoadCount] = useState(0);

    const imgLoadHandler = () => setImgLoadCount(oldValue => oldValue + 1);
    const hidePreloader = () => setHasPreloader(false);

    return (
        <div className="app">
            <appContext.Provider value={{hasPreloader}}>
                <Main imgLoadHandler={imgLoadHandler}/>
            </appContext.Provider>
            {hasPreloader && <Preloader hasAllLoad={IMG_COUNT === imgLoadCount} hidePreloader={hidePreloader}/>}
        </div>
    );
}

export default App;
