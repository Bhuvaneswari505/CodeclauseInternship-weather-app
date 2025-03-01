const apikey=`b6d92195ca17987f40258d337a557190`;
//const city="Kakinada";

async function fetchWeatherData(city){
    try{
     const response=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
        );
    if(!response.ok){
        throw new error("Cannot fetch weather data of the given location");
    }
        const data= await response.json();
        console.log(data);
       updateWeatherUI(data);
} catch(error){
    console.log(error);
}   

}
const cityElement = document.querySelector(".city");
const temperature=document.querySelector(".temp");
const windSpeed=document.querySelector(".wind-speed");
const visibility = document.querySelector(".visibility-distance");
const humidity=document.querySelector(".humidity");
const descriptionText= document.querySelector(".description-text");
const descriptionIcon= document.querySelector(".description i")
function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent=`${Math.round(data.main.temp)}`;
    windSpeed.textContent=`${data.wind.speed}km/h`;
    visibility.textContent=`${data.visibility/1000} km`;
    humidity.textContent =`${data.main.humidity}%`
    descriptionText.textContent=data.weather[0].description;
    const currentDate= new Date();
    date.textContent=currentDate.toDateString();
   const getWeatherIconName= getWeatherIconName(data.weather[0].main);
    descriptionIcon.textIcon=`<i class="material-icons">${weatherIconName}</i>`;

}
const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const city=inputElement.value;
    if(city !==""){
       fetchWeatherData(city);
       inputElement.value="";
    }
});
function getWeatherIconName(weathercondition){
    const  iconMap = {
        Clear: "wb_sunny",
        Clouds: "wb_cloudy",
        Rain: "umbrella",
        Thunderstorm: "flash_on",
        Drizzle: "grain",
        Snow: "ac_unit",
        Mist: "cloud",
        Smoke: "cloud",
        Haze: "cloud",
        Fog: "cloud",
};
return iconMap[weatherCondition] || "help";
}







