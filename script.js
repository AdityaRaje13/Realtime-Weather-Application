const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8dc1c202cemshb799da17a3e26d8p10d2fcjsn026d1d2e50cd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    .then((response) => {
    
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        //wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {

    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");

//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    scloud_pct.innerHTML = response.cloud_pct
    sfeels_like.innerHTML = response.feels_like
    shumidity.innerHTML = response.humidity
    smax_temp.innerHTML = response.max_temp
    smin_temp.innerHTML = response.min_temp
    ssunrise.innerHTML = response.sunrise
    ssunset.innerHTML = response.sunset
    stemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    swind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));


//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    bcloud_pct.innerHTML = response.cloud_pct
    bfeels_like.innerHTML = response.feels_like
    bhumidity.innerHTML = response.humidity
    bmax_temp.innerHTML = response.max_temp
    bmin_temp.innerHTML = response.min_temp
    bsunrise.innerHTML = response.sunrise
    bsunset.innerHTML = response.sunset
    btemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    bwind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));


//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    lcloud_pct.innerHTML = response.cloud_pct
    lfeels_like.innerHTML = response.feels_like
    lhumidity.innerHTML = response.humidity
    lmax_temp.innerHTML = response.max_temp
    lmin_temp.innerHTML = response.min_temp
    lsunrise.innerHTML = response.sunrise
    lsunset.innerHTML = response.sunset
    ltemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    lwind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));



//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    kcloud_pct.innerHTML = response.cloud_pct
    kfeels_like.innerHTML = response.feels_like
    khumidity.innerHTML = response.humidity
    kmax_temp.innerHTML = response.max_temp
    kmin_temp.innerHTML = response.min_temp
    ksunrise.innerHTML = response.sunrise
    ksunset.innerHTML = response.sunset
    ktemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    kwind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));


//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    jcloud_pct.innerHTML = response.cloud_pct
    jfeels_like.innerHTML = response.feels_like
    jhumidity.innerHTML = response.humidity
    jmax_temp.innerHTML = response.max_temp
    jmin_temp.innerHTML = response.min_temp
    jsunrise.innerHTML = response.sunrise
    jsunset.innerHTML = response.sunset
    jtemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    jwind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));



//--------------------------------------------------------------------------

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
.then(response => response.json())
.then((response) => {

    console.log(response)

    ccloud_pct.innerHTML = response.cloud_pct
    cfeels_like.innerHTML = response.feels_like
    chumidity.innerHTML = response.humidity
    cmax_temp.innerHTML = response.max_temp
    cmin_temp.innerHTML = response.min_temp
    csunrise.innerHTML = response.sunrise
    csunset.innerHTML = response.sunset
    ctemp.innerHTML = response.temp
    //wind_degrees.innerHTML = response.wind_degrees
    cwind_speed.innerHTML = response.wind_speed

})
.catch(err => console.error(err));
