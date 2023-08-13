
async function getDataset(datasetPath) {
  try {
    const response = await fetch(datasetPath);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}

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
    document.getElementById("download-summary-csv").addEventListener("click", function () {
      summaryTable.download("csv", "materiality-summary.csv");
    });

  });

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
        },
        headerFilter: "input", headerFilterPlaceholder: "Search ISIC Group",
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
      { title: "ISIC Group", field: "isic_group", widthGrow: 3, headerFilter: "input", headerFilterPlaceholder: "Search ISIC Group" },
      // { title: "Production Process", field: "production_process", visible: false, download: true },
      { title: "Impact", field: "impact", widthGrow: 1 },
      { title: "Mean Score", field: "meanscore", visible: false, download: true },
      { title: "Mean Threshold", field: "impactthreshisicgrp", visible: false, download: true },
      { title: "Average Materiality", field: "avgmateriality", hozAlign: "center", formatter: "tickCross" },
    ],
    pagination: true,
    paginationSize: 20,
    paginationCounter: "rows",
  });

  fullMaterialityTable.on("tableBuilt", () => {
    getDataset("/assets/data/full-materiality-dataset.json").then(data => {
      fullMaterialityTable.setData(data);
    });
    document.getElementById("download-full-csv").addEventListener("click", function () {
      fullMaterialityTable.download("csv", "full-materiality.csv");
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
