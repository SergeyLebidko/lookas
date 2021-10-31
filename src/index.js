import React from "react";
import {render} from "react-dom";
import App from "./components/App/App";
import "./style/init.scss";

render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);
