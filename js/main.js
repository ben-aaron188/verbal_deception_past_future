// globals
var data_array = [];
var data_statement1;
var unid;
var repetition_count = 0;
var conditions;
var timer_ms1 = 3000; //180000
var timer_ms2 = 3000; //60000
var time_langtask1 = 2000;
var quiz_order = [0, 1, 2, 3];
var min_char = 10;

// task flow
$(document).ready(function() {
    init_data();
    getIP();
    var text = introduction;
    $('body').prepend('<div id="intro1" class="main_instructions_">' + text + '</div>' + buttons1);
    $("#intro1").show();
    $("#back").hide();
    $("#next").attr('onclick', 'to_informed_consent()').hide();
    get_unid();
});

function to_informed_consent() {
    $(".simple_button").hide();
    $("#next").show();
    conditions = get_cond();
    $("#back").hide();
    var text = ic;
    $('body').prepend('<div id="informed_consent" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#informed_consent"));
    $("#next").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions1() {
    var text;
    if (conditions.cond_lang === 0) {
        text = instructions_general1_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_general1_en;
    }
    $("#back").show();
    $('body').prepend('<div id="main_instructions1" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions1"));
    $("#next").attr('onclick', 'to_main_instructions2()');
    $("#back").attr('onclick', 'to_informed_consent()');
}

function to_main_instructions2() {
    var text;
    if (conditions.cond_lang === 0) {
        text = instructions_general2_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_general2_en;
    }
    $('body').prepend('<div id="main_instructions2" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions2"));
    $("#next").attr('onclick', 'to_demographics1()');
    $("#back").attr('onclick', 'to_main_instructions1()');
}

function to_demographics1() {
    if (conditions.cond_lang === 0) {
        simple_transition($("#main_instructions2"), $("#demographics1_nl"));
        $("#demographics1_en").hide();
    } else if (conditions.cond_lang == 1) {
        simple_transition($("#main_instructions2"), $("#demographics1_en"));
        $("#demographics1_nl").hide();
    }
    $("#next").attr('onclick', 'to_demographics2()');
    $("#back").attr('onclick', 'to_main_instructions2()');
    define_keys($("#age_sel"), 'number', 2);
}

function to_demographics2() {
    if (check_fields($(".select_menu")) === true) {
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
        simple_transition($("#demographics1"), $("#demographics2"));
        $("#next").attr('onclick', 'to_main_instructions6()');
        // $("#back").attr('onclick', 'to_demographics1()');
    }
}

// function to_main_instructions1() {
//     conditions = get_cond();
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = 'DUTCH DUTCH DUTCH INSTRUCTION1';
//     } else if (conditions.cond_lang == 1) {
//         text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION1';
//     }
//     $('body').prepend('<div id="main_instructions1" class="main_instructions">' + text + '</div>');
//     simple_transition($("#demographics2"), $("#main_instructions1"));
//     $("#next").attr('onclick', 'to_main_instructions2()');
// }
//
// function to_main_instructions2() {
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = 'DUTCH DUTCH DUTCH INSTRUCTION2';
//     } else if (conditions.cond_lang == 1) {
//         text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION2';
//     }
//     $('body').prepend('<div id="main_instructions2" class="main_instructions">' + text + '</div>');
//     simple_transition($("#main_instructions1"), $("#main_instructions2"));
//     $("#next").attr('onclick', 'to_main_instructions3()');
// }
//
// function to_main_instructions3() {
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = 'DUTCH DUTCH DUTCH INSTRUCTION3';
//     } else if (conditions.cond_lang == 1) {
//         text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION3';
//     }
//     $('body').prepend('<div id="main_instructions3" class="main_instructions">' + text + '</div>');
//     simple_transition($("#main_instructions2"), $("#main_instructions3"));
//     $("#next").attr('onclick', 'to_main_instructions4()');
// }
//
// function to_main_instructions4() {
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = 'DUTCH DUTCH DUTCH INSTRUCTION4';
//     } else if (conditions.cond_lang == 1) {
//         text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION4';
//     }
//     $('body').prepend('<div id="main_instructions4" class="main_instructions">' + text + '</div>');
//     simple_transition($("#main_instructions3"), $("#main_instructions4"));
//     $("#next").attr('onclick', 'to_main_instructions5()');
// }
//
// function to_main_instructions5() {
//     var text;
//     if (conditions.cond_lang === 0) {
//         text = 'DUTCH DUTCH DUTCH INSTRUCTION5';
//     } else if (conditions.cond_lang == 1) {
//         text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION5';
//     }
//     $('body').prepend('<div id="main_instructions5" class="main_instructions">' + text + '</div>');
//     simple_transition($("#main_instructions4"), $("#main_instructions5"));
//     $("#next").attr('onclick', 'to_main_instructions6()');
// }

function to_main_instructions6() {
    var text;
    var menu1;
    var menu2;
    if (conditions.cond_lang === 0) {
        if (conditions.cb === 0) {
            text = instructions_nextweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten ga je dit weekend doen?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten ga je zeker niet doen dit weekend?' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.cb == 1) {
            text = instructions_pastweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.cb === 0) {
            text = instructions_nextweekend_en;
            menu1 = '<div id="activity_future" class="text3">' +
                'Which of the following activities are going to do this weekend?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Which of the following activities are you definitely not going to do?' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.cb == 1) {
            text = instructions_pastweekend_en;
            menu1 = '<div id="activity_past" class="text3">' +
                'Which of the following acitivities did you do last weekend?' +
                '<select id="activity_past_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_past_non" class="text3">' +
                'Which of the following activities did you not do last weekend?' +
                '<select id="activity_past_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    }
    setTimeout(function() {
        populate_select_from_json($("#activity_future_sel"), conditions.cond_lang);
        populate_select_from_json($("#activity_future_non_sel"), conditions.cond_lang);
    }, 100);
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    if (conditions.cond_lang === 0) {
        simple_transition($("#demographics2_nl"), $("#main_instructions6"));
    } else if (conditions.cond_lang == 1) {
        simple_transition($("#demographics2_en"), $("#main_instructions6"));
    }
    $("#next").attr('onclick', 'to_main_instructions7()');
    // $("#back").attr('onclick', 'to_demographics2()');
}

function to_main_instructions7() {
    if (check_multi_select() === true) {
        if (find_duplicates_in_array() === true) {
            var items_for_rating;
            var table_rows;
            var a;
            var text;
            if (conditions.cond_lang === 0) {
                if (conditions.cb === 0) {
                    items_for_rating = collect_selected('future', 'do');
                    text = slider_text_nextweekend_do_nl;
                } else if (conditions.cb == 1) {
                    items_for_rating = collect_selected('past', 'do');
                    text = slider_text_pastweekend_do_nl;
                }
            } else if (conditions.cond_lang == 1) {
                if (conditions.cb === 0) {
                    items_for_rating = collect_selected('future', 'do');
                    text = slider_text_nextweekend_do_en;
                } else if (conditions.cb == 1) {
                    items_for_rating = collect_selected('past', 'do');
                    text = slider_text_pastweekend_do_en;
                }
            }

            $('body').prepend('<div id="main_instructions7" class="main_instructions__">' + text + '</div>');

            $(items_for_rating).each(function(index, val) {
                if (conditions.cb === 0) {
                    a = generate_table_row(index, val, 'future', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                } else if (conditions.cb == 1) {
                    a = generate_table_row(index, val, 'past', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                }
            });
            activate_stretch();
            simple_transition_2($(".main_instructions_"), $("#main_instructions7"));
            $("#next").attr('onclick', 'to_main_instructions7a()');
            $("#back").attr('onclick', 'to_main_instructions6()');
        }
    }
}

function to_main_instructions7a() {
    if (check_slider($(".slider_io_output")) === true) {
        var items_for_rating;
        var table_rows;
        var a;
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.cb === 0) {
                items_for_rating = collect_selected('future', 'notdo');
                text = slider_text_nextweekend_notdo_nl;
            } else if (conditions.cb == 1) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo_nl;
            }

        } else if (conditions.cond_lang == 1) {
            if (conditions.cb === 0) {
                items_for_rating = collect_selected('future', 'notdo');
                text = slider_text_nextweekend_notdo_en;
            } else if (conditions.cb == 1) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo_en;
            }
        }
        $('body').prepend('<div id="main_instructions7a" class="main_instructions_">' + text + '</div>');

        $(items_for_rating).each(function(index, val) {
            if (conditions.cb === 0) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            } else if (conditions.cb == 1) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            }
        });
        activate_stretch();
        simple_transition_2($(".main_instructions__"), $("#main_instructions7a"));
        $("#next").attr('onclick', 'to_model_statement1()');
        $("#back").attr('onclick', 'to_main_instructions7()');
    }
}

function to_model_statement1() {
    if (check_slider($(".slider_io_output")) === true) {
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
// !!!!!!
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
            $("#next").attr('onclick', 'to_text_input_instructions1()');
        }
    }
}

function to_text_input_instructions1() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(4, quiz_order[3], conditions.cond_lang) === true) {
            var text;
            if (conditions.cond_lang === 0) {
                if (conditions.cond_ver === 0) {
                    text = instructions_truthful_future_nl;
                } else if (conditions.cond_ver == 1) {
                    text = instructions_deceptive_future_nl;
                }
            } else if (conditions.cond_lang == 1) {
                if (conditions.cond_ver === 0) {
                    text = instructions_truthful_future_en;
                } else if (conditions.cond_ver == 1) {
                    text = instructions_deceptive_future_en;
                }
            }
            // !!// check: always gives specific option
            var instructive;
            if (conditions.cb === 0) {
                instructive = select_manipulation('future', conditions.cond_lang);
            } else if (conditions.cb == 1) {
                instructive = select_manipulation('past', conditions.cond_lang);
            }
            // if (conditions.cond_ver === 0) {
            //     instructive_final = instructive.option_normal;
            // } else if (conditions.cond_ver == 1) {
            //     instructive_final = instructive.option_specific;
            // }
            var instruction_span = '<span id="instructive_span">' + instructive + '</span>';
            $('body').prepend('<div id="text_input_instructions_1" class="main_instructions_">' + text + instruction_span + '</div>');
            simple_transition($(".main_instructions_"), $("#text_input_instructions_1"));
            $("#next").attr('onclick', 'to_statement_input1()');
        }
    }
}

