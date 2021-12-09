import fetchWeatherDataJSON from "./fetchWeatherDataJSON";

const weather = () => {
    fetchWeatherDataJSON().then((response) => {
        if (response) {
            let temprature = JSON.stringify(Math.floor(response.data.main.temp));
            let selectedUnit = document.querySelector("#units-menu").value;
            let windUnit;
            let weather = response.data.weather[0].main;
            let cityName = response.data.name;
            let minimumTemprature = JSON.stringify(Math.floor(response.data.main.temp_min));
            let maximumTemprature = JSON.stringify(Math.floor(response.data.main.temp_max));
            let wind = JSON.stringify(Math.floor(response.data.wind.speed));
            let humidity = JSON.stringify(response.data.main.humidity);
            console.log(`${temprature}\n ${weather}`)
            switch (selectedUnit) {
                case "Metric":
                    windUnit = "m/s";
                    break;
                case "Imperial":
                    windUnit = "mi/h";
                    break;
                case "Standard":
                    windUnit = "m/s";
                    break;
                default:
                    console.log("Some unknown error occured");
                    break;
            }

            switch (weather) {
                case "Clouds":
                    document.querySelector("#weather-now-image").setAttribute(`class`, `clouds-image`);
                    break;
                case "Clear":
                    document.querySelector("#weather-now-image").setAttribute(`class`, `clear-image`);
                    break;
                case "Snow":
                    document.querySelector("#weather-now-image").setAttribute(`class`, `snow-image`);
                    break;
                case "Rain" || "Drizzle":
                    document.querySelector("#weather-now-image").setAttribute(`class`, `rain-image`);
                    break;
                case "Thunderstorm":
                    document.querySelector("#weather-now-image").setAttribute(`class`, `thunderstorm-image`);
                    break;
                default: 
                    console.log("foo")
            }
            document.querySelector("#weather").innerHTML = weather;
            document.querySelector("#now-temprature").innerHTML = temprature;
            document.querySelector("#weather-details-wind").innerHTML = `${wind}${windUnit}`;
            document.querySelector("#city-name").innerHTML = cityName;
            document.querySelector("#weather-details-min").innerHTML = minimumTemprature;
            document.querySelector("#weather-details-max").innerHTML = maximumTemprature;
            document.querySelector("#humidity").innerHTML = `${humidity}%`;

        } else {console.log("Failed to fetch API, invalid city name.")};
    })
}

export default weather;























