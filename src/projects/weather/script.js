const weatherModule = (function() {
  // get user input
  const getInput = () => {
    const inputBox = document.getElementById('inputBox'); 
    let input = inputBox.value;
    let userInput = input.split(',');
    
    if (userInput.length > 2 || input === '') {
      alert('Invalid input!');
      throw 'Invalid Input';
    }

    if (userInput.length === 2) {
      // removes any spaces from after comma
      userInput[1] = userInput[1].replace(/\s+/g, '');
    }

    return userInput;
  };

  // determine if input is a city, city/state, or ZIP to determine which API call to use
  const determineCall = (userInput) => {
    let callID = '';

    if (userInput.length === 1) {
      if (parseInt(userInput[0])) {
        if (userInput[0].length != 5) {
          alert('Invalid ZIP code!');
          throw 'invalid zip code';
        } else {
          callID = 'zip';
        }
      } else {
        callID = 'city';
      }      
    } else if (userInput.length === 2) {
      callID = 'cityState';
    } else {
      alert('Invalid input; Enter City and state separated by a single comma');
      throw 'invalid location input';
    }

    return callID;
  };

  // get input, determine input type, call correct API function
  const getCurrentWeatherData = async function(e) {
    e.preventDefault();

    const userInput = getInput();
    const callID = determineCall(userInput);

    if (callID === 'zip') {
      await getCurrentWeatherByZip(userInput);
    }
    if (callID === 'city') {
      await getCurrentWeatherByCity(userInput);
    }
    if (callID === 'cityState') {
      await getCurrentWeatherByCityState(userInput);
    }
    
    const processedCurrentWeather = ProcessWeather('currentWeatherJSON');
    localStorage.setItem('processedCurrentWeather', JSON.stringify(processedCurrentWeather));

    clearContentWindow();
    displayCurrentWeather(processedCurrentWeather);
  }

  // make API calls
  const getCurrentWeatherByZip = async function(userInput) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userInput[0]}&appid=1d1c2901189455b47575e403708d4d25`);
    const receivedData = await response.json();

    localStorage.setItem('currentWeatherJSON', JSON.stringify(receivedData));
  };

  const getCurrentWeatherByCity = async function(userInput) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput[0]}&appid=1d1c2901189455b47575e403708d4d25`);
    const receivedData = await response.json();

    localStorage.setItem('currentWeatherJSON', JSON.stringify(receivedData));
  };

  const getCurrentWeatherByCityState = async function(userInput) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput[0]},${userInput[1]},usa&appid=1d1c2901189455b47575e403708d4d25`);
    const receivedData = await response.json();

    localStorage.setItem('currentWeatherJSON', JSON.stringify(receivedData));
  };

  // process the JSON to get required weather information: location name, temp (and icon?), temp hi/lo, wind?, description
  const ProcessWeather = (storageName) => {
    let parsedWeather = JSON.parse(localStorage.getItem(storageName));
    
    const locationName = parsedWeather["name"];
    const currentTemp = parsedWeather["main"]["temp"];
    const countryCode = parsedWeather["sys"]["country"];
    const highTemp = parsedWeather["main"]["temp_max"];
    const lowTemp = parsedWeather["main"]["temp_min"];
    const weatherIcon = parsedWeather["weather"][0]["icon"];
    const weatherDescription = parsedWeather["weather"][0]["main"];

    return {
      locationName,
      countryCode,
      currentTemp,
      highTemp,
      lowTemp,
      weatherIcon,
      weatherDescription
    }
  };

  // clear current view
  const clearContentWindow = () => {
    const weatherDisplay = document.getElementById('weatherDisplay');
    while (weatherDisplay.lastElementChild) {
      weatherDisplay.removeChild(weatherDisplay.lastElementChild);
    }
  };

  // display current weather
  const displayCurrentWeather = (processedCurrentWeather) => {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const currentWeatherCard = document.createElement('section');
    currentWeatherCard.id = 'currentWeatherCard';

    const locationName = document.createElement('span');
    locationName.id = 'locationName';
    locationName.textContent = `${processedCurrentWeather.locationName}, ${processedCurrentWeather.countryCode}`;
    currentWeatherCard.appendChild(locationName);

    const temperatures = document.createElement('div');
    temperatures.id = 'temperatureContainer';
    currentWeatherCard.appendChild(temperatures);

    const currentTemp = document.createElement('span');
    currentTemp.className = 'bigTemperature';
    currentTemp.textContent = (((processedCurrentWeather.currentTemp - 273.15) * 1.8) + 32).toFixed(0) + ' F';
    temperatures.appendChild(currentTemp);

    const lowTemp = document.createElement('span');
    lowTemp.className = 'smallTemperature';
    lowTemp.textContent = 'Low: ' + (((processedCurrentWeather.lowTemp - 273.15) * 1.8) + 32).toFixed(0) +' F';
    temperatures.appendChild(lowTemp);

    const highTemp = document.createElement('span');
    highTemp.className = 'smallTemperature';
    highTemp.textContent = 'High: ' + (((processedCurrentWeather.highTemp - 273.15) * 1.8 ) + 32).toFixed(0) + ' F';
    temperatures.appendChild(highTemp);

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `/weatherIcons/${processedCurrentWeather.weatherIcon}.png`;
    currentWeatherCard.appendChild(weatherIcon);

    const weatherDescription = document.createElement('p');
    weatherDescription.id = 'weatherDescription';
    weatherDescription.textContent = processedCurrentWeather.weatherDescription;
    currentWeatherCard.appendChild(weatherDescription);

    weatherDisplay.appendChild(currentWeatherCard);
  };

  return { getCurrentWeatherData };
})();

export default weatherModule;