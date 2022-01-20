import React, { useEffect, useState } from "react";
import { Period } from "../models/weather";
import fetchWeatherApiService from "../services/WeatherApiService";

export default function WeatherForecast() {
  const [periods, setPeriods] = useState<Period[]>([]);

  //hook
  //takes call back function, //call any [inputValue]
  useEffect(() => {
    fetchWeatherApiService().then((periods) => setPeriods(periods));
  }, []);

  //component markup

  return (
    <div className="WeatherForecast">
      <h2>Weather Forecast</h2>
      <ul>
        {periods.map((period, i) => 
          <li key={i}>
            <h3>{period.name}</h3>
            <p>{period.temperature} (F) </p>
            <img src={period.icon} alt="" />
            <p>Details Forecast:{period.shortForecast}</p>
          </li>
        )
        }
      </ul>
    </div>
  );
}