function to_statement_input1() {
    var instructive;
    var text;
    if (conditions.cond_lang === 0) {
        if (conditions.cb === 0) {
            instructive = select_manipulation('future', conditions.cond_lang);
        } else if (conditions.cb == 1) {
            instructive = select_manipulation('past', conditions.cond_lang);
        }
        text = instructions_inputfield_nl;
    } else if (conditions.cond_lang == 1) {
        if (conditions.cb === 0) {
            instructive = select_manipulation('future', conditions.cond_lang);
        } else if (conditions.cb == 1) {
            instructive = select_manipulation('past', conditions.cond_lang);
        }
        text = instructions_inputfield_en;
    }
    console.log(instructive);

    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement1" placehoder="your answer"></textarea>';

    $('body').prepend('<div id="statement_input1" class="main_instructions_">' + text + input_field + '</div>');
    start_timer();
    simple_transition($("#text_input_instructions_1"), $("#statement_input1"));
    // $("#next").attr('onclick', 'to_main_instructions8()');
    $("#next").attr('onclick', 'to_lextale()');
    // check input length & meaningfulness
}

function to_main_instructions8() {
    if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
        statement1_main = collect_statement($("#statement1"));
        var text;
        var menu1;
        var menu2;
        if (conditions.cond_lang === 0) {
            if (conditions.cb == 1) {
                text = instructions_nextweekend_nl;
                menu1 = '<div id="activity_future" class="text3">' +
                    'Welk van de volgende activiteiten ga je dit weekend doen?' +
                    '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                    '<option value="Sporten">Sporten</option>' +
                    '<option value="Netflix kijken">Netflix kijken</option>' +
                    '<option value="Uitgaan">Uitgaan</option>' +
                    '<option value="Eten met vrienden">Eten met vrienden</option>' +
                    '<option value="Familie bezoeken">Familie bezoeken</option>' +
                    '<option value="Winkelen">Winkelen</option>' +
                    '<option value="Een dagje uit">Een dagje uit</option>' +
                    '<option value="Naar de film">Naar de film</option>' +
                    '<option value="Naar een concert">Naar een concert</option>' +
                    '<option value="Naar een festival">Naar een festival</option>' +
                    '<option value="Werken">Werken</option>' +
                    '<option value="Studeren">Studeren</option>' +
                    '<option value="Niets doen">Niets doen</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_future_non" class="text3">' +
                    'Welk van de volgende activiteiten ga je zeker niet doen dit weekend?' +
                    '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                    '<option value="Sporten">Sporten</option>' +
                    '<option value="Netflix kijken">Netflix kijken</option>' +
                    '<option value="Uitgaan">Uitgaan</option>' +
                    '<option value="Eten met vrienden">Eten met vrienden</option>' +
                    '<option value="Familie bezoeken">Familie bezoeken</option>' +
                    '<option value="Winkelen">Winkelen</option>' +
                    '<option value="Een dagje uit">Een dagje uit</option>' +
                    '<option value="Naar de film">Naar de film</option>' +
                    '<option value="Naar een concert">Naar een concert</option>' +
                    '<option value="Naar een festival">Naar een festival</option>' +
                    '<option value="Werken">Werken</option>' +
                    '<option value="Studeren">Studeren</option>' +
                    '<option value="Niets doen">Niets doen</option>' +
                    '</select>' +
                    '</div>';
            } else if (conditions.cb === 0) {
                text = instructions_pastweekend_nl;
                menu1 = '<div id="activity_past" class="text3">' +
                    'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                    '<select id="activity_past_sel" class="select_menu_2" multiple>' +
                    '<option value="Sporten">Sporten</option>' +
                    '<option value="Netflix kijken">Netflix kijken</option>' +
                    '<option value="Uitgaan">Uitgaan</option>' +
                    '<option value="Eten met vrienden">Eten met vrienden</option>' +
                    '<option value="Familie bezoeken">Familie bezoeken</option>' +
                    '<option value="Winkelen">Winkelen</option>' +
                    '<option value="Een dagje uit">Een dagje uit</option>' +
                    '<option value="Naar de film">Naar de film</option>' +
                    '<option value="Naar een concert">Naar een concert</option>' +
                    '<option value="Naar een festival">Naar een festival</option>' +
                    '<option value="Werken">Werken</option>' +
                    '<option value="Studeren">Studeren</option>' +
                    '<option value="Niets doen">Niets doen</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_past_non" class="text3">' +
                    'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                    '<select id="activity_past_non_sel" class="select_menu_2" multiple>' +
                    '<option value="Sporten">Sporten</option>' +
                    '<option value="Netflix kijken">Netflix kijken</option>' +
                    '<option value="Uitgaan">Uitgaan</option>' +
                    '<option value="Eten met vrienden">Eten met vrienden</option>' +
                    '<option value="Familie bezoeken">Familie bezoeken</option>' +
                    '<option value="Winkelen">Winkelen</option>' +
                    '<option value="Een dagje uit">Een dagje uit</option>' +
                    '<option value="Naar de film">Naar de film</option>' +
                    '<option value="Naar een concert">Naar een concert</option>' +
                    '<option value="Naar een festival">Naar een festival</option>' +
                    '<option value="Werken">Werken</option>' +
                    '<option value="Studeren">Studeren</option>' +
                    '<option value="Niets doen">Niets doen</option>' +
                    '</select>' +
                    '</div>';
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cb == 1) {
                text = instructions_nextweekend_en;
                menu1 = '<div id="activity_future" class="text3">' +
                    'Which of the following activities are going to do this weekend?' +
                    '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_future_non" class="text3">' +
                    'Which of the following activities are you definitely not going to do?' +
                    '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            } else if (conditions.cb === 0) {
                text = instructions_pastweekend_en;
                menu1 = '<div id="activity_past" class="text3">' +
                    'Which of the following acitivities did you do last weekend?' +
                    '<select id="activity_past_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_past_non" class="text3">' +
                    'Which of the following activities did you not do last weekend?' +
                    '<select id="activity_past_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            }
        }
        $('body').prepend('<div id="main_instructions8" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
        simple_transition($("#statement_input1"), $("#main_instructions8"));
        $("#next").attr('onclick', 'to_main_instructions9()');
    }
}

function to_main_instructions9() {
    if (check_multi_select() === true) {
        var items_for_rating;
        var table_rows;
        var a;
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.cb == 1) {
                items_for_rating = collect_selected('future', 'do');
                text = slider_text_nextweekend_do_nl;
            } else if (conditions.cb === 0) {
                items_for_rating = collect_selected('past', 'do');
                text = slider_text_pastweekend_do_nl;
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cb == 1) {
                items_for_rating = collect_selected('future', 'do');
                text = slider_text_nextweekend_do_en;
            } else if (conditions.cb === 0) {
                items_for_rating = collect_selected('past', 'do');
                text = slider_text_pastweekend_do_en;
            }
        }

        $('body').prepend('<div id="main_instructions9" class="main_instructions_">' + text + '</div>');

        $(items_for_rating).each(function(index, val) {
            if (conditions.cb == 1) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang);
                $('#main_instructions9').append(a);
            } else if (conditions.cb === 0) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang);
                $('#main_instructions9').append(a);
            }
        });
        activate_stretch();
        simple_transition($("#main_instructions8"), $("#main_instructions9"));
        $("#next").attr('onclick', 'to_main_instructions10()');
    }
}

