import React, {useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Materials from "../pages/Materials/Materials";
import Command from "../pages/Command/Command";
import Learn from "../pages/Learn/Learn";
import Separator, {SHORT_LINE} from "../common/Separator/Separator";
import {appContext} from "../../utils/context";
import {IMG_COUNT} from "../../constants/settings";
import {useScrollControl} from "../../utils/hooks";
import "./App.scss";

function App() {
    const appRef = useRef(null);

    const [hasContent, setHasContent] = useState(false);
    const [hasPreloader, setHasPreloader] = useState(true);

    const [imgLoadCount, setImgLoadCount] = useState(0);

    const mountContent = () => setHasContent(true);
    const imgLoadHandler = () => setImgLoadCount(oldValue => oldValue + 1);
    const hidePreloader = () => setHasPreloader(false);

    const {line, direction} = useScrollControl(appRef, !hasPreloader);

    return (
        <div className="app" ref={appRef} style={hasPreloader ? {overflow: 'hidden'} : {}}>
            <appContext.Provider value={{hasPreloader, line, direction, imgLoadHandler}}>
                {hasContent &&
                <>
                    <Main/>
                    <Separator title="01" lineType={SHORT_LINE}/>
                    <About/>
                    <Separator title="02" lineType={SHORT_LINE}/>
                    <Materials/>
                    <Separator title="03" lineType={SHORT_LINE}/>
                    <Command/>
                    <Separator title="04" lineType={SHORT_LINE}/>
                    <Learn/>
                </>
                }
            </appContext.Provider>
            {hasPreloader &&
            <Preloader
                mountContent={mountContent}
                hasAllLoad={IMG_COUNT === imgLoadCount}
                hidePreloader={hidePreloader}
            />
            }
        </div>
    );
}

export default App;
