import React, {useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Place from "../pages/Place/Place";
import Materials from "../pages/Materials/Materials";
import Projects from "../pages/Projects/Projects";
import Final from "../pages/Final/Final";
import Separator from "../common/Separator/Separator";
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
                    <Separator title="1"/>
                    <About/>
                    <Separator title="2"/>
                    <Place/>
                    <Separator title="3"/>
                    <Materials/>
                    <Separator title="4"/>
                    <Projects/>
                    <Separator title="5"/>
                    <Final/>
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
