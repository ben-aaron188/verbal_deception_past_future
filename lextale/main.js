var i = 0;
var t1 = 0;
var t2 = 0;
var recodedkey = "NULL";
var Expresp = [];
var Actresp = [];
var Stim = [];
var Status = [];
var RespTime = [];
var CorNW = 0;
var CorW = 0;
var main_listener;
var a_and_l_listener = true;
var listen_start = true;
var listen_end = true;
var stim = [];

var stim_en = [{
    word: "platery",
    wstatus: 0
}, {
    word: "denial",
    wstatus: 1
}, {
    word: "generic",
    wstatus: 1
}, {
    word: "mensible",
    wstatus: 0
}, {
    word: "scornful",
    wstatus: 1
}, {
    word: "stoutly",
    wstatus: 1
}, {
    word: "ablaze",
    wstatus: 1
}, {
    word: "kermshaw",
    wstatus: 0
}, {
    word: "moonlit",
    wstatus: 1
}, {
    word: "lofty",
    wstatus: 1
}, {
    word: "hurricane",
    wstatus: 1
}, {
    word: "flaw",
    wstatus: 1
}, {
    word: "alberation",
    wstatus: 0
}, {
    word: "unkempt",
    wstatus: 1
}, {
    word: "breeding",
    wstatus: 1
}, {
    word: "festivity",
    wstatus: 1
}, {
    word: "screech",
    wstatus: 1
}, {
    word: "savoury",
    wstatus: 1
}, {
    word: "plaudate",
    wstatus: 0
}, {
    word: "shin",
    wstatus: 1
}, {
    word: "fluid",
    wstatus: 1
}, {
    word: "spaunch",
    wstatus: 0
}, {
    word: "allied",
    wstatus: 1
}, {
    word: "slain",
    wstatus: 1
}, {
    word: "recipient",
    wstatus: 1
}, {
    word: "exprate",
    wstatus: 0
}, {
    word: "eloquence",
    wstatus: 1
}, {
    word: "cleanliness",
    wstatus: 1
}, {
    word: "dispatch",
    wstatus: 1
}, {
    word: "rebondicate",
    wstatus: 0
}, {
    word: "ingenious",
    wstatus: 1
}, {
    word: "bewitch",
    wstatus: 1
}, {
    word: "skave",
    wstatus: 0
}, {
    word: "plaintively",
    wstatus: 1
}, {
    word: "kilp",
    wstatus: 0
}, {
    word: "interfate",
    wstatus: 0
}, {
    word: "hasty",
    wstatus: 1
}, {
    word: "lengthy",
    wstatus: 1
}, {
    word: "fray",
    wstatus: 1
}, {
    word: "crumper",
    wstatus: 0
}, {
    word: "upkeep",
    wstatus: 1
}, {
    word: "majestic",
    wstatus: 1
}, {
    word: "magrity",
    wstatus: 0
}, {
    word: "nourishment",
    wstatus: 1
}, {
    word: "abergy",
    wstatus: 0
}, {
    word: "proom",
    wstatus: 0
}, {
    word: "turmoil",
    wstatus: 1
}, {
    word: "carbohydrate",
    wstatus: 1
}, {
    word: "scholar",
    wstatus: 1
}, {
    word: "turtle",
    wstatus: 1
}, {
    word: "fellick",
    wstatus: 0
}, {
    word: "destription",
    wstatus: 0
}, {
    word: "cylinder",
    wstatus: 1
}, {
    word: "censorship",
    wstatus: 1
}, {
    word: "celestial",
    wstatus: 1
}, {
    word: "rascal",
    wstatus: 1
}, {
    word: "purrage",
    wstatus: 0
}, {
    word: "pulsh",
    wstatus: 0
}, {
    word: "muddy",
    wstatus: 1
}, {
    word: "quirty",
    wstatus: 0
}, {
    word: "pudour",
    wstatus: 0
}, {
    word: "listless",
    wstatus: 1
}, {
    word: "wrought",
    wstatus: 1
}];

