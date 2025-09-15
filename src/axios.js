import axios from "axios";

var data = axios("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=5967903c4e74dfafaeabf1e2a78146d8")

data.then(function (userData){
    console.log(userData.data.weather[0].main)
    console.log(userData.data.wind.speed)

}).catch(function (errMsg) {
    console.log("Couldnt get result")
})


