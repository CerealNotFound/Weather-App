import {React, useEffect} from "react";
import "../../styles/css/NowTemp.css";
import weather from "../../scripts/weather";

const NowTemp = () => {
    useEffect(() => {
        weather()
    }) 
    return(
        <div id="now-temp-wrapper">
            <div id="now-day"></div>
            <ul id="now-temp">
                <li><div id="weather-now-image"></div></li>
                <li className="weather-li">
                    <span id="now-temprature">-</span>
                    <span className="degree-icon"></span>
                </li>
                <li><p id="weather"></p></li>
            </ul>
            <div id="city-name"></div>
        </div>
    )
}

export default NowTemp;