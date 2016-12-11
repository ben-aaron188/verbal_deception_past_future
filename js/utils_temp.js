var slider_moved_array = [];

function check_fields(classname) {
    var class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            // if($(this).attr('type') == 'text'){
            $(this).each(function() {
                class_values.push($(this).val().length);
                score = $.inArray(0, class_values);
            });
            // }
        }
    });
    if (score > -1) {
        alert("Please answer all questions.");
        score = 0;
    } else {
        return true;
    }
}

function check_multi_select() {
    var class_values = [];
    score = 0;
    $(".select_menu_2").each(function() {
        if ($(this).is(":visible")) {
            $(".select_menu_2 :selected").each(function(i, val) {
                class_values[i] = $(val).text().length;
                score = $.inArray(0, class_values);
            });
        }
    });
    if (score > -1) {
        alert("Select at least one option");
        score = 0;
    } else {
        return true;
    }
}

// source: http://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/
function find_duplicates_in_array() {
    var class_values = [];
    $(".select_menu_2").each(function() {
        if ($(this).is(":visible")) {
            $(".select_menu_2 :selected").each(function(i, val) {
                class_values[i] = $(val).text();
            });
        }
    });
    var result = [];
    class_values.forEach(function(element, index) {
        // Find if there is a duplicate or not
        if (class_values.indexOf(element, index + 1) > -1) {
            // Find if the element is already in the result array or not
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });
    if (result.length === 0) {
        return true;
    } else {
        // return true;
        var alert_msg;
        if (conditions.cond_lang === 0) {
            alert_msg = "Je kunt niet voor een activiteit aangeven dat je het wel en tegelijkertijd niet gaat doen komend weekend. Kies opnieuw en less de instructies zorgvuldig.";
        } else if (conditions.cond_lang == 1) {
            alert_msg = "You cannot indicate for the same activity that you will and will not do it next weekend. Please choose again and read the instructions carefully.";
        }
        alert(alert_msg);
    }
    // return result.length;
}


function check_choice(classname) {
    class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            // if ($(this).attr('type') == 'text') {
            $(this).each(function() {
                class_values.push($(this).val().length);
                score = $.inArray(0, class_values);
            });
            // }
        }
    });
    if (score > -1) {
        alert("Please write down your answer.");
        score = 0;
    } else {
        return true;
    }
}


function has_second_language() {
    if ($("#bilingual_sel_en").val() == "1" || $("#bilingual_sel_nl").val() == "1") {
        return true;
    } else {
        return false;
    }
}

function define_keys(ID, allowedInput, allowedMax) {
    if (allowedInput == "number") {
        ID.keypress(function(e) {
            var code = e.keyCode || e.which;
            if (code != 8 && code !== 0 && (code < 48 || code > 57)) {
                return false;
            }
        });
    } else if (allowedInput == "text") {
        ID.keypress(function(e) {
            var code = e.keyCode || e.which;
            if (code > 32 && (code < 65 || code > 90) &&
                (code < 97 || code > 122)) {
                return false;
            }
        });
    }
}

function twoletters() {
    var output = "";
    var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 2; i++)
        output += choices.charAt(Math.floor(Math.random() * choices.length));
    return output;
}

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

function init_data() {
    data = {};
}

function simple_transition(current_div, next_div) {
    current_div.hide(function() {
        next_div.show();
    });
}

function send_to_server() {
    if (check_fields($(".select_menu")) === true) {
        get_data();
        $("#DATA").val(JSON.stringify(data));
        $("#submit").click();
    }
}

function getIP() {
    $.get("http://ipinfo.io", function(response) {
        window.clientip = response.ip;
    }, "jsonp");
}

function check_slider(classname) {
    class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            class_values.push($(this).val().length);
            score = $.inArray(15, class_values);
        }
    });
    if (score != -1) {
        var alert_msg;
        if (conditions.cond_lang === 0) {
            alert_msg = "Beweeg alsjeblieft de sliders om jouw keuzes aan te geven.";
        } else if (conditions.cond_lang == 1) {
            alert_msg = "Please move the sliders to indicate your choices.";
        }
        alert(alert_msg);
        score = 0;
    } else {
        return true;
    }
}

function get_unid() {
    // if (val_score === 0) {
    unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9);
    // } else {
    //     unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + "_" +val_score;
    // }
}

