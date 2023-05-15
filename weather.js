let WeatherButton = document.getElementById("weather_btn");
let WeatherOutput = document.getElementById("weather_out");

WeatherButton.addEventListener("click", () => {
    //inbuild js function to get location latitude and longitude

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(GiveWeather);
    } else {
        WeatherOutput.innerText = "Browser Not Supported";
    }
});



const GiveWeather = async(climate) => {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${climate.coords.latitude}&lon=${climate.coords.longitude}&appid=c0ec9f9c2b7f30202eb51f3b2fc22771`
    );

    let data = await response.json();
    console.log(data);
    console.log(data.main.temp);
    console.log(data.main.feels_like);
    console.log(data.main.humidity);


    WeatherOutput.innerHTML = `<span class=OutPut>Temp: ${Math.round(data.main.temp)}°C.  Feels Like: ${Math.round(data.main.feels_like)}°C.  Humidity: ${Math.round(data.main.humidity)}%</span>`



}