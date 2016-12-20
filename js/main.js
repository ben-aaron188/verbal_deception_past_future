// globals
var data_array = [];
var data_statement1;
var unid;
var repetition_count = 0;
var conditions;
var timer_ms1 = 3000; //180000
var timer_ms2 = 3000; //60000
var time_langtask1 = 2000;
var quiz_order = [0, 1, 2, 3, 4, 5, 6, 7];
var min_char = 10;

// task flow
$(document).ready(function() {
    init_data();
    getIP();
    var text = introduction;
    $('body').prepend('<div id="intro1" class="main_instructions_">' + text + '</div>' + buttons1);
    $("#intro1").show();
    $("#back").hide();
    $("#next").attr('onclick', 'to_informed_consent()');
    get_unid();
});

function to_informed_consent() {
    conditions = get_cond();
    $("#back").hide();
    var text = ic;
    $('body').prepend('<div id="informed_consent" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#informed_consent"));
    $("#next").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions1() {
    var text;
    if (conditions.time === 0) {
        text = instructions_pastweekend1;
    } else if (conditions.time == 1) {
        text = instructions_nextweekend1;
    }
    $("#back").show();
    $('body').prepend('<div id="main_instructions1" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions1"));
    $("#next").attr('onclick', 'to_main_instructions6()');
    $("#back").attr('onclick', 'to_informed_consent()');
}

// function to_main_instructions2() {
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = instructions_general2_nl;
//     } else if (conditions.cond_lang == 1) {
//         text = instructions_general2_en;
//     }
//     $('body').prepend('<div id="main_instructions2" class="main_instructions_">' + text + '</div>');
//     simple_transition_2($(".main_instructions_"), $("#main_instructions2"));
//     $("#next").attr('onclick', 'to_main_instructions6()');
//     $("#back").attr('onclick', 'to_main_instructions1()');
// }


function to_main_instructions6() {
    var text;
    var menu1;
    var menu2;
    if (conditions.time === 0) {
        text = instructions_pastweekend2;
        menu1 = '<div id="activity_future" class="text3">' +
            'Which of the following acitivities did you do last weekend?' +
            '<select id="activity_future_sel" class="select_menu_2" multiple>' +
            '</select>' +
            '</div>';
        menu2 = '<div id="activity_future_non" class="text3">' +
            'Which of the following activities did you not do last weekend? Select at least three options.' +
            '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
            '</select>' +
            '</div>';
        setTimeout(function() {
            populate_select_from_json($("#activity_past_sel"), conditions.cond_lang);
            populate_select_from_json($("#activity_past_non_sel"), conditions.cond_lang);
        }, 100);
    } else if (conditions.time == 1) {
        text = instructions_nextweekend2;
        menu1 = '<div id="activity_future" class="text3">' +
            'Which of the following activities are going to do this weekend?' +
            '<select id="activity_future_sel" class="select_menu_2" multiple>' +
            '</select>' +
            '</div>';
        menu2 = '<div id="activity_future_non" class="text3">' +
            'Which of the following activities are you definitely not going to do next weekend? Select at least three options.' +
            '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
            '</select>' +
            '</div>';
        setTimeout(function() {
            populate_select_from_json($("#activity_future_sel"), conditions.cond_lang);
            populate_select_from_json($("#activity_future_non_sel"), conditions.cond_lang);
        }, 100);
    }
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions6"));
    $("#next").attr('onclick', 'to_main_instructions7()');
    $("#back").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions6_proxy() {
  var text;
  var menu1;
  var menu2;
  if (conditions.time === 0) {
      text = instructions_pastweekend2;
      menu1 = '<div id="activity_future" class="text3">' +
          'Which of the following acitivities did you do last weekend?' +
          '<select id="activity_future_sel" class="select_menu_2" multiple>' +
          '</select>' +
          '</div>';
      menu2 = '<div id="activity_future_non" class="text3">' +
          'Which of the following activities did you not do last weekend? Select at least three options.' +
          '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
          '</select>' +
          '</div>';
      setTimeout(function() {
          populate_select_from_json($("#activity_past_sel"), conditions.cond_lang);
          populate_select_from_json($("#activity_past_non_sel"), conditions.cond_lang);
      }, 100);
  } else if (conditions.time == 1) {
      text = instructions_nextweekend2;
      menu1 = '<div id="activity_future" class="text3">' +
          'Which of the following activities are going to do this weekend?' +
          '<select id="activity_future_sel" class="select_menu_2" multiple>' +
          '</select>' +
          '</div>';
      menu2 = '<div id="activity_future_non" class="text3">' +
          'Which of the following activities are you definitely not going to do next weekend? Select at least three options.' +
          '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
          '</select>' +
          '</div>';
      setTimeout(function() {
          populate_select_from_json($("#activity_future_sel"), conditions.cond_lang);
          populate_select_from_json($("#activity_future_non_sel"), conditions.cond_lang);
      }, 100);
  }
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    simple_transition_2($(".main_instructions__"), $("#main_instructions6"));
    $("#next").attr('onclick', 'to_main_instructions7()');
    $("#back").attr('onclick', 'to_main_instructions2()');
}


function to_main_instructions7() {
    if (check_multi_select_2(conditions.cond_lang) === true) {
        if (find_duplicates_in_array() === true) {
            var items_for_rating;
            var items_for_rating_3;
            var table_rows;
            var a;
            var text;
            if (conditions.time === 0) {
                items_for_rating = collect_selected('past', 'do');
                text = slider_text_pastweekend_do;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo;
            }
            $('body').prepend('<div id="main_instructions7" class="main_instructions__">' + text + '</div>');
            if (items_for_rating.length > 2) {
                var items_for_rating_3_proxy = shuffle(items_for_rating);
                items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
            } else {
                items_for_rating_3 = items_for_rating;
            }
            $(items_for_rating_3).each(function(index, val) {
                if (conditions.time === 0) {
                    a = generate_table_row(index, val, 'past', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                } else if (conditions.time == 1) {
                    a = generate_table_row(index, val, 'future', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                }
            });
            activate_stretch();
            simple_transition_2($(".main_instructions_"), $("#main_instructions7"));
            $("#next").attr('onclick', 'to_main_instructions7a()');
            $("#back").attr('onclick', 'to_main_instructions6_proxy()').show();
        }
    }
}

function to_main_instructions7_proxy() {
    // if (check_multi_select_2(conditions.cond_lang) === true) {
    if (find_duplicates_in_array() === true) {
        var items_for_rating;
        var items_for_rating_3;
        var table_rows;
        var a;
        var text;
        if (conditions.time === 0) {
            items_for_rating = collect_selected('past', 'do');
            text = slider_text_pastweekend_do;
        } else if (conditions.time == 1) {
            items_for_rating = collect_selected('past', 'notdo');
            text = slider_text_pastweekend_notdo;
        }
        $('body').prepend('<div id="main_instructions7" class="main_instructions__">' + text + '</div>');
        if (items_for_rating.length > 2) {
            var items_for_rating_3_proxy = shuffle(items_for_rating);
            items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
        } else {
            items_for_rating_3 = items_for_rating;
        }
        $(items_for_rating_3).each(function(index, val) {
            if (conditions.time === 0) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang, 'do');
                $('#main_instructions7').append(a);
            } else if (conditions.time == 1) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang, 'do');
                $('#main_instructions7').append(a);
            }
        });
        activate_stretch();
        simple_transition_2($(".main_instructions__"), $("#main_instructions7"));
        $("#next").attr('onclick', 'to_main_instructions7a()');
        $("#back").attr('onclick', 'to_main_instructions6_proxy()').show();
    }
    // }
}

function to_main_instructions7a() {
    if (check_slider($(".slider_io_output")) === true) {
        var items_for_rating;
        var items_for_rating_3;
        var table_rows;
        var a;
        var text;
            if (conditions.time === 0) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('future', 'notdo');
                text = slider_text_nextweekend_notdo;
            }
        if (items_for_rating.length > 2) {
            var items_for_rating_3_proxy = shuffle(items_for_rating);
            items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
        } else {
            items_for_rating_3 = items_for_rating;
        }
        $('body').prepend('<div id="main_instructions7a" class="main_instructions__">' + text + '</div>');

        $(items_for_rating_3).each(function(index, val) {
            if (conditions.time === 0) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            } else if (conditions.time == 1) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            }
        });
        activate_stretch();
        simple_transition_2($(".main_instructions__"), $("#main_instructions7a"));
        // $("#next").attr('onclick', 'to_model_statement1()');
        $("#next").attr('onclick', 'to_text_input_instructions1()');
        $("#back").attr('onclick', 'to_main_instructions7_proxy()');
    }
}

