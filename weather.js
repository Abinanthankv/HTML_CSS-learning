const apikey="d702660defc3b728234840c245d99fa7";
let lat;
let lon;
let date=[];
let name;
let description;
let daily_description=[];
let daily_icon=[];
let current_temp;
let country;
let icon;
let humidity;
let current_date;
let city="Harur";
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
fetchcity(city);

function searchcity(){

	city=document.getElementById("search").value;
	console.log(city);
	if(city=="null")
	{
		alert("Please center city name")
	}
	else{
		fetchcity(city);
	}
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
  	console.log(data,country);
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
  		}
  		current_date=new Date();
  		let date1=current_date.getDate();
  		let month=current_date.getMonth()+1;
  		let year=current_date.getFullYear();
  		console.log(date1,month)
  		document.querySelector("#currentdate").innerText=date1+"/"+month+"/"+year;
  		document.querySelector("#date1").innerText=weekday[date[1].getDay()];
  		document.querySelector("#date2").innerText=weekday[date[2].getDay()];
  		document.querySelector("#date3").innerText=weekday[date[3].getDay()];
  		document.querySelector("#date4").innerText=weekday[date[4].getDay()];
  		document.querySelector("#date5").innerText=weekday[date[5].getDay()];
  		document.querySelector("#date6").innerText=weekday[date[6].getDay()];
  		document.querySelector("#date7").innerText=weekday[date[7].getDay()];
  		document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
		document.querySelector(".city").innerText=name +",";
		document.querySelector(".country").innerText=country;
		document.querySelector(".description").innerText=description;
		document.querySelector("#current_temp").innerText=Math.ceil(current_temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";	
		document.querySelector("#day1").src="https://openweathermap.org/img/wn/"+daily_icon[1]+".png";
		document.querySelector("#desc1").innerText=daily_description[1];
		document.querySelector("#day2").src="https://openweathermap.org/img/wn/"+daily_icon[2]+".png";
		document.querySelector("#desc2").innerText=daily_description[2];
		document.querySelector("#day3").src="https://openweathermap.org/img/wn/"+daily_icon[3]+".png";
		document.querySelector("#desc3").innerText=daily_description[3];
		document.querySelector("#day4").src="https://openweathermap.org/img/wn/"+daily_icon[4]+".png";
		document.querySelector("#desc4").innerText=daily_description[4];
		document.querySelector("#day5").src="https://openweathermap.org/img/wn/"+daily_icon[5]+".png";
		document.querySelector("#desc5").innerText=daily_description[5];
		document.querySelector("#day6").src="https://openweathermap.org/img/wn/"+daily_icon[6]+".png";
		document.querySelector("#desc6").innerText=daily_description[6];
		document.querySelector("#day7").src="https://openweathermap.org/img/wn/"+daily_icon[7]+".png";
		document.querySelector("#desc7").innerText=daily_description[7];
		
		console.log(daily_description,date)
		
		
		
		
}

   


