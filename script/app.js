window.addEventListener("load", () => {

  //  navbar search
  document.getElementById("navbar_search_country_input").addEventListener("keyup", () => {
    document.getElementById("navbar_search_dropdown_tbody").innerHTML = "";
    let keytyped_input = document.getElementById("navbar_search_country_input").value.toUpperCase();
    country_list.forEach(data => {
      if(data.Country.toUpperCase().includes(keytyped_input)) {
        populate_search_dropdown(data.Country);
      }
    });
    add_eventlistener_to_search_dropdown_elements();
  });

  navbar_search_country_input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  document.getElementById("navbar_search_country_btn").addEventListener("click", (e) => {
    e.preventDefault();
    let key_cache = document.getElementById('navbar_search_country_input').value;
    covid_stat.destroy(); // destroy chart
    homepage_country_data_fetch(key_cache);
  });

  document.getElementById("navbar_search_dropdown_tbody").innerHTML = "";

  function populate_search_dropdown(country) {
    document.getElementById("navbar_search_dropdown_tbody").innerHTML += `
    <tr class="search_dropdown_element">
      <th>${country}</th>
    </tr>
    `;
  }

  function add_eventlistener_to_search_dropdown_elements() {
    let nodeList = document.querySelectorAll(".search_dropdown_element");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener ("click", (e) => {
        covid_stat.destroy();
        homepage_country_data_fetch(e.target.innerText);
        document.getElementById("navbar_search_country_input").value = e.target.innerText;
        document.getElementById("navbar_search_dropdown_div").classList.add("d-none");
      });
    }
  }

  country_list.forEach(data => {
    populate_search_dropdown(data.Country);
    add_eventlistener_to_search_dropdown_elements();
  });

  document.getElementById("navbar_search_country_input").addEventListener('focus', () => {
    document.getElementById("navbar_search_dropdown_div").classList.remove("d-none");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#navbar_search_div")) {
      document.getElementById("navbar_search_country_input").value = "";
      document.getElementById("navbar_search_dropdown_div").classList.add("d-none");
    }
  });
  //  navbar search


  //  homepage highlights
  let hometab_country_name_selector = document.getElementById('hometab_country_name');
  let hometab_total_cases_selector = document.getElementById('hometab_total_cases');
  let hometab_new_cases_selector = document.getElementById('hometab_new_cases');
  let hometab_total_deaths_selector = document.getElementById('hometab_total_deaths');
  let hometab_new_deaths_selector = document.getElementById('hometab_new_deaths');
  let hometab_total_recovered_selector = document.getElementById('hometab_total_recovered');
  let hometab_new_recovered_selector = document.getElementById('hometab_new_recovered');
  let country_name;
  let api_key = config.secret_api_key;
  let covid_stat;

  // modal -- starts
  document.getElementById("select_country_modal_body").innerHTML = "";

  function populate_modal(country) {
    document.getElementById("select_country_modal_body").innerHTML += `
    <div class='country_modal_element col-3 mx-3 my-1 px-3 border border-secondary rounded'>
    ${country}
    </div>
    `;
  }

  document.getElementById("select_country_modal_search_input").addEventListener("keyup", () => {
    document.getElementById("select_country_modal_body").innerHTML = "";
    let keytyped_input = document.getElementById("select_country_modal_search_input").value.toUpperCase();
    country_list.forEach(data => {
      if(data.Country.toUpperCase().includes(keytyped_input)) {
        populate_modal(data.Country);
      }
    });
    add_eventlistener_to_modal_elements();
  });

  select_country_modal_search_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // alert(event.key  + " " + event.which);
      event.preventDefault();
    }
  });

  country_list.forEach(data => {
    populate_modal(data.Country);
    add_eventlistener_to_modal_elements();
  });

  function add_eventlistener_to_modal_elements() {
    let nodeList = document.querySelectorAll(".country_modal_element");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener ("click", (e) => {
        document.getElementById("select_country_modal_close").click();
        covid_stat.destroy();
        homepage_country_data_fetch(e.target.innerText);
      });
    }
  }
  // modal -- ends


  function wait_and_load_func() {
    let intercontent_countryname = `<div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`
    hometab_country_name_selector.innerHTML = intercontent_countryname;

    let intercontent_totalcases = `<div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`
    hometab_total_cases_selector.innerHTML = intercontent_totalcases;

    let intercontent_totaldeaths = `<div class="spinner-border text-danger" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`
    hometab_total_deaths_selector.innerHTML = intercontent_totaldeaths;

    let intercontent_totalrecovered = `<div class="spinner-border text-success" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`
    hometab_total_recovered_selector.innerHTML = intercontent_totalrecovered;
  };


  function user_location_country_fetch() {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}`)
      .then(response => response.json())
      .then(data => {
        country_name = data.country_name;
        homepage_country_data_fetch(country_name);
      })
      .catch(error => console.log('error', error));
    }

    user_location_country_fetch();

    async function homepage_country_data_fetch(country_name) {
      let cases_list = [];
      let deaths_list = [];
      let recovered_list = [];
      let dates = [];

      wait_and_load_func();

      fetch(`https://api.covid19api.com/total/country/${country_name}/status/confirmed`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            cases_list.push(data.Cases);
            dates.push(format_date_for_chart(data.Date));
          });
          // console.log('cases_list',cases_list);
          hometab_country_name_selector.innerHTML = country_name || "Not Found!";
          hometab_total_cases_selector.innerHTML = cases_list[cases_list.length - 1] || "0";
          hometab_new_cases_selector.innerHTML = (cases_list[cases_list.length - 1] - cases_list[cases_list.length - 2]) || "0";
          for (let i = 1; i < cases_list.length; i++) {
            cases_list[i] = cases_list[i] - cases_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

      await fetch(`https://api.covid19api.com/total/country/${country_name}/status/deaths`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            deaths_list.push(data.Cases);
          });
          // console.log('deaths_list',deaths_list);
          hometab_total_deaths_selector.innerHTML = deaths_list[deaths_list.length - 1] || "0";
          hometab_new_deaths_selector.innerHTML = (deaths_list[deaths_list.length - 1] - deaths_list[deaths_list.length - 2]) || "0";
          for (let i = 1; i < deaths_list.length; i++) {
            deaths_list[i] = deaths_list[i] - deaths_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

      await fetch(`https://api.covid19api.com/total/country/${country_name}/status/recovered`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            recovered_list.push(data.Cases);
          });
          // console.log('recovered_list',recovered_list);
          hometab_total_recovered_selector.innerHTML = recovered_list[recovered_list.length - 1] || "0";
          hometab_new_recovered_selector.innerHTML = (recovered_list[recovered_list.length - 1] - recovered_list[recovered_list.length - 2]) || "0";
          for (let i = 1; i < recovered_list.length; i++) {
            recovered_list[i] = recovered_list[i] - recovered_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

        // chart.js script
        console.log(cases_list, deaths_list, recovered_list, dates);
        generate_chart_from_fetch_data(cases_list, deaths_list, recovered_list, dates);
        // cases_list, deaths_list, recovered_list, dates
    }

    function format_date_for_chart(fetchdate) {
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      let date = new Date(fetchdate);
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    //  homepage highlights


    //  change country, starts
    let click_change_to_other_country_selector = document.getElementById('click_change_to_other_country');
    let click_change_to_my_country_selector = document.getElementById('click_change_to_my_country');
    let other_country_text_selector = document.getElementById('other_country_text');
    let my_country_text_selector = document.getElementById('my_country_text');

    click_change_to_other_country_selector.addEventListener("mouseover", () => {
      other_country_text_selector.classList.remove("d-none");
      setTimeout(() => {
        other_country_text_selector.classList.add("d-none");
      }, 3500);
    });

    click_change_to_my_country_selector.addEventListener("mouseover", () => {
      my_country_text_selector.classList.remove("d-none");
      setTimeout(() => {
        my_country_text_selector.classList.add("d-none");
      }, 3500);
    });

    click_change_to_other_country_selector.addEventListener("click", () => {
      click_change_to_other_country_selector.classList.toggle("d-none");
      click_change_to_my_country_selector.classList.toggle("d-none");
      document.getElementById("select_country_modal_search_input").value = '';
      country_list.forEach(data => {
        populate_modal(data.Country);
        add_eventlistener_to_modal_elements();
      });
    });

    click_change_to_my_country_selector.addEventListener("click", () => {
      user_location_country_fetch();
      click_change_to_other_country_selector.classList.toggle("d-none");
      click_change_to_my_country_selector.classList.toggle("d-none");
    });
    //  change country, ends


    //  Chart-JS starts
    function generate_chart_from_fetch_data(cases_list, deaths_list, recovered_list, dates) {
      const ctx = document.getElementById('covid_stat_chart').getContext('2d');
      covid_stat = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          smooth: false,
          datasets: [{
            label: '# of Cases',
            data: cases_list,
            backgroundColor: "#0033cc",
            borderColor: "#0033cc",
            borderWidth: 1
          },
          {
            label: '# of Deaths',
            data: deaths_list,
            backgroundColor: "#cc0000",
            borderColor: "#cc0000",
            borderWidth: 1
          }]
        },
        options: {
          elements: {
            point:{
              radius: 0
            }
          },
          scales: {
            x: {
              grid: {
                color: '#c2c2d6',
                borderColor: 'black',
                borderWidth: 2,

              },
              title: {
                display: true,
                color: 'black',
                text: 'Dates',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              }
            },
            y: {
              grid: {
                color: '#c2c2d6',
                borderColor: 'black',
                borderWidth: 2,
              },
              title: {
                display: true,
                color: 'black',
                text: 'Cases',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              },
              beginAtZero: true
            }
          },
          responsive: true,
          plugins: {
            tooltip: {
              mode: 'index',
              axis: 'xy',
              position: 'nearest',
              intersect: false
            },
            legend: {
              position: 'top',
            },
            title: {
              display: false,
              text: "Situation Summary"
            }
          }
        }
      });
    }
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
  });
  //  Country List Tab ends