function to_text_input_instructions1() {
    if (check_slider($(".slider_io_output")) === true) {
        var text;
        if (conditions.time === 0) {
            if (conditions.cond_ver === 0) {
                text = instructions_truthful_past;
            } else if (conditions.cond_ver == 1) {
                text = instruction_deceptive_past;
            }
        } else if (conditions.time == 1) {
            if (conditions.cond_ver === 0) {
                text = instructions_truthful_future;
            } else if (conditions.cond_ver == 1) {
                text = instructions_deceptive_future;
            }
        }
        instructive = '';
        if (conditions.time === 0) {
            instructive = select_manipulation('past', conditions.cond_lang);
        } else if (conditions.time == 1) {
            instructive = select_manipulation('future', conditions.cond_lang);
        }
        var instruction_span = '<span id="instructive_span">' + instructive + '</span>';
        $('body').prepend('<div id="text_input_instructions_1" class="main_instructions_">' + text + instruction_span + '</div>');
        simple_transition_2($(".main_instructions__"), $("#text_input_instructions_1"));
        // $("#next").attr('onclick', 'to_statement_input1()');
        $("#next").attr('onclick', 'to_model_statement1()');
    }
}

function to_model_statement1() {
    quiz_order = shuffle(quiz_order);
    var text;
    var modelstatement;
    if (conditions.cond_lang === 0) {
        text = instructions_modelstatement_nl;
        modelstatement = modelstatement_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_modelstatement_en;
        modelstatement = modelstatement_en;
    }
    $('body').prepend('<div id="model_statement1" class="main_instructions_">' + text + modelstatement + '</div>');
    simple_transition_2($(".main_instructions_"), $("#model_statement1"));
    $("#next").attr('onclick', 'to_quiz_1()').hide();
    setTimeout(function() {
        $("#next").show();
    }, timer_ms1);
}

