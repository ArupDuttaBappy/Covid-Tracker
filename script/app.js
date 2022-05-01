var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.json())
  .then(data => {
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
    console.log('data', data);
    console.log('sortable_country_matrix', sortable_country_matrix)
  })
  .catch(error => console.log('error', error));