function to_main_instructions10() {
    var items_for_rating;
    var table_rows;
    var a;
    var text;
    if (conditions.cond_lang === 0) {
        if (conditions.cb == 1) {
            items_for_rating = collect_selected('future', 'notdo');
            text = slider_text_nextweekend_notdo_nl;
        } else if (conditions.cb === 0) {
            items_for_rating = collect_selected('past', 'notdo');
            text = slider_text_pastweekend_notdo_nl;
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.cb == 1) {
            items_for_rating = collect_selected('future', 'notdo');
            text = slider_text_nextweekend_notdo_en;
        } else if (conditions.cb === 0) {
            items_for_rating = collect_selected('past', 'notdo');
            text = slider_text_pastweekend_notdo_en;
        }
    }
    $('body').prepend('<div id="main_instructions10" class="main_instructions_">' + text + '</div>');

    $(items_for_rating).each(function(index, val) {
        if (conditions.cb == 1) {
            a = generate_table_row(index, val, 'future', conditions.cond_lang);
            $('#main_instructions10').append(a);
        } else if (conditions.cb === 0) {
            a = generate_table_row(index, val, 'past', conditions.cond_lang);
            $('#main_instructions10').append(a);
        }
    });
    activate_stretch();
    simple_transition($("#main_instructions9"), $("#main_instructions10"));
    $("#next").attr('onclick', 'to_text_input_instructions2()');
}


