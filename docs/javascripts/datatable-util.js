document$.subscribe(function() {
  $("table").each(function(){
      console.log($(this))
      $(this).DataTable({
        columns: [
          {
              render: function(data, type, row, meta) {
                  // if (row['cost'] && row['unit'] && row['exrate'] !== null && data == null) {
                  //     return (row['cost'] / row['exrate'] / row['unit']).toFixed(2);
                  // } else {
                  // return (data == null) ? "" : "£" + data;
                  // }
                  console.log(data)
              }
          },
        ]
      });
  });
})
  