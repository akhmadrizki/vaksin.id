const selectedProvince = document.querySelector("#selectProvinsi");
const selectedCity = document.querySelector("#selectCity");
const submitButton = document.querySelector("#submitButton");
let provinceData = [];
let p = '';
let c = '';

function fetchProvinceData() {
  fetch("https://api.vaksinasi.id/regions")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      provinceData = data.data;
      console.log(provinceData);
      const province = data.data
        .map((data) => {
          return `
          <option> ${data.province} </option>
          `;
        })
        .join("");
      document
        .querySelector("#selectProvinsi")
        .insertAdjacentHTML("afterbegin", province);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getCity (province) {
  let tempCity;
  for (i = 0; i < provinceData.length; i++) {
    if (provinceData[i].province === province) {
      tempCity = provinceData[i].city
        .map((city) => {
          return `
        <option> ${city} </option>
        `;
        })
        .join("");
    }
  };
  console.log(tempCity);
  document
    .querySelector("#selectCity")
    .insertAdjacentHTML("afterbegin", tempCity);
}

selectedProvince.addEventListener("change", (event) => {
  p = event.target.value;
  getCity(event.target.value);
})

selectedCity.addEventListener("change", (event) => {
  c = event.target.value;
})

submitButton.addEventListener("click", (event) => {
  window.location.href = `../list.html?city=${c}&province=${p}`;
})


fetchProvinceData();