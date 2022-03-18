const apikey="d702660defc3b728234840c245d99fa7";
const city="Tokyo";
let lat;
let lon;
let name;
let description;
let daily_description=[];
let daily_icon=[];
let current_temp;
let icon;
let humidity;
fetchcity();
 function fetchcity(){
    /*let city = document.getElementById("cityName").value; //input from user.*/
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
  	console.log(data);
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
  		for (let i=0;i<=dailydata.length-1;i++)
  		{
  			daily_description[i]=dailydata[i].weather[0].description;
  			daily_icon[i]=dailydata[i].weather[0].icon	
  		}
  		document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
		document.querySelector(".city").innerText=name;
		document.querySelector(".description").innerText=description;
		document.querySelector("#current_temp").innerText=Math.ceil(current_temp)+"\xB0 C";
		document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";	
		document.querySelector("#day0").src="https://openweathermap.org/img/wn/"+daily_icon[0]+".png";
		document.querySelector("#desc0").innerText=daily_description[0];
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
		console.log(daily_description)
		
		
		
		
}

   


