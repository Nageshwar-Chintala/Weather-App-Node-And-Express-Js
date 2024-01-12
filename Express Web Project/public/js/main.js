
const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const apiKey = "2d60f851731aa1b3b312ab73eb72a9a5";
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
  event.preventDefault();
  let cityValue = cityname.value;
  if (cityValue === "") {
    city_name.innerText = `Please Enter City Name To Display Results`;
    
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;

//condition to check Sunny or Cloudy
      if(tempMood == "Clear") {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if(tempMood == "Clouds") {
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHtml = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHtml = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }

      datahide.classList.remove('data_hide');

    } catch {
      city_name.innerText = `Please Enter City Name To Display Results`;
      datahide.classList.add('data_hide');
    }

  }
}
submitBtn.addEventListener('click', getInfo);