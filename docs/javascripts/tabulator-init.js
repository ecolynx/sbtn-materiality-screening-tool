
//define some sample data
// var tabledata = [
//   { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "12/08/2017" },
//   { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
//   { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
//   { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
//   { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
// ];

//create Tabulator on DOM element with id "example-table"
//const table = (tabledata) => new Tabulator("#example-table", {
const table = new Tabulator("#example-table", {
  //height: 480, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  //data: tabledata, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  //autoColumns: true,
  placeholder: "Loading...",
  // columns: [ //Define Table Columns
  //   { title: "Name", field: "name", width: 150 },
  //   { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
  //   { title: "Favourite Color", field: "col" },
  //   { title: "Date Of Birth", field: "dob", sorter: "date", hozAlign: "center" },
  // ],
  //groupBy: "impact",
  columns: [
    { title: "Isic Section", field: "isic_section", headerFilter: "input" },
    { title: "Isic Division", field: "isic_division", headerFilter: "input" },
    { title: "Isic Group", field: "isic_group", headerFilter: "input" },
    { title: "Production Process", field: "production_process", headerFilter: "input" },
    { title: "Impact", field: "impact" },
  ],
  pagination: true,
  paginationSize: 12,
  // groupBy: "Nature-related issue area",
  // columns: [
  //   //{ title: "Issue", field: "Nature-related issue area", headerFilter: "input" },
  //   { title: "Pressure", field: "Pressure category", headerFilter: "input" },
  //   { title: "Definition", field: "Definition", headerFilter: "input" },
  // ],
});


fetch('/assets/data/full-materiality-dataset.json')
  //fetch('/assets/data/encore-pressure-categories.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    table.setData(data)
  })
  .catch(error => console.log(error));


// pressure categories
const pressuresTable = new Tabulator("#pressure-categories-table", {
  //layout: "fitDataStretch",
  placeholder: "Loading...",
  groupBy: "Nature-related issue area",
  columns: [
    //{ title: "Issue", field: "Nature-related issue area", headerFilter: "input" },
    { title: "Pressure Category", field: "Pressure category" },
    { title: "Scope", field: "Scope", hozAlign: "center", formatter: "tickCross", headerFilter: "tickCross", headerFilterParams: { tristate: true } },
    { title: "Definition", field: "Definition" },
  ],
});

// materiality thresholds
const thresholdsTable = new Tabulator("#materiality-thresholds-table", {
  layout: "fitColumns", //fit columns to width of table (optional)
  placeholder: "Loading...",
  groupBy: "Nature-related issue area",
  columns: [
    //{ title: "Issue", field: "Nature-related issue area", headerFilter: "input" },
    { title: "Pressure Category", field: "Pressure category" },
    { title: "Threshold", field: "Threshold" },
  ],
});

fetch('/assets/data/encore-pressure-categories.json')
  .then(response => response.json())
  .then(data => {
    pressuresTable.setData(data);
    thresholdsTable.setData(data);
  })
  .catch(error => console.log(error));

