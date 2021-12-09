import React from "react";
import "../../styles/css/WeatherDetails.css"

const WeatherDetails = () => {
    return(
        <div id="weather-details-main">
            <div className="flex-1" id="flex-1">
                <div className="weather-details min">
                    <span className="down-arrow"></span>
                    <span id="weather-details-min">-</span>
                    <span className="degree-icon"></span>
                    <div className="data-name">Mininmum</div>
                </div>
                <div className="weather-details humidity">
                    <span id="humidity-icon"></span>
                    <span id="humidity">-</span>
                    <span></span>
                    <div className="data-name">Humidity</div>
                </div>
            </div>
            <div id="flex-2">
                <div className="weather-details max">
                    <span className="up-arrow"></span>
                    <span id="weather-details-max">-</span>
                    <span className="degree-icon"></span>
                    <div className="data-name">Maximum</div>
                </div>
                <div className="weather-details wind">
                    <span id="wind-icon"></span>
                    <span id="weather-details-wind">-</span>
                    <div className="data-name">Wind speed</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails;