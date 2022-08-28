
const cityName = document.getElementById('city-name');
const weatherType = document.getElementById('weather-type');
const temp = document.getElementById('temp');
const minTemp = document.getElementById('min-temp');
const maxTemp = document.getElementById('max-temp');

let API_KEY = "8408438a6bcb310d095127b108a79bc2";

getWeatherData = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    return fetch(URL).then(response => response.json()).then(data => data); //retriving data from API request
    
}

 const searchCity = async () => {
    const city = document.getElementById('city-input').value; //Getting user entered city name
    // console.log(city);
    const data = await getWeatherData(city);//storing weather data in 'data' variable by calling 'getWeatherData' function
    showWeatherData(data);//passing 'data' variable to 'showWeatherData' function to show data on frontend
}

const showWeatherData = (weatherData) => {
    // console.log(weatherData);
    cityName.innerText = weatherData.name;//Showing city name
    weatherType.innerText = weatherData.weather[0].main;//Showing weather
    temp.innerText = weatherData.main.temp;//Showing current temperature
    minTemp.innerText = weatherData.main.temp_min;//Showing min temperature
    maxTemp.innerText = weatherData.main.temp_max;//Showing max temperature
}