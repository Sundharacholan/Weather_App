import axios from "axios";
import { useEffect, useState } from "react";

function Cities() {

    const API_KEY = "5967903c4e74dfafaeabf1e2a78146d8"
    var [listOfCities, setListOfCities] = useState([]);
    var cityTitle = ["Singapore","London","New York","Tokyo","Taiwan","Japan"]

    useEffect(() => {
        async function fetchWeather() {
            try {
                // Api link
                const response = await Promise.all(cityTitle.map(function (city) {
                    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                }));

                const citiesData = response.map(function (res) {
                    const weatherData = res.data;

                    const local = new Date((weatherData.dt + weatherData.timezone) * 1000);
                    const localTime = local.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "UTC"
                    });

                    return {
                        city: weatherData.name,
                        time: localTime,
                        cel: Math.round(weatherData.main.temp),
                        wind: (weatherData.wind.speed * 3.6).toFixed(1) + " km/h",
                        condition: weatherData.weather[0].main
                    };
                });
                setListOfCities(citiesData);

            }
            catch{
                console.log("Failed to load Cities");
            }
        }
        fetchWeather();
    }, [])


    


    return (
        <div className="mx-5 pt-6 md:w-5/6 h-full flex flex-col justify-center">
            <h1 className="text-xl font-bold"> Discover More</h1>
            <div className="flex md:pb-0 pb-8 w-full flex-wrap gap-4 md:gap-0 mt-5 h-[88%] justify-center items-center overflow-hidden">
                {
                    listOfCities.map(function (data, index) {
                        return (
                            <div key={index} className="w-5/12 mx-0 md:mx-2 px-5 py-[20px] rounded-lg  grow md:my-3" style={{ backgroundColor: "#1a2121" }}>

                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-semibold text-base ">{data.city}</h1>
                                        <p className="text-white/75 pt-2 text-sm">{data.time}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl  md:text-3xl mt-[15px] font-semibold">{data.cel}°</h3>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-1 md:mt-2 text-sm text-white/80">
                                    <p>{data.wind}</p>
                                    <p className="pr-0 md:pr-2" >{data.condition}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>);
}



export default Cities;