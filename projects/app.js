const inputValue = document.querySelector(".input-value");
const inputSubmit = document.querySelector(".input-submit");
const locationName = document.querySelector(".name");

const dt = document.querySelector(".dt");
const temp = document.querySelector(".temp");
const clouds = document.querySelector(".clouds");
const humid = document.querySelector(".humid");
const pressure = document.querySelector(".pressure");
const visibility = document.querySelector(".visibility");
// const icon = document.querySelector(".icon");
const windDeg = document.querySelector(".wind-deg");
const windSpeed = document.querySelector(".wind-speed");
const description = document.querySelector(".description");
const loadField = document.querySelector(".load-field")
const mainly = document.querySelector(".mainly")



const locationName2 = document.querySelector(".name2");

const dt2 = document.querySelector(".dt2");
const temp2 = document.querySelector(".temp2");
const clouds2 = document.querySelector(".clouds2");
const humid2 = document.querySelector(".humid2");
const pressure2 = document.querySelector(".pressure2");
const visibility2 = document.querySelector(".visibility2");
// const icon = document.querySelector(".icon");
const windDeg2 = document.querySelector(".wind-deg2");
const windSpeed2 = document.querySelector(".wind-speed2");
const description2 = document.querySelector(".description2");
const loadField2 = document.querySelector(".load-field2")
const mainly2 = document.querySelector(".mainly2")


let key = '4618da6a02bc93f0e22aacf2f86c9b06';

window.onload = ()=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            loadField.innerHTML = "Geolocation is not supported by this browser.";
        }



        var successHandler = function(position) { 
            alert(position.coords.latitude); 
            alert(position.coords.longitude); 
            }; 
            
            var errorHandler = function (errorObj) { 
            alert(errorObj.code + ": " + errorObj.message); 
            
            alert("something wrong take this lat " + 26.0546106); 
            alert("something wrong take this lng " +-98.3939791); 
            
            }; 
            
            navigator.geolocation.getCurrentPosition( 
            successHandler, errorHandler, 
            {enableHighAccuracy: true, maximumAge: 10000});



      function showPosition(position) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=${"alerts"}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locationName.innerHTML = `Location: ${data["timezone"]}`;
            temp.innerHTML = `Feels Like: ${data["current"]["temp"]}`;
            clouds.innerHTML = `Cloud: ${data["current"]["clouds"]}`;
            humid.innerHTML = `Humidity: ${data["current"]["humidity"]}`;
            pressure.innerHTML = `Pressure: ${data["current"]["pressure"]}`;
            visibility.innerHTML = `Visibility: ${data["current"]["visibility"]}`;
            // icon.innerHTML = `Icon: ${data["current"]["weather"][0]["icon"]}`
            windDeg.innerHTML = `Wind Degree: ${data["current"]["wind_deg"]}`;
            windSpeed.innerHTML = `wind speed: ${data["current"]["wind_speed"]}`
            description.innerHTML = `Description: ${data["current"]["weather"][0]["description"]}`;
            mainly.innerHTML = `Mostly: ${data["current"]["weather"][0]["main"]}`;

            if (locationName.innerHTML != '') {
                loadField.classList.add("hide");
            }
        })
        

    .catch(err => {
        if (locationName.innerHTML != '') {
            loadField.classList.add("hide");
            locationName.innerHTML = `${err["code"]}: ${err["message"]}`;
            console.log(err)
        }
    })
  }

//   loadField2.classList.add("hide");

if (locationName2.innerHTML == '') {
    loadField2.classList.add("hide");
} else if (locationName2.innerHTML != '') {
    loadField2.classList.remove("hide");
}


}



inputSubmit.addEventListener('click', (e)=>{
    e.preventDefault();

    if (locationName2.innerHTML == '' || inputValue.value != locationName2.value) {
        loadField2.classList.remove("hide");

            locationName2.innerHTML = ''
            temp2.innerHTML = ''
            clouds2.innerHTML = ''
            humid2.innerHTML = ''
            pressure2.innerHTML = ''
            visibility2.innerHTML = ''
            windDeg2.innerHTML = ''
            windSpeed2.innerHTML = ''
            description2.innerHTML = ''
            mainly2.innerHTML = ''
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locationName2.innerHTML = `Location: ${data["name"]}`;
            temp2.innerHTML = `Feels Like: ${data["main"]["feels_like"]}`;
            clouds2.innerHTML = `Cloud: ${data["clouds"]["all"]}`;
            humid2.innerHTML = `Humidity: ${data["main"]["humidity"]}`;
            pressure2.innerHTML = `Pressure: ${data["main"]["pressure"]}`;
            visibility2.innerHTML = `Visibility: ${data["visibility"]}`;
            windDeg2.innerHTML = `Wind Degree: ${data["wind"]["deg"]}`;
            windSpeed2.innerHTML = `wind speed: ${data["wind"]["speed"]}`
            description2.innerHTML = `Description: ${data["weather"][0]["description"]}`;
            mainly2.innerHTML = `Mostly: ${data["weather"][0]["main"]}`;

            if (locationName2.innerHTML !== '') {
                loadField2.classList.add("hide");
            }

            inputValue.value = '';
        })

    .catch(err => {
            if (response = 404) {
                loadField2.classList.add("hide");
            locationName2.innerHTML = `${err = 404}: city not found`
            temp2.innerHTML = 'The city that you are trying to search does not match our list. Please check your spellings and try again'
            clouds2.innerHTML = ''
            humid2.innerHTML = ''
            pressure2.innerHTML = ''
            visibility2.innerHTML = ''
            windDeg2.innerHTML = ''
            windSpeed2.innerHTML = ''
            description2.innerHTML = ''
            mainly2.innerHTML = ''
            }

            inputValue.value = '';
    })
})
