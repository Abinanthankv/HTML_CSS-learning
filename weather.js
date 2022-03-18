/*let weather={
	apikey:"d702660defc3b728234840c245d99fa7",
	fetchWeather:function(city){
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city 
			+"&units=metric&appid="+this.apikey)
		.then((response)=>response.json())
		.then((data)=>this.displayWeather(data));
	},
	displayWeather:function(data){
		const {name}=data;
		const {icon,description}=data.weather[0];
		const {temp,humidity}=data.main;
		console.log(name,icon,description,temp,humidity)
		document.querySelector(".city").innerText="Weather in" +name;
		document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
		document.querySelector(".description").innerText=description;
		document.querySelector(".temp").innerText=Math.ceil(temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
	}



}*/
const apikey="d702660defc3b728234840c245d99fa7";
const city=["chennai","tamilnadu","harur"];
for( let i = 0; i <= city.length; i++)
{
	let currentcity=city[i];
	console.log(currentcity )
    setTimeout(function(){
    	fetchWeather(city[i])
    }, 5000*i); 
    if(i==city.length){
    	i=0;
    }
}

fetchWeather(city);
function fetchWeather(city){
	fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city 
			+"&units=metric&appid="+apikey)
		.then((response)=>response.json())
		.then((data)=>displayWeather(data));
}
function displayWeather(data){
		const {name}=data;
		const {icon,description}=data.weather[0];
		const {temp,humidity}=data.main;
		document.querySelector(".city").innerText=name;
		
		
		document.querySelector(".description").innerText=description;
		document.querySelector(".temp").innerText=Math.ceil(temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
		var result = checkFileExist("icons/"+description+".svg");
		if (result == true) 
		{
    	document.querySelector(".icon").src=("icons/"+description+".svg");
		} 
		else 
		{
    	document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png"
		}		
}
function checkFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
    if (xhr.status == "404") 
    {
        return false;
    } 
    else 
    {
        return true;
    }
}


