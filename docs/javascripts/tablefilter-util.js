document$.subscribe(function() {
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
      var tf = new TableFilter(table, {
        base_path: 'https://unpkg.com/browse/tablefilter@0.7.2/dist/tablefilter/'
      })
      tf.init()
    })
  })
  

//   var tf = new TableFilter(document.querySelector('.my-table'), {
//     base_path: 'path/to/my/scripts/tablefilter/'
// });
// tf.init();