// source: http://stackoverflow.com/questions/5976289/stretch-text-to-fit-width-of-div
$.fn.stretch_text = function() {
    var elmt = $(this),
        cont_width = elmt.width(),
        txt = elmt.html(),
        one_line = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char = elmt.text().length,
        spacing = cont_width / nb_char,
        txt_width;

    elmt.html(one_line);
    txt_width = one_line.width();

    if (txt_width < cont_width) {
        var char_width = txt_width / nb_char,
            ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

        one_line.css({
            'letter-spacing': ltr_spacing
        });
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

// new function from previous study
function validate_text(ID, desiredLength, test_kind, language) {
    // text_validation = false;
    if (test_kind == 'both') {
        if (check_text(ID, desiredLength, language) === true) {
            if (check_input(ID, language) === true) {
                text_validation = true;
                // alert('text validated');
                return true;
            }
        }
    } else if (test_kind == 'length') {
        if (check_text(ID, desiredLength, language) === true) {
            text_validation = true;
            // alert('text validated');
            return true;
        }
    } else if (test_kind == 'content') {
        if (check_input(ID, language) === true) {
            text_validation = true;
            // alert('text validated');
            return true;
        }
    }
}

function check_input(ID, language) {
    var keywords;
    var tester_array = [];
    var tester2 = 0;
    var alert_msg;
    if (language === 0) {
        keywords = ["the", "to", "in", "at", "with", "by", "of", "a", "an", "from", "on", "there", "here", "I", "you", "they", "we", "us", "is", "it"];
        alert_msg = "Gebruik echt Nederlands in jouw verhaal alsjeblieft. Je anders kunt niet doorgaan en dit experiment wordt ongeldig zonder serieuze deelname.";
    } else if (language == 1) {
        keywords = ["the", "to", "in", "at", "with", "by", "of", "a", "an", "from", "on", "there", "here", "I", "you", "they", "we", "us", "is", "it"];
        alert_msg = "Please use real English words and sentences in your answer. You will not be able to proceed otherwise. We cannot validate your participation without serious participation.";
    }
    textin = ID.val().toLowerCase().split(" ");
    $.each(keywords, function(index, val) {
        tester = $.inArray(val, textin);
        if (tester < 0) {
            tester2 = 0;
        } else {
            tester2 = 1;
        }
        tester_array.push(tester2);
    });
    checksum_tester = sum(tester_array);
    if ((checksum_tester / textin.length) < 0.025) {
        alert(alert_msg);
    } else {
        return true;
    }
}

function check_text(ID, desiredLength, language) {
    var alert_msg;
    if (language === 0) {
        alert_msg = "Schrijf alsjeblieft ten minste " + desiredLength + " tekens om deze vraag te beantwoorden.";
    } else if (language == 1) {
        alert_msg = "Please use at least " + desiredLength + " characters to answer this questions.";
    }
    var raw = ID.val().toLowerCase().replace(/ /g, '');
    if (raw.length < desiredLength) {
        alert(alert_msg);
    } else {
        return true;
    }
}

function sum(arr) {
    var r = 0;
    $.each(arr, function(i, v) {
        r += v;
    });
    return r;
}

function record_elapsed_start(ID) {
    elapsed = 0;
    ID.keypress(function(e) {
        time1 = now();
    });
}

function record_elapsed_end(ID) {
    time2 = now();
    elapsed = time2 - time1;
}


function get_length(ID) {
    lengthtext = ID.val().toLowerCase().split(" ");
    id_length = lengthtext.length;
    return id_length;
}

function record_deletes(ID) {
    var listen = true;
    deletions_arr = [];
    ID.keydown(function(e) {
        if (listen === true) {
            var code = e.keyCode || e.which;
            if (code == 8) {
                deletions_arr.push(1);
            }
        }
    });
}

function set_certainty_slider_value(number) {
    var input = "#activity" + number + "_certainty";
    var output = "#certainty_output_" + number;
    $(output).val($(input).val() + '%');
}

function set_frequency_slider_value(number) {
    var input = "#activity" + number + "_frequency";
    var output = "#frequency_output_" + number;
    $(output).val($(input).val() + '%');
}

function set_planning_slider_value(number) {
    var input = "#activity" + number + "_planning";
    var output = "#planning_output_" + number;
    $(output).val($(input).val() + '%');
}


function activate_stretch() {
    $('.stretch').each(function() {
        $(this).stretch_text();
    });
}

function randomdigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_cond() {
    var cond_lang = 2;
    // 0: Dutch
    // 1: English
    var cond_ver = 2;
    // 0: truthful
    // 1: deceptive
    var cb = 2;
    if (selected_language != 'nl') {
        cond_lang = 1;
        // cond_ver = randomdigit(0, 1);
        cond_ver = 1;
        // cb = randomdigit(0, 1);
        cb = 0;
    } else {
        cond_lang = randomdigit(0, 1);
        // cond_ver = randomdigit(0, 1);
        cond_ver = 1;
        // cb = randomdigit(0, 1);
        cb = 0;
    }
    var conds = {
        'cond_lang': cond_lang,
        'cond_ver': cond_ver,
        'cb': cb
    };
    return conds;
}

function select_manipulation(temporality, language) {
    var selected_obj;
    var selected_obj_;
    var selected_obj__;
    var candidate_objects;
    var choices;
    var matches;
    if (language === 0) {
        choices = choices_nl;
    } else if (language == 1) {
        choices = choices_en;
    }
    if (conditions.cond_ver === 0) {
        candidate_objects = collect_non_selected(temporality);
        selected_obj = shuffle(candidate_objects)[0];
    } else if (conditions.cond_ver == 1) {
        var obj_array = [];
        var single_obj = {};
        var sel_val;
        var sel_freq;
        var sel_cert;
        // check that only the non-selected ones appear
        $(".table_row_div").each(function(index, val) {
            sel_val = $(this).children().eq(0).text();
            sel_freq = $(this).children().eq(1).children().children().eq(1).val();
            sel_cert = $(this).children().eq(2).children().children().eq(1).val();
            single_obj = {
                'sel_val': sel_val,
                'sel_freq': sel_freq - 0,
                'sel_cert': sel_cert - 0,
                'sel_freq_inv': 100 - sel_freq,
                'combined': (sel_cert - 0) + (100 - sel_freq)
            };
            obj_array.push(single_obj);
        });
        // check if overlap
        selected_obj_ = obj_array.reduce((max, single) => max.combined > single.combined ? max : single);
        selected_obj__ = selected_obj_.sel_val;
        matches = choices.filter(function(val, index, array) {
            return val.option_normal == selected_obj__;
        });
        selected_obj = matches[0].option_specific;
    }
    return selected_obj;
    // return matches[0];
}

function generate_table_row(number, item, temporality, language, state) {
    var table_row;
    if (language === 0) {
        if (temporality == 'future') {
          if(state == 'do'){
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe vaak heb je dit eerder gedaan?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(nooit) -  -  -  (heel vaak)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="certainty_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe zeker ben je dat je dit gaat doen?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (helemaal wel)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="planning_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe goed heb je dit al gepland?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (helemaal wel)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
          } else if(state == 'notdo'){
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe vaak heb je dit eerder wel gedaan?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(nooit) -  -  -  (heel vaak)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="certainty_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe zeker ben je dat je dit niet gaat doen?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet zeker) -  -  -  (heel erg zeker)</div> ' +
                '</div>' +
                '</span>' +
                // '<span class="planning_span">' +
                // '<div class="slider_io">' +
                // '<span id="slider_instr">Hoe goed heb je dit al gepland?</span> ' +
                // '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
                // '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
                // '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (helemaal wel)</div> ' +
                // '</div>' +
                // '</span>' +
                '</div>';
          }
        } else if (temporality == 'past') {
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe vaak heb je dit eerder gedaan?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(nooit) -  -  -  (heel vaak)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
        }
    } else if (language == 1) {
        if (temporality == 'future') {
          if(state == 'do'){
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How often have you done this in the past?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="certainty_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How certain are you that you will do this?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="planning_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How well have you planned this already?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
          } else if(state == 'notdo'){
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How often have you done this in the past?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
                '</div>' +
                '</span>' +
                '<span class="certainty_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How certain are you that you will not do this?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
                '</div>' +
                '</span>' +
                // '<span class="planning_span">' +
                // '<div class="slider_io">' +
                // '<span id="slider_instr">How well have you planned this already?</span> ' +
                // '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
                // '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
                // '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
                // '</div>' +
                // '</span>' +
                '</div>';
          }
        } else if (temporality == 'past') {
            table_row = '<div id="p' + number + '" class="table_row_div">' +
                '<span id="activity' + number + ' ">' + item + '</span>' +
                '<span class="activity_span">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How often have you done this in the past?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
                '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
        }
    }
    return table_row;
}

function collect_selected(temporality, state) {
    var selected_items = [];
    if (temporality == 'past') {
        if (state == 'do') {
            $("#activity_past :selected").each(function(i, val) {
                selected_items[i] = $(val).text();
            });
        } else if (state == 'notdo') {
            $("#activity_past_non :selected").each(function(i, val) {
                selected_items[i] = $(val).text();
            });
        }
    } else if (temporality == 'future') {
        if (state == 'do') {
            $("#activity_future :selected").each(function(i, val) {
                selected_items[i] = $(val).text();
            });
        } else if (state == 'notdo') {
            $("#activity_future_non :selected").each(function(i, val) {
                selected_items[i] = $(val).text();
            });
        }
    }
    return selected_items;
}

function collect_non_selected(temporality) {
    var selected_items = [];
    if (temporality == 'past') {
        $("#activity_past option").each(function() {
            if (!$(this).is(':selected')) {
                selected_items.push($(this).text());
            }
        });
    } else if (temporality == 'future') {
        $("#activity_future option").each(function() {
            if (!$(this).is(':selected')) {
                selected_items.push($(this).text());
            }
        });
    }
    return selected_items;
}

var now = (function() {
    var performance = window.performance || {};
    performance.now = (function() {
        return performance.now ||
            performance.webkitNow ||
            performance.msNow ||
            performance.oNow ||
            performance.mozNow ||
            function() {
                return new Date().getTime();
            };
    })();
    return performance.now();
});

function collect_statement(ID) {
    var elapsed = end_timer();
    var pagefocus = pagefocus_get_data();
    var content = ID.val();
    var length = get_length(ID);
    var data = {
        content: content,
        elapsed: elapsed,
        pagefocus: pagefocus,
        length: length
    };
    return data;
}

function start_timer() {
    t1 = now();
}

function end_timer() {
    var t2 = now();
    var elapsed = t2 - t1;
    return elapsed;
}

function set_lang_nl() {
    selected_language = 'nl';
    to_informed_consent();
}

function set_lang_other() {
    selected_language = 'other';
    to_informed_consent();
}

function simple_transition_2(class_current_div, next_div) {
    class_current_div.each(function() {
        if ($(this).is(":visible")) {
            $("#iframe_gmaps").hide();
            $(this).hide(function() {
                next_div.show();
            });
        }
    });
}

function make_quiz_question(id, number, language) {
    var selected_question;
    var filler;
    if (language === 0) {
        selected_question = quiz_nl[number];
        filler = "Kies het juiste antwoord";
    } else if (language == 1) {
        selected_question = quiz_en[number];
        filler = "Choose the correct answer";
    }
    var menu = '<div id="quiz_' + id + '" class="quiz">' +
        selected_question.quiz_question +
        // 'Which of the following activities did you not do last weekend?' +
        '<select id="quiz_select_' + id + '" class="select_menu_">' +
        '<option value="">' + filler + '</option>' +
        '<option value="option1">' + selected_question.quiz_options.option1 + '</option>' +
        '<option value="option2">' + selected_question.quiz_options.option2 + '</option>' +
        '<option value="option3">' + selected_question.quiz_options.option3 + '</option>' +
        '<option value="option4">' + selected_question.quiz_options.option4 + '</option>' +
        '</select>' +
        '</div>';
    return menu;
}

function check_quiz_answer(id, number, language) {
    var selected_question;
    var alert_msg;
    if (language === 0) {
        selected_question = quiz_nl[number];
    } else if (language == 1) {
        selected_question = quiz_en[number];
    }
    var selected_choice;
    switch (id) {
        case 1:
            selected_choice = $("#quiz_select_1 option:selected").text();
            break;
        case 2:
            selected_choice = $("#quiz_select_2 option:selected").text();
            break;
        case 3:
            selected_choice = $("#quiz_select_3 option:selected").text();
            break;
        case 4:
            selected_choice = $("#quiz_select_4 option:selected").text();
            break;
    }
    if (selected_choice == selected_question.quiz_correct) {
        return true;
    } else {
        if (language === 0) {
            alert_msg = "Dit antwoord is niet correct. Lees het voorbeeld verhaal opnieuw zodat je alle vragen hierover goed kunt beantwoorden.";
        } else if (language == 1) {
            alert_msg = "This answer is not correct. Please read the model statement again so that you can answer all question about it.";
        }
        alert(alert_msg);
        to_model_statement1_proxy();
    }
}