var stim_nl = [{
    word: "pastitie",
    wstatus: 0
}, {
    word: "scheur",
    wstatus: 1
}, {
    word: "fobisch",
    wstatus: 1
}, {
    word: "markatief",
    wstatus: 0
}, {
    word: "laakbaar",
    wstatus: 1
}, {
    word: "slaags",
    wstatus: 1
}, {
    word: "riant",
    wstatus: 1
}, {
    word: "joutbaag",
    wstatus: 0
}, {
    word: "doornat",
    wstatus: 1
}, {
    word: "woelig",
    wstatus: 1
}, {
    word: "paviljoen",
    wstatus: 1
}, {
    word: "doop",
    wstatus: 1
}, {
    word: "starkatie",
    wstatus: 0
}, {
    word: "onledig",
    wstatus: 1
}, {
    word: "toetsing",
    wstatus: 1
}, {
    word: "affiniteit",
    wstatus: 1
}, {
    word: "mikken",
    wstatus: 1
}, {
    word: "knullig",
    wstatus: 1
}, {
    word: "streuren",
    wstatus: 0
}, {
    word: "rups",
    wstatus: 1
}, {
    word: "paars",
    wstatus: 1
}, {
    word: "speven",
    wstatus: 0
}, {
    word: "geraakt",
    wstatus: 1
}, {
    word: "martelaar",
    wstatus: 1
}, {
    word: "ontpelen",
    wstatus: 0
}, {
    word: "stagnatie",
    wstatus: 1
}, {
    word: "dronkenschap",
    wstatus: 1
}, {
    word: "voornemen",
    wstatus: 1
}, {
    word: "vertediseren",
    wstatus: 0
}, {
    word: "normatief",
    wstatus: 1
}, {
    word: "zetelen",
    wstatus: 1
}, {
    word: "zolf",
    wstatus: 0
}, {
    word: "publiekelijk",
    wstatus: 1
}, {
    word: "vluk",
    wstatus: 0
}, {
    word: "compromeet",
    wstatus: 0
}, {
    word: "romig",
    wstatus: 1
}, {
    word: "getint",
    wstatus: 1
}, {
    word: "gelovig",
    wstatus: 1
}, {
    word: "nopen",
    wstatus: 1
}, {
    word: "kluiper",
    wstatus: 0
}, {
    word: "geloei",
    wstatus: 1
}, {
    word: "retorisch",
    wstatus: 1
}, {
    word: "maliteit",
    wstatus: 0
}, {
    word: "verspilling",
    wstatus: 1
}, {
    word: "haperie",
    wstatus: 0
}, {
    word: "proom",
    wstatus: 0
}, {
    word: "fornuis",
    wstatus: 1
}, {
    word: "exploitatie",
    wstatus: 1
}, {
    word: "acteur",
    wstatus: 1
}, {
    word: "hengel",
    wstatus: 1
}, {
    word: "flajoen",
    wstatus: 0
}, {
    word: "aanhekking",
    wstatus: 0
}, {
    word: "kazerne",
    wstatus: 1
}, {
    word: "avonturier",
    wstatus: 1
}, {
    word: "leurig",
    wstatus: 0
}, {
    word: "chagrijnig",
    wstatus: 1
}, {
    word: "bretel",
    wstatus: 1
}, {
    word: "klengel",
    wstatus: 0
}, {
    word: "etaal",
    wstatus: 0
}, {
    word: "matig",
    wstatus: 1
}, {
    word: "futeur",
    wstatus: 0
}, {
    word: "onbekwaam",
    wstatus: 1
}, {
    word: "verguld",
    wstatus: 1
}];

function init_main() {
    $(".stim").hide();
    $(".intro").show();
    listenStartSpaceBar();
}


function mainAction() {
    $("#stim_main").show();
    if (language == 'nl') {
        stim = stim_nl;
    } else if (language == 'en') {
        stim = stim_en;
    }
    $(document).keypress(function(e) {
        var code = e.keyCode || e.which;
        if (code == 65 || code == 97 || code == 76 || code == 108) {
            if (main_listener === false) return;
            if (a_and_l_listener === true) {
                t2 = now();
                rt = t2 - t1;
                if (code == 65 || code == 97) {
                    recodedkey = "A";
                    if (stim[i].wstatus == 1 && i > 3) {
                        CorW++;
                    }
                } else if (code == 76 || code == 108) {
                    recodedkey = "L";
                    if (stim[i].wstatus === 0 && i > 3) {
                        CorNW++;
                    }
                }
                RespTime.push(rt.toFixed(2));
                Expresp.push(recodedkey);
                Actresp.push(code);
                Status.push(stim[i].wstatus);
                Stim.push(stim[i].word);
                t1 = t2;
                // if (i == stim.length - 1) {
                if (i == 7) {
                    end();
                } else {
                    i++;
                    $("#stim_stim").hide('fast');
                    showStim();
                }
            }
        }
    });
}

function showStim() {
    main_listener = false;
    $("#stim_stim").show('fast', function() {
        $("#stim_stim").text(stim[i].word);
        t1 = now() - 100;
        main_listener = true;
    });
}
