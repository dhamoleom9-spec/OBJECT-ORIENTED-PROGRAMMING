// let city = "mumbai"
// let apikey = "8bf45140fa37195f00fb876af0b93e59"
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

let city = prompt("enter your city")
if(city === null){
    console.log("you cancelled it ")
}
else{
    city= city.trim()
    if(city === Number){
        console.log("pleaase enter an city instead of number")
    }
    else if(city.trim() === ""){
        console.log("please enter an correct massage !")
    }
    else{
        console.log(`you entered an correct massage`)
    }
}


async function getweather(city) {
    try {
        let = apikey = "8bf45140fa37195f00fb876af0b93e59";
        let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

        if (!rawdata.ok) {
            throw new Error("citi not found enter correct city")
        }
        let data = await rawdata.json()
        console.log([data.main.temp]-273.15 + " °c")
        console.log(data.name)
        console.log(data.wind.speed + " km/hr")
    } catch (err) {
        console.log(err.message)
    }
}

getweather(city)