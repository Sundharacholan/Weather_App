import HeroBanner from "./components/heroBanner";
import Cities from "./components/cities";
import { useState,useEffect } from "react";
import axios from "axios";

function Location() {


    const API_KEY = "5967903c4e74dfafaeabf1e2a78146d8"

    var [query, setQuery] = useState("")
    var [city, setCity] = useState("Chennai")
    var [time, setTime] = useState("")
    var [temp, setTemp] = useState("")
    var [clouds, setClouds] = useState("")
    var [error, setError] = useState("")

    // fetchweather
    async function fetchWeather(name) {
        try {
            // Api link
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: { q: name, appid: API_KEY, units: "metric" }
            });
            const weatherData = response.data;

            // banner-component
            setCity(weatherData.name);
            setClouds(weatherData.weather[0].main);
            setTemp(weatherData.main.temp);

            const local = new Date((weatherData.dt + weatherData.timezone) * 1000);
            setTime(
                local.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "UTC"
                })
            );

        }
        catch (err) {
            setError("City not found")
        }

    }
    // load default city
    useEffect(() => {
        fetchWeather(city)
    }, []);

    function handleSearch() {
        if (!query.trim()) return;
        fetchWeather(query.trim());
        setQuery("")
    }

    return (
        <div className="font-sans text-sm flex-col pb-16 
                        md:text-base md:flex md:flex-row md:pb-0 md:pt-16 md:h-screen">
            <HeroBanner city={city} query={query} setQuery={setQuery} time={time} temp={temp} clouds={clouds} handleSearch={handleSearch} error={error} ></HeroBanner>
            <Cities></Cities>
        </div>
    );
}



export default Location;