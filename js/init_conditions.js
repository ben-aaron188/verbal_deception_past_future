//$.ajaxSetup({ async: false });


var n_per_condition = 10;

var condition1 = new Array(n_per_condition).fill(1);
var condition2 = new Array(n_per_condition).fill(2);
var condition3 = new Array(n_per_condition).fill(3);
var condition4 = new Array(n_per_condition).fill(4);

var all_conditions = shuffle([].concat.apply([], [condition1, condition2, condition3, condition4]));

var all_conditions = [].concat.apply([], [condition1, condition2, condition3, condition4]);


function bunch_set_conditions(array_with_conditions) {
    $(array_with_conditions).each(function(i, eli) {
        console.log(eli, i);    
        init_conditions_in_db(eli, 0);
    })
}

//bunch_set_conditions(all_conditions);

//$.ajaxSetup({ async: true });


function shuffle(array) {
    var newarr = [];
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        newarr[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return newarr;
}
