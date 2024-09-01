


// const apiKey = "baa0b370fa577db19acb8cad34d6a43a";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".searchbar input");
// const searchBtn = document.querySelector(".searchbar button");
// const weatherIcon = document.querySelector(".weather-icon")

// async function checkWeather(city) {
//     if (!city) {
//         console.error("City is not provided.");
//         return;  // Exit the function if no city is provided
//     }

    
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//         if (!response.ok) {
//             throw new Error(`City not found: ${city}`);
//         }
//         const data = await response.json();
        
//         // Update DOM elements within the try block
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//         if (data.weather[0].main == "Clouds") {
//             weatherIcon.src = "images/clouds.png";
//         } else if (data.weather[0].main == "Clear") {
//             weatherIcon.src = "images/clear.png";
//         } else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "images/rain.png";
//         } else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = "images/drizzle.png";
//         } else if (data.weather[0].main == "Mist") {
//             weatherIcon.src = "images/mist.png";


//          document.querySelector(".weather").style.display ="block";
    
//     }
// }

// searchBtn.addEventListener("click", () => {
//     const city = searchBox.value.trim();  // Trim whitespace from input
//     checkWeather(city);
// });

const apiKey = "baa0b370fa577db19acb8cad34d6a43a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchbar input");
const searchBtn = document.querySelector(".searchbar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();
        
            // Update DOM elements
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            // Update weather icon
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            } 
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();  // Trim whitespace from input
    checkWeather(city);
});