function to_model_statement1_proxy() {
    quiz_order = shuffle(quiz_order);
    var text;
    var modelstatement;
    if (conditions.cond_lang === 0) {
        text = instructions_modelstatement_nl;
        modelstatement = modelstatement_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_modelstatement_en;
        modelstatement = modelstatement_en;
    }
    $('body').prepend('<div id="model_statement1" class="main_instructions_">' + text + modelstatement + '</div>');
    simple_transition_2($(".main_instructions_"), $("#model_statement1"));
    $("#next").attr('onclick', 'to_quiz_1()').hide();
    setTimeout(function() {
        $("#next").show();
    }, timer_ms2);
}


// QUIZ questions
function to_quiz_1() {
    var param_id = 1;
    var param_number = quiz_order[0];
    var param_language = conditions.cond_lang;
    var quiz_menu = make_quiz_question(param_id, param_number, param_language);
    $('body').prepend('<div id="quiz_div_1" class="main_instructions_">' + quiz_menu + '</div>');
    simple_transition_2($(".main_instructions_"), $("#quiz_div_1"));
    $("#next").attr('onclick', 'to_quiz_2()');
}

function to_quiz_2() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(1, quiz_order[0], conditions.cond_lang) === true) {
            var param_id = 2;
            var param_number = quiz_order[1];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_2" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_2"));
            $("#next").attr('onclick', 'to_quiz_3()');
        }
    }
}

