export interface WeatherMapResponse {
    // weather: Weather[];
    main: Temperature;
    name: string;
}

// export interface Weather {
//     main: string;
//     description: string;
// }

export interface Temperature {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}