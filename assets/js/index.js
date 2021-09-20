function fetchData() {
  fetch("https://api.vaksinasi.id/regions")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        .map((data) => {
          return `
          <option> ${data.province} </option>
          `;
        })
        .join("");
      document
        .querySelector("#selectProvinsi")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
