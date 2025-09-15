
function Card(props) {

    var windSpeed = props.windSpeed
    var pressure = props.pressure
    var visibility = props.visibility
    var cloudiness = props.cloudiness
    var sunrise = props.sunrise
    var sunset = props.sunset

    var Forecast = [
        {
            title: "Wind speed",
            details: `${windSpeed} km/h`,
            subTitle: "+2 km",
        },
        {
            title: "Pressure",
            details: `${pressure} hpa`,
            subTitle: "-32 hpa",
        },
        {
            title: "Visibility",
            details: `${visibility} km`,
            subTitle: "+0.6 km",
        },
        {
            title: "Cloudiness",
            details: `${cloudiness} %`,
            subTitle: "-2 %",
        },
        {
            title: "Sunrise",
            details: `${sunrise}`,
        },
        {
            title: "Sunset",
            details: `${sunset}`,
        },
    ]

    return (
        <div className="mx-5 py-5 md:w-5/6 h-full flex flex-col justify-center">
            <h1 className="text-xl font-bold ">Weather Info</h1>
            <div className="flex w-full flex-wrap gap-4 mt-6  h-5/6 justify-center items-center" style={{ border: "green 3px" }}>
                {
                    Forecast.map(function (data, index) {
                        return (
                            <div key={index} className="w-5/12 px-4 py-[21px] rounded-lg grow" style={{ backgroundColor: "#1a2121", border: "red 3px" }}>
                                <p className="text-base font-semibold pb-2">{data.title}</p>
                                <div className="flex justify-between py-2 text-white/75">
                                    <h3 className="pl-2 pb-1">{data.details}</h3>
                                    <p className="pl-3 ">{data.subTitle}</p>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>

    );
}


export default Card;