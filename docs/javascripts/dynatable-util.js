document$.subscribe(function() {
    // var tables = document.querySelectorAll("article table:not([class])")
    // tables.forEach(function(table) {
    //   table.dynatable();
    // })
    
    $("table").each(function(){
        $(this).dynatable();
    });
  })
  