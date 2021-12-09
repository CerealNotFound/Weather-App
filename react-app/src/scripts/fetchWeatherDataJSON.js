import axios from "axios";

const fetchWeatherDataJSON = () => {
    let cityName = document.querySelector("#search-bar").value;
    let selectedUnit = document.querySelector("#units-menu").value;
    return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3076ad5cd46dd71f38cf0570a0458952&units=${selectedUnit}`)
    .then((response) => {
        return(response);
    })
    .catch(error => {
        console.log(error);
    if (cityName === "") {
        return(alert("Please enter a city!"));
    } else {return(alert("Please enter a valid city name!"))}
 })
}

export default fetchWeatherDataJSON;