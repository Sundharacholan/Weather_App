import HeroBanner from "./components/heroBanner";
import Card from "./components/card";
import { useState, useEffect } from "react";
import axios from "axios";

// import sunIcon from "./assets/sun.png"
// import moonIcon from "./assets/night.png"
// import rainIcon from "./assets/rain.png" 

function Home() {

    const API_KEY = "5967903c4e74dfafaeabf1e2a78146d8"

    // weather-display
    var [query, setQuery] = useState("")
    var [city, setCity] = useState("Chennai")
    var [time, setTime] = useState("")
    var [temp, setTemp] = useState("")
    var [clouds, setClouds] = useState("")

    // info-card
    var [windSpeed, setWindSpeed] = useState("")
    var [pressure, setPressure] = useState("")
    var [visibility, setVisibility] = useState("")
    var [cloudiness, setCloudiness] = useState("")
    var [sunrise, setSunrise] = useState("")
    var [sunset, setSunset] = useState("")

    var [error, setError] = useState("")

    // const [weatherIcon, setWeatherIcon] = useState("");


    // fetchweather
    async function fetchWeather(name) {
        try {
            // Api link
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: { q: name, appid: API_KEY, units: "metric" }
            });
            const weatherData = response.data;
            setError("")
            // banner-component
            setCity(weatherData.name);
            setClouds(weatherData.weather[0].main);
            setTemp(weatherData.main.temp);

            // card-component

            const speedkmh = (weatherData.wind.speed * 3.6).toFixed(1);
            setWindSpeed(speedkmh);
            setPressure(weatherData.main.pressure);

            const visKm = (weatherData.visibility / 1000).toFixed(1);
            setVisibility(visKm);
            setCloudiness(weatherData.clouds.all);

            const handlesunrise = new Date((weatherData.sys.sunrise) * 1000);
            setSunrise(
                handlesunrise.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );

            const handlesunset = new Date((weatherData.sys.sunset) * 1000);
            setSunset(
                handlesunset.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );

            const local = new Date((weatherData.dt + weatherData.timezone) * 1000);
            setTime(
                local.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "UTC"
                })
            );

            // weather-icon 
            // const weatherMain = weatherData.weather[0].main;
            // let simpleIcon = "";
            // const localTime = weatherData.timeZone

            // if (["Rain", "Drizzle", "Thunderstorm"].includes(weatherMain)) {
            //     simpleIcon = rainIcon;
            // }
            // else if (localTime >= weatherData.sys.sunrise + weatherData.timeZone &&
            //     localTime <= weatherData.sys.sunset + weatherData.timeZone) {
            //     simpleIcon = sunIcon;
            // }
            // else {
            //     simpleIcon = moonIcon;
            // }
            // setWeatherIcon(simpleIcon);


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
        <div className="font-sans text-sm flex-col pb-20 
                        md:text-base md:flex md:flex-row md:pb-0 md:pt-16 md:h-screen">
            <HeroBanner
                city={city}
                query={query}
                time={time}
                temp={temp}
                clouds={clouds}
                setQuery={setQuery}
                handleSearch={handleSearch}
                error= {error} >
            </HeroBanner>

            <Card
                windSpeed={windSpeed}
                pressure={pressure}
                visibility={visibility}
                cloudiness={cloudiness}
                sunrise={sunrise}
                sunset={sunset} >
            </Card>
        </div>
    );
}



export default Home;