// function to_model_statement2() {
//     if (check_slider($(".slider_io_output")) === true) {
//         var text;
//         var modelstatement;
//         if (conditions.cond_lang === 0) {
//             text = 'DUTCH DUTCH DUTCH INSTRUCTION MODELSTATEMENT';
//             modelstatement = modelstatement_nl;
//         } else if (conditions.cond_lang == 1) {
//             text = 'ENGLISH ENGLISH ENGLISH MODELSTATEMENT';
//             modelstatement = modelstatement_en;
//         }
//         $('body').prepend('<div id="model_statement2" class="main_instructions_">' + text + modelstatement + '</div>');
//         simple_transition($("#main_instructions9"), $("#model_statement2"));
//         $("#next").attr('onclick', 'to_text_input_instructions2()').hide();
//         setTimeout(function() {
//             $("#next").show();
//         }, timer);
//     }
// }

function to_text_input_instructions2() {
    var text;
    if (conditions.cond_lang === 0) {
        if (conditions.cond_ver === 0) {
            text = instructions_truthful2_nl;
        } else if (conditions.cond_ver == 1) {
            text = instructions_deceptive2_nl;
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.cond_ver === 0) {
            text = instructions_truthful2_en;
        } else if (conditions.cond_ver == 1) {
            text = instructions_deceptive2_en;
        }
    }
    var instructive;
    if (conditions.cb == 1) {
        instructive = select_manipulation('future', conditions.cond_lang);
    } else if (conditions.cb === 0) {
        instructive = select_manipulation('past', conditions.cond_lang);
    }
    var instructive_final;
    if (conditions.cond_ver === 0) {
        instructive_final = instructive.option_normal;
    } else if (conditions.cond_ver == 1) {
        instructive_final = instructive.option_specific;
    }
    $('body').prepend('<div id="text_input_instructions_2" class="main_instructions_">' + text + instructive_final + '</div>');
    simple_transition($(".main_instructions_"), $("#text_input_instructions_2"));
    $("#next").attr('onclick', 'to_statement_input2()');
}

