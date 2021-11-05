import React, {useEffect, useRef, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Materials from "../pages/Materials/Materials";
import Command from "../pages/Command/Command";
import Learn from "../pages/Learn/Learn";
import Contacts from "../pages/Contacts/Contacts";
import Separator, {FULL_LINE} from "../common/Separator/Separator";
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
                    <Separator title="01" lineType={FULL_LINE}/>
                    <About/>
                    <Materials/>
                    <Command/>
                    <Learn/>
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
