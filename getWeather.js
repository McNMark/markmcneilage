const app = {
    init: () => {
        document 
            .getElementById("searchWeather")
            .addEventListener("click", app.fetchWeather);
    },
    fetchWeather: (ev) => {
        let lat = document.getElementById("lat").value;
        let lon = document.getElementById("lon").value;
        let key = "196b122581410fdde2e7515cbca83789";
        let lang = "en";
        let units = "metric";
        let url = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
        
        fetch(url)
            .then((resp) => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then((data) => {
                app.showWeather(data);
            })
            .catch(console.err);
    },
    wtf: (err) => {
        console.error(err);
    },
    showWeather: (resp) => {
        const weatherResults = document.getElementById("weatherResults");
        console.log(resp);

        weatherResults.innerHTML = resp.daily
            .map((day, idx) => {
            if (idx <= 4) {
	            let pr = (day.pop*100).toFixed(2);
          	    let dt = new Date(day.dt * 1000).toDateString();
          	    let sr = new Date(day.sunrise * 1000).toLocaleTimeString();
          	    let ss = new Date(day.sunset * 1000).toLocaleTimeString();
	  	    let wicon = "";
	     	    for (var i in day.weather) {
	      		if (day.weather[i].icon === "01d") {
		  	    wicon = "<i class='fas fa-sun'></i>";
	      		} else if (day.weather[i].icon === "01n") {
                  	    wicon = "<i class='fas fa-moon'></i>";
	      		} else if (day.weather[i].icon === "02d") {
                  	    wicon = "<i class='fas fa-cloud-sun'></i>";
	     	 	} else if (day.weather[i].icon === "02n") {
	     		    wicon = "<i class='fas fa-cloud-moon'></i>";
	      		} else if (day.weather[i].icon === "03d") {
                  	    wicon = "<i class='fas fa-cloud'></i>";
	      		} else if (day.weather[i].icon === "03n") {
	          	    wicon = "<i class='fas fa-cloud'></i>";
	      		} else if (day.weather[i].icon === "04d") {
                  	    wicon = "<i class='fas fa-cloud'></i>";
	      		} else if (day.weather[i].icon === "04n") {
	          	    wicon = "<i class='fas fa-cloud'></i>";
	      		} else if (day.weather[i].icon === "09d") {
                  	    wicon = "<i class='fas fa-cloud-sun-rain'></i>";
	      		} else if (day.weather[i].icon === "09n") {
	          	    wicon = "<i class='fas fa-cloud-sun-rain'></i>";
	      		} else if (day.weather[i].icon === "10d") {
	          	    wicon = "<i class='fas fa-cloud-rain'></i>";
	      		} else if (day.weather[i].icon === "10n") {
                  	    wicon = "<i class='fas fa-cloud-rain'></i>";
	      		} else if (day.weather[i].icon === "11d") {
	          	    wicon = "<i class='fas fa-thunderstorm'></i>";
	      		} else if (day.weather[i].icon === "11n") {
		  	    wicon = "<i class='fas fa-thunderstorm'></i>";
	      		} else if (day.weather[i].icon === "13d") {
                  	    wicon = "<i class='fas fa-snowflake'></i>";
	      		} else if (day.weather[i].icon === "13n") {
	          	    wicon = "<i class='fas fa-snowflake'></i>";
	      		} else if (day.weather[i].icon === "50d") {
                  	    wicon = "<i class='fas fa-smog'></i>";
	      		} else if (day.weather[i].icon === "50n") {
	          	    wicon = "<i class='fas fa-smog'></i>";
	      		}
	  	    }
          	    let day_temp_col = "";
	  	    let day_temp_font = "";
          	    let day_fl_temp_col = "";
	  	    let day_fl_temp_font = "";
          	    let night_fl_temp_col = "";
	  	    let night_fl_temp_font = "";
	            if (day.temp.max >= 30) {
	      		day_temp_col = "#EE2800";
	      		day_temp_font = "#FFFFFF";
	  	    } else if (day.temp.max >= 25 && day.temp.max < 30) {
	      		day_temp_col = "#EE6600";
	      		day_temp_font = "#FFFFFF";
	  	    } else if (day.temp.max >= 15 && day.temp.max < 25) {
	      		day_temp_col = "#FFCC33";
	      		day_temp_font = "#000000";
	  	    } else if (day.temp.max >= 0 && day.temp.max < 15) {
	      		day_temp_col = "#FFFF99";
	      		day_temp_font = "#000000";
	  	    } else if (day.temp.max < 0) {
	      		day_temp_col = "#00A3E0";
	      		day_temp_font = "#FFFFFF";
	  	    }
	  	    if (day.feels_like.day >= 30) {
	      		day_fl_temp_col = "#EE2800";
	      		day_fl_temp_font = "#FFFFFF";
	  	    } else if (day.feels_like.day >= 25 && day.feels_like.day < 30) {
	      		day_fl_temp_col = "#EE6600";
	      		day_fl_temp_font = "#FFFFFF";
	  	    } else if (day.feels_like.day >= 15 && day.feels_like.day < 25) {
	      		day_fl_temp_col = "#FFCC33";
	      		day_fl_temp_font = "#000000";
	  	    } else if (day.feels_like.day >= 0 && day.feels_like.day < 15) {
	      		day_fl_temp_col = "#FFFF99";
	      		day_fl_temp_font = "#000000";
	  	    } else if (day.feels_like.day < 0) {
	      		day_fl_temp_col = "#00A3E0";
	      		day_fl_temp_font = "#FFFFFF";
	  	    }
	  	    if (day.feels_like.night >= 30) {
	      		night_fl_temp_col = "#EE2800";
	      		night_fl_temp_font = "#FFFFFF";
	            } else if (day.feels_like.night >= 25 && day.feels_like.night < 30) {
	      		night_fl_temp_col = "#EE6600";
	      		night_fl_temp_font = "#FFFFFF";
	  	    } else if (day.feels_like.night >= 15 && day.feels_like.night < 25) {
	      		night_fl_temp_col = "#FFCC33";
	      		night_fl_temp_font = "#000000";
	  	    } else if (day.feels_like.night >= 0 && day.feels_like.night < 15) {
	      		night_fl_temp_col = "#FFFF99";
	      		night_fl_temp_font = "#000000";
	 	    } else if (day.feels_like.night < 0) {
	      		night_fl_temp_col = "#00A3E0";
	      		night_fl_temp_font = "#FFFFFF";
	  	    }
          	    let day_wind_dir = "";
	  	    if ((day.wind_deg) >= 348.76) {
	     		day_wind_dir = "N";
	  	    } else if ((day.wind_deg) >= 0 && (day.wind_deg) <= 11.25) {
	     		day_wind_dir = "N";
	  	    } else if ((day.wind_deg) >= 11.26 && (day.wind_deg) <= 33.75) {
	     		day_wind_dir = "N/NE";
	  	    } else if ((day.wind_deg) >= 33.76 && (day.wind_deg) <= 56.25) {
	     		day_wind_dir = "NE";
	  	    } else if ((day.wind_deg) >= 56.26 && (day.wind_deg) <= 78.75) {
	     		day_wind_dir = "E/NE";
	 	    } else if ((day.wind_deg) >= 78.76 && (day.wind_deg) <= 101.25) {
	     		day_wind_dir = "E";
	  	    } else if ((day.wind_deg) >= 101.26 && (day.wind_deg) <= 123.75) {
	     		day_wind_dir = "E/SE";
	  	    } else if ((day.wind_deg) >= 123.76 && (day.wind_deg) <= 146.25) {
	     		day_wind_dir = "SE";
	  	    } else if ((day.wind_deg) >= 146.26 && (day.wind_deg) <= 168.75) {
	     		day_wind_dir = "S/SE";
	  	    } else if ((day.wind_deg) >= 168.76 && (day.wind_deg) <= 191.25) {
	     		day_wind_dir = "S";
	  	    } else if ((day.wind_deg) >= 191.26 && (day.wind_deg) <= 213.75) {
	     		day_wind_dir = "S/SW";
	  	    } else if ((day.wind_deg) >= 213.76 && (day.wind_deg) <= 236.25) {
	     		day_wind_dir = "SW";
	  	    } else if ((day.wind_deg) >= 236.26 && (day.wind_deg) <= 258.75) {
	     		day_wind_dir = "W/SW";
	 	    } else if ((day.wind_deg) >= 258.76 && (day.wind_deg) <= 281.25) {
	     		day_wind_dir = "W";
	  	    } else if ((day.wind_deg) >= 281.26 && (day.wind_deg) <= 303.75) {
	     		day_wind_dir = "W/NW";
	  	    } else if ((day.wind_deg) >= 303.76 && (day.wind_deg) <= 326.25) {
	     		day_wind_dir = "NW";
	            } else if ((day.wind_deg) >= 326.26 && (day.wind_deg) <= 348.75) {
	     		day_wind_dir = "N/NW";
	  	    }
          	    return `<div class="weathercol">
	      		<div class="weather-int">
                   	    <h2 style="text-align:center;padding:0.75em;">${dt}</h2>
	          	    <p style="font-size:32px;text-align:center;">${wicon}</p>
                  	    <p style="text-align:center;"><b>${day.weather[0].main}</b>: ${day.weather[0].description}</p>
	                </div>
	      		<div class="weather-std">
                  	    <p>
		      		<div style="
			  	    text-align:center;
			  	    color:${day_temp_font};
			  	    background-color:${day_temp_col};
			  	    padding:0.5em;
		      		">
		          	    <i class="fas fa-temperature-high"></i> 
		          	    ${day.temp.max}&deg;C<br>
		          	    <i class="fas fa-temperature-low"></i> 
		          	    ${day.temp.min}&deg;C
		      		</div>
		      		<div style="
			  	    text-align:center;
			  	    color:${day_fl_temp_font};
			  	    background-color:${day_fl_temp_col};
			  	    padding:0.5em 0.5em 0 0.5em;
		      		">
		          	    <i class="fas fa-sun"></i>
			  	    <i class="fas fa-temperature-high"></i> 
		          	    ${day.feels_like.day}&deg;C<br>
		      		</div>
		      		<div style="
			  	    text-align:center;
			  	    color:${night_fl_temp_font};
			  	    background-color:${night_fl_temp_col};
			  	    padding:0 0.5em 0.5em 0.5em;
		      	        ">
		          	    <i class="fas fa-moon"></i>
			  	    <i class="fas fa-temperature-high"></i> 
		          	    ${day.feels_like.night}&deg;C
		      	        </div>
		  	    </p>
                  	    <p>
		      		<div style="
			  	    text-align:center;
		      		">
		          	    <i class="fas fa-cloud-rain"></i> 
		          	    ${pr}%<br>
		      		</div>
		  	    </p>
		  	    <p>
		      	        <div style="
			  	    text-align:center;
		      		">
			  	    <b>${day_wind_dir}</b>
			  	    <div style="transform:rotate(${-45 + 180 + day.wind_deg}deg);">
			      		<i class="fa-solid fa-location-arrow"></i>
			  	    </div>
		          	    <small>
			      		<i class="fas fa-wind"></i> 
		              		${day.wind_speed}m/s &#64; ${day.wind_deg}&deg;
			  	    </small>
		      		</div>
		  	    </p>
              		</div>
              		<div class="weather-atm">
		  	    <p>
                      	        <b>Pressure</b>: ${day.pressure}mb<br>
                      		<b>Humidity</b>: ${day.humidity}%<br>
                      		<b>Dewpoint</b>: ${day.dew_point}<br>
                      		<b>UV Index</b>: ${day.uvi}
		  	    </p>
	      		</div>
	      		<div class="weather-dyt">
                  	    <p>
		      		<div style="
			  	    text-align:center;
		      		">
		          	    <i class="fas fa-sun"></i>
		          	    ${sr}<br>
		          	    <i class="fas fa-moon"></i>
		          	    ${ss}
				</div>
		  	    </p>
              	        </div>
          	    </div>`;
        	}
      	    }).join(" ");
    },
};

app.init();