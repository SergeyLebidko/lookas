import React, {useEffect, useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Materials from "../pages/Materials/Materials";
import Command from "../pages/Command/Command";
import Learn from "../pages/Learn/Learn";
import Contacts from "../pages/Contacts/Contacts";
import {appContext} from "../../utils/context";
import {IMG_COUNT} from "../../constants/settings";
import "./App.scss";
import {useScrollControl} from "../../utils/hooks";
import Separator from "../common/Separator/Separator";

function App() {
    const appRef = useRef(null);

    const [hasContent, setHasContent] = useState(false);
    const [hasPreloader, setHasPreloader] = useState(true);

    const [imgLoadCount, setImgLoadCount] = useState(0);

    const mountContent = () => setHasContent(true);
    const imgLoadHandler = () => setImgLoadCount(oldValue => oldValue + 1);
    const hidePreloader = () => setHasPreloader(false);

    // TODO. Тестовый код имитирующий загрузку изображений. В дальнейшем должен быть удален
    useEffect(() => {
        for (let i = 0; i < IMG_COUNT; i++) setTimeout(() => imgLoadHandler(), i * 200);
    }, []);

    const {line, direction} = useScrollControl(appRef, !hasPreloader);

    return (
        <div className="app" ref={appRef} style={hasPreloader ? {overflow: 'hidden'} : {}}>
            <appContext.Provider value={{hasPreloader, line, direction}}>
                {hasContent &&
                <>
                    <Main/>
                    <Separator title="1"/>
                    <About/>
                    <Separator title="2"/>
                    <Materials/>
                    <Separator title="3"/>
                    <Command/>
                    <Separator title="4"/>
                    <Learn/>
                    <Separator title="5"/>
                    <Contacts/>
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
