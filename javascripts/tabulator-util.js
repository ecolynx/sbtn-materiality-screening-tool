document$.subscribe(function () {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function (table) {
    var table = new Tabulator(table, {
      columns: [
        { title: "isic_section", field: "name", headerFilter: "input" },
      ],
      pagination: true,
      paginationSize: 12,
      placeholder: "Awaiting Data, Please Load File",
    })
    table.on("tableBuilt", () => {
      console.log("table built");
    });
  })
})
