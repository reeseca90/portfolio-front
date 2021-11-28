import weatherModule from './script';
import './weatherStyle.css';

const Weather = () => {


  return (
    <div>

      <div className='weatherHeader'>
        <div id="headerLeft">
          SimplyWeather
        </div>
        <div id="headerRight">
          <label htmlFor="inputBox">Enter a city, city and state, or ZIP code: </label>
          <input type="text" id="inputBox" />
          <button id="inputButton" onClick={weatherModule.getCurrentWeatherData}>Get Weather</button>
        </div>
      </div>
    
      <main id="weatherDisplay">
    
      </main>
    
      <div>
        Uses the <a href="https://openweathermap.org/">Open Weather Map</a> API
      </div>


    </div>
  );
}

export default Weather;