import React, {useEffect, useState} from "react";
import { Temperature, WeatherMapResponse } from "../models/weather-map";
import {fetchWeatherMap} from "../services/OpenWeatherMap";

function WeatherMap(){
    let temp: Temperature = {
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0,
        pressure: 0,
        humidity: 0
    }
    let wm: WeatherMapResponse = {main: temp, name: ""};
    const [weatherMap, setWeatherMap] = useState<WeatherMapResponse>(wm);

    //hook
    useEffect(()=>{
        fetchWeatherMap().then(
            apiWeatherMap => setWeatherMap(apiWeatherMap)
        );
    }, []);

   return (
       <div className="WeatherMap">
           <h2>Weather Forecast</h2>
           <ul>
                {weatherMap.name} - {weatherMap.main.temp}
           </ul>
       </div>
   );
}

export default WeatherMap;