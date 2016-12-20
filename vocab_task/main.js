function init_language_task1(ID, time) {
    var listen = true;
    ID.keydown(function(e) {
        if (listen === true) {
            listen = false;
            setTimeout(function() {
                // to_final_control1();
                to_outro();
            }, time);
        }
    });
}

function init_language_task1_2(ID, time) {
    var listen = true;
    // ID.keydown(function(e) {
    setTimeout(function(){
      if (listen === true) {
          listen = false;
          setTimeout(function() {
              // to_final_control1();
              to_outro();
          }, time);
      }
    }, 5000);        
    // });
}
