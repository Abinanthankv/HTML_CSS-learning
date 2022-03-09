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
const city="Tokyo";
var i;



const apikey="d702660defc3b728234840c245d99fa7";
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
		document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
		document.querySelector(".description").innerText=description;
		document.querySelector(".temp").innerText=Math.ceil(temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";

		
}
const date = new Date();
const dateFormated=formatedDate(date);	
function formatedDate(dateobj)
{
	const day=dateobj.getDate();
	const month=dateobj.getMonth()+1;
	const	year=dateobj.getFullYear() ;
	return (day+'/'+month+'/'+year);
}	
document.getElementsByClassName(".current-date").innerText=dateFormated;