function to_quiz_3() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(2, quiz_order[1], conditions.cond_lang) === true) {
            var param_id = 3;
            var param_number = quiz_order[2];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_3" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_3"));
            $("#next").attr('onclick', 'to_quiz_4()');
        }
    }
}

function to_quiz_4() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(3, quiz_order[2], conditions.cond_lang) === true) {
            var param_id = 4;
            var param_number = quiz_order[3];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_4" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_4"));
            // $("#next").attr('onclick', 'to_text_input_instructions1()');
            // $("#next").attr('onclick', 'to_statement_input1()');
            $("#next").attr('onclick', 'to_pre_input_reminder()');
        }
    }
}

function to_pre_input_reminder() {
    if (check_quiz_answer(4, quiz_order[3], conditions.cond_lang) === true) {
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.cond_ver === 0) {
                text = pre_input_truthful_nl;
            } else if (conditions.cond_ver == 1) {
                text = pre_input_deceptive_nl;
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cond_ver === 0) {
                text = pre_input_truthful_en;
            } else if (conditions.cond_ver == 1) {
                text = pre_input_deceptive_en;
            }
        }
        var instruction_span = '<span id="instructive_span2">' + instructive + '</span>';
        $('body').prepend('<div id="pre_input_instructions" class="main_instructions_">' + text + instruction_span + '</div>');
        simple_transition_2($(".main_instructions_"), $("#pre_input_instructions"));
        $("#next").attr('onclick', 'to_statement_input1()');
    }
}

function to_statement_input1() {
    var text;
    if (conditions.cond_lang === 0) {
        // if (conditions.cb === 0) {
        //     instructive = select_manipulation('future', conditions.cond_lang);
        // } else if (conditions.cb == 1) {
        //     instructive = select_manipulation('past', conditions.cond_lang);
        // }
        text = instructions_inputfield_nl;
    } else if (conditions.cond_lang == 1) {
        // if (conditions.cb === 0) {
        //     instructive = select_manipulation('future', conditions.cond_lang);
        // } else if (conditions.cb == 1) {
        //     instructive = select_manipulation('past', conditions.cond_lang);
        // }
        text = instructions_inputfield_en;
    }

    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement1" placehoder="your answer"></textarea>';

    $('body').prepend('<div id="statement_input1" class="main_instructions_">' + text + input_field + '</div>');
    start_timer();
    record_deletes();
    simple_transition_2($(".main_instructions_"), $("#statement_input1"));
    // $("#next").attr('onclick', 'to_main_instructions8()');
    $("#next").attr('onclick', 'to_manipulation_check()');
    // check input length & meaningfulness
}

function to_manipulation_check() {
    if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
        var text;
        var slider;
        if (conditions.cond_lang === 0) {
            text = manipulation_check_nl;
            slider = '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe waarachtig was jouw verhaal?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet waar) -  -  -  (helemaal wel waar)</div> ' +
                '</div>' +
                '</span>';
        } else if (conditions.cond_lang == 1) {
            text = manipulation_check_en;
            slider = '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How truthful was your statement?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (completely)</div> ' +
                '</div>' +
                '</span>';
        }
        $('body').prepend('<div id="manipulation_check" class="main_instructions_">' + text + slider + '</div>');
        activate_stretch();
        simple_transition_2($(".main_instructions_"), $("#manipulation_check"));
        $("#next").attr('onclick', 'to_demographics1()');
    }
}


function to_demographics1() {
    if (check_slider($(".slider_io_output")) === true) {
        recorded_deletes = deletions_arr.length;
        var transition_text;
        if (conditions.cond_lang === 0) {
            transition_text = transition_nl;
            simple_transition($("#manipulation_check"), $("#demographics1_nl"));
            $("#demographics1_en").hide();
        } else if (conditions.cond_lang == 1) {
            transition_text = transition_en;
            simple_transition($("#manipulation_check"), $("#demographics1_en"));
            $("#demographics1_nl").hide();
        }
        $("<h2></h2>").text(transition_text).appendTo($('body'));
        $("#next").attr('onclick', 'to_demographics2()');
        $("#back").attr('onclick', 'to_main_instructions2()').hide();
        define_keys($("#age_sel_nl"), 'number', 2);
        define_keys($("#age_sel_en"), 'number', 2);
    }
}

