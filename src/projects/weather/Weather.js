import weatherModule from './script';

const Weather = () => {


  return (
    <div id='weatherArea'>

      <div className='weatherHeader'>
        <div id="headerLeft">
          SimplyWeather
        </div>
        <form id="headerRight" onSubmit={weatherModule.getCurrentWeatherData}>
          <label htmlFor="inputBox">Enter a city, city and state, or ZIP code: </label>
          <input type="text" id="inputBox" />
          <button type="submit" id="inputButton">Get Weather</button>
        </form>
      </div>
    
      <main id="weatherDisplay">
    
      </main>
    
      <div className='weatherFooter'>
        Uses the <a href="https://openweathermap.org/">Open Weather Map</a> API
      </div>


    </div>
  );
}

export default Weather;