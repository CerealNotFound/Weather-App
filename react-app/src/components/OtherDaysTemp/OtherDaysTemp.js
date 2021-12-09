import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../styles/css/OtherDaysTemp.css"
import fetchWeatherDataJSON from "../../scripts/fetchWeatherDataJSON";

const OtherDaysTemp = () => {
    let [daysIntoFuture, setDaysIntoFuture] = useState(1)
    useEffect(() => {
        fetchWeatherDataJSON().then((response) => {       
            if (response) {
                let latitude = response.data.coord.lat;
                let longitude = response.data.coord.lon;
                let selectedUnit = document.querySelector("#units-menu").value;
                axios 
                .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=${selectedUnit}&appid=3076ad5cd46dd71f38cf0570a0458952`)
                .then((response) => {
                    console.log(response)
                    const days = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
    
                    let day = response.data.daily[0].dt;
                    let dayNumber = new Date(day * 1000).getDay();
                    let actualDay = days[dayNumber];
                    document.querySelector("#now-day").innerHTML = actualDay;
    
                        let weather = response.data.daily[daysIntoFuture].weather[0].main
                                console.log("foo")
    
                    switch (weather) {
                        case "Clouds":
                            document.querySelector("#future-weather-image").setAttribute(`class`, `clouds-image`);
                            break;
                        case "Clear":
                            document.querySelector("#future-weather-image").setAttribute(`class`, `clear-image`);
                            break;
                        case "Snow":
                            document.querySelector("#future-weather-image").setAttribute(`class`, `snow-image`);
                            break;
                        case "Rain" || "Drizzle":
                            document.querySelector("#future-weather-image").setAttribute(`class`, `rain-image`);
                            break;
                        case "Thunderstorm":
                            document.querySelector("#future-weather-image").setAttribute(`class`, `thunderstorm-image`);
                            break;
                        default: 
                            console.log("foo")
                    }
    
                    let futureDay = response.data.daily[daysIntoFuture].dt;
                    let futureDayNumber = new Date(futureDay * 1000).getDay();
                    let actualFutureDay = days[futureDayNumber];
                        
                    let minimumTemprature = Math.floor(response.data.daily[daysIntoFuture].temp.min);
                    let maximumTemprature = Math.floor(response.data.daily[daysIntoFuture].temp.max);
    
                    document.querySelector("#future-day").innerHTML = actualFutureDay;
                    document.querySelector("#weather-max-day-next").innerHTML = minimumTemprature;
                    document.querySelector("#weather-min-day-next").innerHTML = maximumTemprature;
                        })
                .catch(error => {
                    console.log(error);
                })
            }
        })
    }, [daysIntoFuture])

    return(
        <div id="future-forecast-wrapper">
            <div id="future-day"></div>
            <ul id="future-forecast">
                <li><div id="future-weather-image"></div></li>
                <li><div className="right" onClick={() => {
                    if (daysIntoFuture < 6) {
                        if (document.querySelector(".none")) {
                            document.querySelector(".none").setAttribute("class", "left")
                        }                        
                        setDaysIntoFuture(daysIntoFuture + 1)
                        console.log(daysIntoFuture)
                    }   else {
                        setDaysIntoFuture(daysIntoFuture + 1)
                        console.log(daysIntoFuture)
                        // document.querySelector(".none").setAttribute("class", "left")
                        document.querySelector(".right").classList.toggle("none")
                    }}
                    }></div></li>
                <li><div className="none" onClick={() => {
                    if (daysIntoFuture > 2) {
                        if (document.querySelector(".none")) {
                            document.querySelector(".none").setAttribute("class", "right")
                        }                        
                        setDaysIntoFuture(daysIntoFuture - 1)
                        console.log(daysIntoFuture)
                    }   else {
                        setDaysIntoFuture(daysIntoFuture - 1)
                        console.log(daysIntoFuture)
                        document.querySelector(".left").setAttribute("class", "none")
                        document.querySelector(".none").setAttribute("class", "right")
                    }
                }}></div></li>
                <li id="min-max-wrapper">
                    <div id="max-wrapper">
                        <span className="icon-up"></span>
                        <span id="weather-max-day-next">-</span>
                    </div>
                    <div id="min-wrapper">
                        <span className="icon-down"></span>
                        <span id="weather-min-day-next">-</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OtherDaysTemp;