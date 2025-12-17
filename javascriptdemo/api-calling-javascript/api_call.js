//Fetch weather data from weatherstack API    "weatherstack": Unknown word.
document.getElementById('apiForm').addEventListener('submit', async function(e) {
    e.preventDefault(); //Prevent form submission
    const city  = document.getElementById('city').value;

    const weatherAPIURL = `https://api.weatherstack.com/current?access_key=79a8b2bae5f526c21d8f27c8ac739ad1&query=${encodeURIComponent(city)}`;
    try{
        const weatherResponse = await fetch(weatherAPIURL);  
        const weatherData = await weatherResponse.json();
        console.log(weatherData);//for debugging
        if(weatherData.success === false){
            document.getElementById('weatherResult')
                .textContent = 'Invalid city name, Please try again.';
            return;
        }
        //Fetch temperature from weather data
        const currentTemperature = weatherData.current.temperature;
        document.getElementById('weatherResult')
            .textContent = `Current temperature in ${city} is ${currentTemperature}°C`;
        //Fetch local time from weather data
        const currentDateTime = weatherData.location.localtime;
        const timeZoneId = weatherData.location.timezone_id;
        document.getElementById('timeResult')
        .textContent = `Local time in ${city} (${timeZoneId}) is ${currentDateTime}`;
    }
    catch(error){
        document.getElementById('weatherResult')
            .textContent = 'Error  fetching weather/time data';
    }



});