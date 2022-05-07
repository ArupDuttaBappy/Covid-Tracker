window.addEventListener("load", () => {

  let radio_input = 2;
  let type = 0;
  let radiobtn = document.getElementById("radio_last_all_data");
  radiobtn.checked = true;
  let country_name;

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
    country_name = key_cache;
    covid_stat.destroy(); // destroy chart
    homepage_country_data_fetch(key_cache, radio_input, type);
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
        country_name = e.target.innerText;
        homepage_country_data_fetch(e.target.innerText, radio_input, type);
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
        country_name = e.target.innerText;
        homepage_country_data_fetch(e.target.innerText, radio_input, type);
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
        homepage_country_data_fetch(country_name, radio_input, type);
      })
      .catch(error => console.log('error', error));
    }

    user_location_country_fetch();

    async function homepage_country_data_fetch(country_name, radio_input, type) {
      let preformat_cases_list = [];
      let preformat_deaths_list = [];
      let preformat_recovered_list = [];
      let cases_list = [];
      let deaths_list = [];
      let recovered_list = [];
      let dates = [];

      wait_and_load_func();

      fetch(`https://api.covid19api.com/total/country/${country_name}/status/confirmed`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            preformat_cases_list.push(data.Cases);
            dates.push(format_date_for_chart(data.Date));
          });
          // console.log('cases_list',cases_list);
          hometab_country_name_selector.innerHTML = country_name || "Not Found!";
          hometab_total_cases_selector.innerHTML = preformat_cases_list[preformat_cases_list.length - 1] || "0";
          hometab_new_cases_selector.innerHTML = (preformat_cases_list[preformat_cases_list.length - 1] - preformat_cases_list[preformat_cases_list.length - 2]) || "0";
          for (let i = 1; i < preformat_cases_list.length; i++) {
            cases_list[i] = preformat_cases_list[i] - preformat_cases_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

      await fetch(`https://api.covid19api.com/total/country/${country_name}/status/deaths`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            preformat_deaths_list.push(data.Cases);
          });
          // console.log('deaths_list',deaths_list);
          hometab_total_deaths_selector.innerHTML = preformat_deaths_list[preformat_deaths_list.length - 1] || "0";
          hometab_new_deaths_selector.innerHTML = (preformat_deaths_list[preformat_deaths_list.length - 1] - preformat_deaths_list[preformat_deaths_list.length - 2]) || "0";
          for (let i = 1; i < preformat_deaths_list.length; i++) {
            deaths_list[i] = preformat_deaths_list[i] - preformat_deaths_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

      await fetch(`https://api.covid19api.com/total/country/${country_name}/status/recovered`)
        .then(response => response.json())
        .then(data => {
          data.forEach((data) => {
            preformat_recovered_list.push(data.Cases);
          });
          // console.log('recovered_list',recovered_list);
          hometab_total_recovered_selector.innerHTML = preformat_recovered_list[preformat_recovered_list.length - 1] || "0";
          hometab_new_recovered_selector.innerHTML = (preformat_recovered_list[preformat_recovered_list.length - 1] - preformat_recovered_list[preformat_recovered_list.length - 2]) || "0";
          for (let i = 1; i < preformat_recovered_list.length; i++) {
            recovered_list[i] = preformat_recovered_list[i] - preformat_recovered_list[i-1];
          }
        })
        .catch(error => console.log('error', error));

        // chart.js script
        if (radio_input == 2) {
          radiobtn = document.getElementById("radio_last_all_data");
          radiobtn.checked = true;

          generate_chart_from_fetch_data(cases_list, deaths_list, recovered_list, dates, type);
        }
        else if (radio_input == 30) {
          radiobtn = document.getElementById("radio_last_30_days");
          radiobtn.checked = true;

          let short_cases_list = [];
          let short_deaths_list = [];
          let short_recovered_list = [];
          let short_dates = [];
          let j = 0;
          for(let i = dates.length - 31; i < dates.length; i++) {
            short_cases_list[j] = cases_list[i];
            short_deaths_list[j] = deaths_list[i];
            short_recovered_list[j] = recovered_list[i];
            short_dates[j] = dates[i];
            j++;
          }
          generate_chart_from_fetch_data(short_cases_list, short_deaths_list, short_recovered_list, short_dates, type);
        }
        else if (radio_input == 180) {
          radiobtn = document.getElementById("radio_last_6_months");
          radiobtn.checked = true;

          let short_cases_list = [];
          let short_deaths_list = [];
          let short_recovered_list = [];
          let short_dates = [];
          let j = 0;
          for(let i = dates.length - 181; i < dates.length; i++) {
            short_cases_list[j] = cases_list[i];
            short_deaths_list[j] = deaths_list[i];
            short_recovered_list[j] = recovered_list[i];
            short_dates[j] = dates[i];
            j++;
          }
          generate_chart_from_fetch_data(short_cases_list, short_deaths_list, short_recovered_list, short_dates, type);
        }
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
      covid_stat.destroy();
      user_location_country_fetch();
      click_change_to_other_country_selector.classList.toggle("d-none");
      click_change_to_my_country_selector.classList.toggle("d-none");
    });
    //  change country, ends


    //   radio
    let nodeList2 = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < nodeList2.length; i++) {
      nodeList2[i].addEventListener ("click", (e) => {
        covid_stat.destroy();
        let radio_input = e.target.value;
        homepage_country_data_fetch(country_name, radio_input, type);
      });
    }
    //  radio


    //  Chart-JS starts
    function generate_chart_from_fetch_data(cases_list, deaths_list, recovered_list, dates, type) {
      if (type == 0) {
        const ctx = document.getElementById('covid_stat_chart').getContext('2d');
      }
      else if (type == 1) {
        const ctx = document.getElementById('country_specified_stat').getContext('2d');
      }

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
      let sortable_country_matrix = new Array(total_countries).fill(0).map(() => new Array(8).fill(0));
      let i = 0;
      data.Countries.forEach(data => {
        sortable_country_matrix[i][0] = data.Country;
        sortable_country_matrix[i][1] = data.NewConfirmed;
        sortable_country_matrix[i][2] = data.TotalConfirmed;
        sortable_country_matrix[i][3] = data.NewDeaths;
        sortable_country_matrix[i][4] = data.TotalDeaths;
        sortable_country_matrix[i][5] = data.NewRecovered;
        sortable_country_matrix[i][6] = data.TotalRecovered;
        sortable_country_matrix[i][7] = data.CountryCode;
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
        let country_code = sortable_country_matrix[i][7];
        country_code = country_code.toLowerCase();
        country_table_row.innerHTML += `<tr class="country_list_row">
        <th scope="row" class="p-2"><div class="flag flag-${country_code}"></div>  ${sortable_country_matrix[i][0]}</th>
        <td class="d-none">${sortable_country_matrix[i][0]}</td>
        <td>${sortable_country_matrix[i][1]}</td>
        <td>${sortable_country_matrix[i][2]}</td>
        <td>${sortable_country_matrix[i][3]}</td>
        <td>${sortable_country_matrix[i][4]}</td>
        <td>${sortable_country_matrix[i][5]}</td>
        <td>${sortable_country_matrix[i][6]}</td>
        </tr>`;
      }

      let nodeList3 = document.querySelectorAll(".country_list_row");
      for (let i = 0; i < nodeList3.length; i++) {
        nodeList3[i].addEventListener ("click", (e) => {
          let country_specified = e.target.parentNode.children[1].innerHTML;
          console.log(country_specified);
          covid_stat.destroy();
          homepage_country_data_fetch(country_specified, 2, 1);
        });
      }
    })
    .catch(error => console.log('error', error));
  });
  //  Country List Tab ends
