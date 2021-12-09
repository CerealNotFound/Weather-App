import './App.css';
import Navbar from "./components/Navbar/Navbar";
import NowTemp from "./components/NowTemp/NowTemp";
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import OtherDaysTemp from './components/OtherDaysTemp/OtherDaysTemp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="weather-main-flex">
        <NowTemp />
        <div id="weather-details-wrapper">
          <WeatherDetails />
          <OtherDaysTemp />
        </div>
      </div>
    </div>
  );
}

export default App;
