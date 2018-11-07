
const coinDesk = axios.create({
    baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json'
  })

const data = coinDesk.get()
    .then(data => {
        console.log(data.data.bpi)
        printTheChart(data.data.bpi);
    })
    .catch( error => {
        console.log(error);
    });

let printTheChart = (data => {
    console.log("from print the chart:", Object.keys(data));
  let date = Object.keys(data);
  let price = Object.values(data);
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: price,
      }]
    }
  });
});