function to_statement_input2() {
    var instructive;
    if (conditions.cb == 1) {
        instructive = select_manipulation('future');
    } else if (conditions.cb === 0) {
        instructive = select_manipulation('past');
    }
    console.log(instructive);

    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement2" placehoder="your answer"></textarea>';
    $('body').prepend('<div id="statement_input2" class="main_instructions_">HERE COMES THE INPUT FIELD.' + input_field + '</div>');
    start_timer();
    simple_transition($("#text_input_instructions_2"), $("#statement_input2"));
    $("#next").attr('onclick', 'to_lextale()');
}


function to_lextale() {
    if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
        statement1_main = collect_statement($("#statement1"));
        var lextale_explanation;
        var lextale_explanation_key_right;
        var lextale_explanation_key_left;
        if (conditions.cond_lang === 0) {
            language = 'nl';
            lextale_explanation = lextale_explanation_nl;
            lextale_explanation_key_right = lextale_explanation_nl_key_right;
            lextale_explanation_key_left = lextale_explanation_nl_key_left;
        } else if (conditions.cond_lang == 1) {
            language = 'en';
            lextale_explanation = lextale_explanation_en;
            lextale_explanation_key_right = lextale_explanation_en_key_right;
            lextale_explanation_key_left = lextale_explanation_en_key_left;
        }
        var lextale_main_dom = '<div id="intro" class="text1" style="font-size: 1.2vw">' + lextale_explanation +
            '</div>' +
            '<p id="stim_key_left" class="stim">' + lextale_explanation_key_left +
            '</p>' +
            '<p id="stim_key_right" class="stim">' + lextale_explanation_key_right +
            '</p>' +
            '<div id="stim_main">' +
            '<div id="stim_stim">' +
            '</div>' +
            '</div>' +
            '<div id="outro">' +
            '</div>';
        $('body').prepend('<div id="lextale1" class="wrapper0">' + lextale_main_dom + '</div>');
        simple_transition($("#statement_input1"), $("#lextale1"));
        $("#next").hide();
        init_main();
    }
}

