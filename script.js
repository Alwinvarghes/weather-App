const inputBox = document.querySelector('.input-box');
const searchBtn= document.getElementById('searchBtn');
const weather_img =document.querySelector('.weather-img');
const tempreature = document.querySelector('.tempreature');
const  description = document.querySelector('.description');
const  humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found')

const weather_body = document.querySelector('.weather-body')

 async function checkWeather(city){
    const api_key ="eee2fdc5eb1069885f9a501bfd81c707"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod == 404){
        location_not_found.style.display ="flex";
        weather_body.style.display ="none";

        console.log("error");
        return;
    }

    location_not_found.style.display="none"

    weather_body.style.display ="flex";
    
    tempreature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}ºC`;

    description.innerHTML =`${ weather_data .weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = "https://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png";
        
    break;

        case 'Clear':
            weather_img.src= "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
            
            break;

            case 'Rain':
                weather_img.src = "https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png";
                break;

                case 'Mist':
                    weather_img.src = "https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
                    
                    break;

                    case 'Snow':
                        weather_img.src = "https://www.clipartmax.com/png/middle/87-877864_snowy-weather-clipart-snowy-clipart.png";
                        
                        break;
                
}
    console.log(weather_data);


}
searchBtn.addEventListener('click', ()=>{

    checkWeather(inputBox.value);
});