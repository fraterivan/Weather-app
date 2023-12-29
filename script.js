document.getElementById('searchForm').addEventListener('submit', function (e) {
    search(document.getElementById("searchBox"));
    e.preventDefault();
}, false);

document.getElementById("cityName").innerHTML = "Search for a city."

var city = ""

function search() {
    var city = document.getElementById("searchBox").value
    var fullLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0a8852179994a8f3a7b7f2c49b5ef4d4&units=metric"

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch(fullLink, requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById("cityName").innerHTML = result.name,
            document.getElementById("temperature").innerHTML = result.main.temp + " °C",
            document.getElementById("description").innerHTML = result.weather[0].main
        })
        .catch(error => {
            document.getElementById("cityName").innerHTML = "Enter a valid city name, ID or ZIP code.",
            document.getElementById("temperature").innerHTML = "",
            document.getElementById("description").innerHTML = ""
        });

    document.getElementById("searchBox").value = ""
}