function to_vocabulary_task() {
    var vocabulary_task_explanation;
    if (conditions.cond_lang === 0) {
        vocabulary_task_explanation = vocabulary_task_explanation_nl;
    } else if (conditions.cond_lang == 1) {
        vocabulary_task_explanation = vocabulary_task_explanation_en;
    }

    var vocabulary_task_dom = '<textarea class="textbox_" id="tbwordprod" rows="10" cols="80"></textarea>';

    simple_transition($("#lextale1"), $("#langtask1"));
    $("#next").hide();
    $('body').prepend('<div id="langtask1" class="main_instructions_">' + vocabulary_task_explanation + vocabulary_task_dom + '</div>');
    init_language_task1($("#tbwordprod"), time_langtask1);
    // $("#next").attr('onclick', 'to_outro()');
}

function to_outro() {
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

function get_data() {
    var bilingual_bool;
    if (conditions.cond_lang === 0) {
        bilingual_bool = $("#bilingual_sel_nl").val();
    } else if (conditions.cond_lang == 1) {
        bilingual_bool = $("#bilingual_sel_en").val();
    }
    data.ip = clientip;
    data.browsername = $.browser.name;
    data.browserversion = $.browser.version;
    data.ts_time = moment().format('LTS');
    data.ts_date = moment().format('l');
    data.unid = unid;
    data.unidin = $("#unidin").val();
    data.crowdf = $("#crowdf").val();
    data.gender = $("#gender_sel").val();
    data.age = $("#age_sel").val();
    data.education = $("#education_sel").val();
    data.origin = $("#origin_sel").val();
    data.bilingual_sel = bilingual_bool;
    data.lang1_sel = $("#lang1_sel").val();
    data.lang2_sel = $("#lang2_sel").val();
    data.cond_lang = conditions.cond_lang;
    data.cond_ver = conditions.cond_ver;
    data.cb = conditions.cb;

    data.activity_past = 'xxx';
    data.n_activities_past = '12345';
    data.activity_past_freq = '12345';
    data.activity_past_cert = '12345';

    data.activity_future = 'xxx';
    data.n_activities_future = '12345';
    data.activity_future_freq = '12345';
    data.activity_future_cert = '12345';

    data.statement1_content = statement1_main.content;
    data.statement1_defoucus = statement1_main.pagefocus.defocus;
    data.statement1_refoucus = statement1_main.pagefocus.refocus;
    data.statement1_defocusduration = statement1_main.pagefocus.durationsum;
    data.statement1_length = statement1_main.length;
    data.statement1_elapsed = statement1_main.elapsed;

    // data.statement2_content = statement2_main.content;
    // data.statement2_defoucus = statement2_main.pagefocus.defocus;
    // data.statement2_refoucus = statement2_main.pagefocus.refocus;
    // data.statement2_defocusduration = statement2_main.pagefocus.durationsum;
    // data.statement2_length = statement2_main.length;
    // data.statement2_elapsed = statement2_main.elapsed;

    console.log(data);
}
