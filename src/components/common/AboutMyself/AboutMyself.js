import React from "react";
import "./AboutMyself.scss";

function AboutMyself() {
    return (
        <div className="about_myself">
            <h1 className="about_myself__big_title">Всем привет, я Tanya Lookas!</h1>
            <h2 className="about_myself__small_title">Я декоратор-реставратор с десятилетним опытом работы.</h2>
            <h2 className="about_myself__small_title">Руковожу студией декора &quot;Белый лён&quot;</h2>
            <div className="about_myself__links">
                <a href="https://vk.com/whitelinen_snk">Vk</a>
                <a href="https://www.instagram.com/tanya_lookas/">Instagram</a>
            </div>
        </div>
    );
}

export default AboutMyself;