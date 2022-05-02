
//  homepage highlights
let hometab_country_name_selector = document.getElementById('hometab_country_name');
let hometab_total_cases_selector = document.getElementById('hometab_total_cases');
let hometab_new_cases_selector = document.getElementById('hometab_new_cases');
let hometab_total_deaths_selector = document.getElementById('hometab_total_deaths');
let hometab_new_deaths_selector = document.getElementById('hometab_new_deaths');
let hometab_total_recovered_selector = document.getElementById('hometab_total_recovered');
let hometab_new_recovered_selector = document.getElementById('hometab_new_recovered');

let country_name = "Bangladesh";
let cases_list = [];
let deaths_list = [];
let recovered_list = [];
let dates = [];
let api_key = config.secret_api_key;

async function loc_country_fetch() {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}`)
  .then(response => response.json())
  .then(data => {
    country_name = data.country_name;
    homepage_country_data_fetch(country_name);
  })
  .catch(error => console.log('error', error));
}

loc_country_fetch(config.secret_api_key);

async function homepage_country_data_fetch(country_name) {
  fetch(`https://api.covid19api.com/total/country/${country_name}/status/confirmed`)
    .then(response => response.json())
    .then(data => {
      data.forEach((data) => {
        cases_list.push(data.Cases);
        dates.push(format_date_for_chart(data.Date));
      });
      hometab_country_name_selector.innerHTML = country_name;
      hometab_total_cases_selector.innerHTML = cases_list[cases_list.length - 1];
      hometab_new_cases_selector.innerHTML = cases_list[cases_list.length - 1] - cases_list[cases_list.length - 2];
    })
    .catch(error => console.log('error', error));

  await fetch(`https://api.covid19api.com/total/country/${country_name}/status/deaths`)
    .then(response => response.json())
    .then(data => {
      data.forEach((data) => {
        deaths_list.push(data.Cases);
      });
      hometab_total_deaths_selector.innerHTML = deaths_list[deaths_list.length - 1];
      hometab_new_deaths_selector.innerHTML = deaths_list[deaths_list.length - 1] - deaths_list[deaths_list.length - 2];
    })
    .catch(error => console.log('error', error));

  await fetch(`https://api.covid19api.com/total/country/${country_name}/status/recovered`)
    .then(response => response.json())
    .then(data => {
      data.forEach((data) => {
        recovered_list.push(data.Cases);

      });
      hometab_total_recovered_selector.innerHTML = recovered_list[recovered_list.length - 1];
      hometab_new_recovered_selector.innerHTML = recovered_list[recovered_list.length - 1] - recovered_list[recovered_list.length - 2];
    })
    .catch(error => console.log('error', error));
}

function format_date_for_chart(fetchdate) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let date = new Date(fetchdate);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
//  homepage highlights

//  Chart-JS starts
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//  Chart-JS ends


//  Country List Tab starts
let country_table_row = document.getElementById('country_list_table_body');
let country_page;
let country_list_data;
fetch("https://api.covid19api.com/summary")
.then(response => response.json())
.then(data => {
  country_table_row.innerHTML = '';
  const total_countries = data.Countries.length;
  let sortable_country_matrix = new Array(total_countries).fill(0).map(() => new Array(7).fill(0));
  let i = 0;
  data.Countries.forEach(data => {
    sortable_country_matrix[i][0] = data.Country;
    sortable_country_matrix[i][1] = data.NewConfirmed;
    sortable_country_matrix[i][2] = data.TotalConfirmed;
    sortable_country_matrix[i][3] = data.NewDeaths;
    sortable_country_matrix[i][4] = data.TotalDeaths;
    sortable_country_matrix[i][5] = data.NewRecovered;
    sortable_country_matrix[i][6] = data.TotalRecovered;
    i++;
  });

  sortable_country_matrix.sort((a, b) => {
    // sorting ascending -> NewConfirmed + NewDeaths
    if ((a[1]+a[3]) === (b[1]+b[3])) {
      return 0;
    }
    else {
      return ((a[1]+a[3]) < (b[1]+b[3])) ? -1 : 1;
    }
  });
  for(let i = 0 ; i < total_countries ; i++) {
    country_table_row.innerHTML += `<tr>
    <th scope="row" class="p-2">${sortable_country_matrix[i][0]}</th>
    <td>${sortable_country_matrix[i][1]}</td>
    <td>${sortable_country_matrix[i][2]}</td>
    <td>${sortable_country_matrix[i][3]}</td>
    <td>${sortable_country_matrix[i][4]}</td>
    <td>${sortable_country_matrix[i][5]}</td>
    <td>${sortable_country_matrix[i][6]}</td>
    </tr>`;
  }
})
.catch(error => console.log('error', error));
//  Country List Tab ends
