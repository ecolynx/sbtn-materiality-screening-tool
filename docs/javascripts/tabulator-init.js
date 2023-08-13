
async function getDataset(datasetPath) {
  try {
    const response = await fetch(datasetPath);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}

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
// const table = new Tabulator("#example-table", {
//   //height: 480, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
//   //data: tabledata, //assign data to table
//   layout: "fitColumns", //fit columns to width of table (optional)
//   //autoColumns: true,
//   placeholder: "Loading...",
//   // columns: [ //Define Table Columns
//   //   { title: "Name", field: "name", width: 150 },
//   //   { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
//   //   { title: "Favourite Color", field: "col" },
//   //   { title: "Date Of Birth", field: "dob", sorter: "date", hozAlign: "center" },
//   // ],
//   //groupBy: "impact",
//   columns: [
//     { title: "Isic Section", field: "isic_section", headerFilter: "input" },
//     { title: "Isic Division", field: "isic_division", headerFilter: "input" },
//     { title: "Isic Group", field: "isic_group", headerFilter: "input" },
//     { title: "Production Process", field: "production_process", headerFilter: "input" },
//     { title: "Impact", field: "impact" },
//   ],
//   pagination: true,
//   paginationSize: 12,
//   // groupBy: "Nature-related issue area",
//   // columns: [
//   //   //{ title: "Issue", field: "Nature-related issue area", headerFilter: "input" },
//   //   { title: "Pressure", field: "Pressure category", headerFilter: "input" },
//   //   { title: "Definition", field: "Definition", headerFilter: "input" },
//   // ],
// });

//create row popup contents
var rowPopupFormatter = function (e, row, onRendered) {
  var data = row.getData(),
    container = document.createElement("div"),
    contents = "<strong style='font-size:1.2em;'>Details</strong><br/><ul style='padding:0;  margin-top:10px; margin-bottom:0;'>";
  contents += "<li><strong>ISIC Group:</strong> " + data.isic_group + "</li>";
  contents += "<li><strong>Production Process:</strong> " + data.production_process + "</li>";
  // contents += "<li><strong>Favourite Colour:</strong> " + data.col + "</li>";
  contents += "</ul>";

  container.innerHTML = contents;

  return container;
};

const impactFormatter = (cell, formatterParams, onRendered) => {
  const value = cell.getValue();
  // split underscore
  const words = value.split("_").join(" ");
  // capitalize first letter
  const capitalized = words.charAt(0).toUpperCase() + words.slice(1);
  return capitalized;
}

// Materiality Screening Table
const materialityTableId = "#materiality-screening-table";
const materialityTableDiv = document.querySelector(materialityTableId);

// Materiality Summary Table
const summaryTableId = "#materiality-summary-table";
const summaryTableDiv = document.querySelector(summaryTableId);

// load tables together
if (materialityTableDiv && summaryTableDiv) {

  const summaryTable = new Tabulator(summaryTableId, {
    layout: "fitColumns", //fit columns to width of table (optional)
    placeholder: "No Selections",
    //rowClickPopup: rowPopupFormatter, //add click popup to row
    // groupBy: (row) => {
    //   // group-process
    //   return row.isic_group + " - " + row.production_process;
    // },
    groupBy: "isic_group",
    index: "Row #",
    columns: [
      { title: "Row #", field: "Row #", visible: false },
      { title: "ISIC Group", field: "isic_group", widthGrow: 3, visible: false, download: true },
      { title: "Production Process", field: "production_process", widthGrow: 3, visible: true, download: true },
      { title: "Impact", field: "impact", widthGrow: 1, formatter: impactFormatter },
      { title: "Materiality", field: "materiality", hozAlign: "center", formatter: "tickCross" },
    ],
    pagination: true,
    paginationSize: 12,
    paginationCounter: "rows",
  });

  summaryTable.on("tableBuilt", () => {
    // getDataset("/assets/data/full-materiality-dataset.json").then(data => {
    //   summaryTable.setData(data);
    // });
    //trigger download of data.csv file
    document.getElementById("download-csv").addEventListener("click", function () {
      summaryTable.download("csv", "data.csv");
    });

  });

  // const addSummaryRow = (e, cell) => {
  //   const row = cell.getRow();
  //   // get row data
  //   const rowData = row.getData();
  //   console.log(rowData);

  //   if (row.isSelected()) {
  //     // add row to summary table
  //     summaryTable.addRow(rowData);
  //   } else {
  //     // remove row from summary table
  //     summaryTable.deleteRow(rowData['Row #']);
  //   }
  // }

  const addSummaryRow = (row) => {
    // get row data
    const rowData = row.getData();
    summaryTable.addRow(rowData);
    summaryTable.setPage("last");
  }

  const removeSummaryRow = (row) => {
    // get row data
    const rowData = row.getData();
    summaryTable.deleteRow(rowData['Row #']);
    summaryTable.setPage("last");
  }

  const materialityTable = new Tabulator(materialityTableId, {
    layout: "fitColumns", //fit columns to width of table (optional)
    //layout: "fitDataStretch",
    placeholder: "Loading...",
    selectable: true, //make rows selectable
    //rowClickPopup: rowPopupFormatter, //add click popup to row
    columns: [
      // {
      //   formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerSort: false, cellClick: function (e, cell) {
      //     console.log(cell.getRow());
      //     cell.getRow().toggleSelect();
      //   }
      // },
      {
        title: "ISIC Group", field: "isic_group", widthGrow: 3,
        cellClick: (e, cell) => {
          const row = cell.getRow();
          const isSelected = row.isSelected();
          const table = cell.getRow().getTable();
          table.getRows().filter(row => row.getData().isic_group === cell.getValue()).forEach(row => {
            if (!isSelected)
              removeSummaryRow(row);
            else
              addSummaryRow(row);
          });
        }
        , headerFilter: "input"
      },
      // { title: "Production Process", field: "production_process", headerFilter: "input" },
    ],
    pagination: true,
    paginationSize: 12,
    paginationCounter: "rows",
  });

  materialityTable.on("tableBuilt", () => {
    getDataset("/assets/data/full-materiality-dataset.json").then(data => {
      materialityTable.setData(data);
    });
    materialityTable.setFilter("filter", "=", false);
  });
}

// Full Materiality Dataset Table
const fullMaterialityTableId = "#full-materiality-table";
const fullMaterialityTableDiv = document.querySelector(fullMaterialityTableId);

if (fullMaterialityTableDiv) {

  const fullMaterialityTable = new Tabulator(fullMaterialityTableId, {
    layout: "fitColumns", //fit columns to width of table (optional)
    placeholder: "Loading...",
    //groupBy: "impact",
    columns: [
      { title: "Isic Group", field: "isic_group", headerFilter: "input" },
      { title: "Production Process", field: "production_process", headerFilter: "input" },
      { title: "Impact", field: "impact" },
    ],
    pagination: true,
    paginationSize: 20,
  });

  fullMaterialityTable.on("tableBuilt", () => {
    getDataset("/assets/data/full-materiality-dataset.json").then(data => {
      fullMaterialityTable.setData(data);
    });
  });
}

// Pressure Categories Table
const pressuresTableId = "#pressure-categories-table";
const pressuresTableDiv = document.querySelector(pressuresTableId);

if (pressuresTableDiv) {
  const pressuresTable = new Tabulator(pressuresTableId, {
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

  pressuresTable.on("tableBuilt", () => {
    getDataset("/assets/data/encore-pressure-categories.json").then(data => {
      pressuresTable.setData(data);
    });
  });
}

// Materiality Thresholds Table
const thresholdsTableId = "#materiality-thresholds-table";
const thresholdsTableDiv = document.querySelector(thresholdsTableId);

if (thresholdsTableDiv) {
  const thresholdsTable = new Tabulator(thresholdsTableId, {
    layout: "fitColumns", //fit columns to width of table (optional)
    placeholder: "Loading...",
    groupBy: "Nature-related issue area",
    columns: [
      //{ title: "Issue", field: "Nature-related issue area", headerFilter: "input" },
      { title: "Pressure Category", field: "Pressure category" },
      { title: "Threshold", field: "Threshold" },
    ],
  });

  thresholdsTable.on("tableBuilt", () => {
    getDataset("/assets/data/encore-pressure-categories.json").then(data => {
      thresholdsTable.setData(data);
    });
  });
}