function to_demographics2() {
    if (check_fields($(".select_menu")) === true) {
        $("h2").remove();
        if (has_second_language() === false) {
            // $("#lang2").css('display', 'none');
            $("#lang2_en").hide();
            $("#lang2_nl").hide();
        }
        if (conditions.cond_lang === 0) {
            simple_transition($("#demographics1_nl"), $("#demographics2_nl"));
            $("#demographics2_en").hide();
        } else if (conditions.cond_lang == 1) {
            simple_transition($("#demographics1_en"), $("#demographics2_en"));
            $("#demographics2_nl").hide();
        }
        $("#next").attr('onclick', 'to_outro()');
    }
}

function to_outro() {
  if (check_fields($(".select_menu")) === true) {
    var outro_dom;
    if (conditions.cond_lang === 0) {
        outro_dom = outro_nl;
    } else if (conditions.cond_lang == 1) {
        outro_dom = outro_en;
    }

    var credits_dom = credits;

    simple_transition($("#langtask1"), $("#outro"));
    $('body').prepend('<div id="outro" class="main_instructions_">' + outro_dom + '</div>' + credits_dom);
    $("#partcode").text(unid);
    $("#next").show();
    $("#next").text('SEND');
    $("#next").attr('onclick', 'send_to_server()');
  }
}

function get_data() {
    var bilingual_bool;
    var age;
    var gender;
    var origin;
    var education;
    var lang1;
    var lang2;
    if (conditions.cond_lang === 0) {
        bilingual_bool = $("#bilingual_sel_nl").val();
        age = $("#age_sel_nl").val();
        gender = $("#gender_sel_nl").val();
        origin = $("#origin_sel_nl").val();
        education = $("#education_sel_nl").val();
        lang1 = $("#lang1_sel_nl").val();
        lang2 = $("#lang2_sel_nl").val();
    } else if (conditions.cond_lang == 1) {
        bilingual_bool = $("#bilingual_sel_en").val();
        age = $("#age_sel_en").val();
        gender = $("#gender_sel_en").val();
        origin = $("#origin_sel_en").val();
        education = $("#education_sel_en").val();
        lang1 = $("#lang1_sel_en").val();
        lang2 = $("#lang2_sel_en").val();
    }
    data.ip = clientip;
    data.browsername = $.browser.name;
    data.browserversion = $.browser.version;
    data.ts_time = moment().format('LTS');
    data.ts_date = moment().format('l');
    data.unid = unid;
    data.unidin = $("#unidin").val();
    data.crowdf = $("#crowdf").val();
    data.gender = gender;
    data.age = age;
    data.education = education;
    data.origin = origin;
    data.bilingual_sel = bilingual_bool;
    data.lang1_sel = lang1;
    data.lang2_sel = lang2;
    data.cond_lang = conditions.cond_lang;
    data.cond_ver = conditions.cond_ver;
    data.cb = conditions.time;

    data.manipulation_check = $("#manipulation_check_val").val();

    // data.activity_past = instructive;
    // data.n_activities_past = '12345';
    // data.activity_past_freq = '12345';
    // data.activity_past_cert = '12345';

    data.activity_future = instructive;
    data.n_activities_future = n_activities_future;

    data.selected_activities = selected_activities;

    data.statement1_content = statement1_main.content;
    data.statement1_defoucus = statement1_main.pagefocus.defocus;
    data.statement1_refoucus = statement1_main.pagefocus.refocus;
    data.statement1_defocusduration = statement1_main.pagefocus.durationsum;
    data.statement1_length = statement1_main.length;
    data.statement1_elapsed = statement1_main.elapsed;
    data.statement1_deletes = statement1_main.deletes;

    console.log(data);
}
