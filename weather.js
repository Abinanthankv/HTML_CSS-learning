const apikey="d702660defc3b728234840c245d99fa7";
let lat;
let lon;
let date=[];
let name;
let description;
let daily_description=[];
let daily_icon=[];
let temp_min=[];
let temp_max=[];
let current_temp;
let country;
let icon;
let icons=[];
let src;
let condition=[];
let intensity=[];
let humidity;
let current_date;
let city="Harur";
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
fetchcity(city);

function searchcity(){

	city=document.getElementById("search").value;
	fetchcity(city);
}


 function fetchcity(city){
   fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+city 
			+"&units=metric&appid="+apikey)
		.then((response)=>response.json())
		.then((data)=>citycoordinate(data));

  };
  function citycoordinate(data){
  	lat=data.coord.lat;
  	lon=data.coord.lon;
  	icon =data.weather[0].icon;
  	country=data.sys.country;
  	name=data.name
  	fetchWeather(lat,lon);
  }
function fetchWeather(lat,lon){
	fetch("https://api.openweathermap.org/data/2.5/onecall?lat="
			+lat
			+"&lon="+lon 
			+"&units=metric&exclude=hourly&appid="+apikey)
		.then((response)=>response.json())
		.then((data)=>displayWeather(data));

}
function displayWeather(data){
		
		description=data.current.weather[0].description;
  		current_temp=data.current.temp;
  		humidity=data.current.humidity;
  		let dailydata=data.daily;
  		console.log(data)
  		
  		for (let i=0;i<=dailydata.length-1;i++)
  		{
  			daily_description[i]=dailydata[i].weather[0].description;
  			daily_icon[i]=dailydata[i].weather[0].icon
  			date[i]=new Date(dailydata[i].dt*1000);	
  			temp_max[i]=dailydata[i].temp.max;
  			temp_min[i]=dailydata[i].temp.min;

  		}
  		
  		current_date=date[0];
  		let date1=current_date.getDate();
  		let month=current_date.getMonth()+1;
  		let year=current_date.getFullYear();
  		
  		/*----------------------------------------------------------------------------------------*/
  			/*To display cuurent weather condition*/
  		/*------------------------------------------------------------------------------------------*/
if(description.includes("clouds"))
			{
				
				document.querySelector(".icon1").src="icons/overcast clouds.svg";
			}
			if(description.includes("rain"))
			{
			
				document.querySelector(".icon1").src="icons/rain.svg";
			}
			if(description.includes("snow"))
			{
			document.querySelector(".icon1").src="icons/snow.svg";
			}
			if(description.includes("hail"))
			{
				document.querySelector(".icon1").src="icons/hail.svg";
			}
			if(description.includes("haze"))
			{
				document.querySelector(".icon1").src="icons/haze.svg";
			}
				if(description.includes("clear"))
			{
				document.querySelector(".icon1").src="icons/clear sky.svg";
			}
				if(description.includes("smoke"))
			{
				document.querySelector(".icon1").src="icons/smoke.svg";
			}
				if(description.includes("fog"))
			{
				document.querySelector(".icon1").src="icons/fog.svg";
			}
				if(description.includes("thunderstorms"))
			{
				document.querySelector(".icon1").src="icons/thunderstorms.svg";
			}


  	
  	/*document.querySelector(".icon1").src="https://openweathermap.org/img/wn/"+icon+".png";*/
  		
		document.querySelector(".city").innerText=name +",";
		document.querySelector(".country").innerText=country;
		document.querySelector(".description").innerText=description;
		document.querySelector("#currentdate").innerText=date1+"/"+month+"/"+year;
		document.querySelector("#current_temp").innerText=Math.ceil(current_temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";	
		/*----------------------------------------------------------------------------------*/

		/*-------------------------------------------------------------------------------------*/
			/*To display daily forecase data for 7 days*/
		/*--------------------------------------------------------------------------------------*/
		var days=document.querySelectorAll(".days");
		var classes=document.querySelectorAll(".icon");
		var dates=document.querySelectorAll(".date");
		var desc=document.querySelectorAll(".desc");
		var dailytemp_max=document.querySelectorAll(".temp_max");
		var dailytemp_min=document.querySelectorAll(".temp_min");
		for (let i=0;i<=days.length-1;i++)
		{
			let imageicons=(classes[i]);
			let setdate=dates[i];
			let setdesc=desc[i];
			
			let settemp_max=dailytemp_max[i];
			let settemp_min=dailytemp_min[i];
			if(daily_description[i+1].includes("clouds"))
			{
				
				imageicons.src="icons/overcast clouds.svg";
			}
			if(daily_description[i+1].includes("rain"))
			{
			
				imageicons.src="icons/rain.svg";
			}
			if(daily_description[i+1].includes("snow"))
			{
				imageicons.src="icons/snow.svg";
			}
			if(daily_description[i+1].includes("hail"))
			{
				imageicons.src="icons/hail.svg";
			}
			if(daily_description[i+1].includes("haze"))
			{
				imageicons.src="icons/haze.svg";
			}
				if(daily_description[i+1].includes("clear"))
			{
				imageicons.src="icons/clear sky.svg";
			}
				if(daily_description[i+1].includes("smoke"))
			{
				imageicons.src="icons/smoke.svg";
			}
				if(daily_description[i+1].includes("fog"))
			{
				imageicons.src="icons/fog.svg";
			}
				if(daily_description[i+1].includes("thunderstorms"))
			{
				imageicons.src="icons/thunderstorms.svg";
			}



			
			
  			
  			setdate.innerText=weekday[date[i+1].getDay()]
  			setdesc.innerText=daily_description[i+1];
  			settemp_min.innerText=Math.ceil(temp_min[i+1])+"\xB0C"
  			settemp_max.innerText=Math.ceil(temp_max[i+1])+"\xB0C"
  			
				/*imageicons.src="https://openweathermap.org/img/wn/"+daily_icon[i+1]+".png";

			*/

		}
  			
		}
		

		/*-----------------------------------------------------------------------------------*/

  				
  		
  		
  		



   


