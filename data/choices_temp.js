// dutch
var choices_nl = [{
    option_normal: "Naar de dierentuin gaan",
    option_specific: "Naar de dierentuin gaan met je vriend/vriendin in Amsterdam",
}, {
    option_normal: "Naar een sportwedstrijd kijken",
    option_specific: "Naar een sportwedstrijd kijken met je vriendengroep",
}, {
    option_normal: "Een drankje doen",
    option_specific: "Een drankje doen met vrienden in Amsterdam",
}, {
    option_normal: "Gaan sporten",
    option_specific: "Gaan sporten met je team",
}, {
    option_normal: "Netflix kijken",
    option_specific: "Netflix kijken met je huisgenoot",
}, {
    option_normal: "Naar een feest gaan",
    option_specific: "Naar een feest gaan met een jeugdvriend in Amsterdam",
}, {
    option_normal: "Uit eten gaan",
    option_specific: "Uit eten gaan met je ouders naar een Italiaans restaurant",
}, {
    option_normal: "Naar een verjaardag gaan",
    option_specific: "Naar een verjaardag gaan van je neef",
}, {
    option_normal: "Op familiebezoek",
    option_specific: "Op familiebezoek bij je opa/oma",
}, {
    option_normal: "Koken voor een etentje",
    option_specific: "Koken voor een etentje met jeugdvrienden",
}, {
    option_normal: "Winkelen",
    option_specific: "Winkelen met je moeder in Amsterdam",
}, {
    option_normal: "Een stedentrip maken",
    option_specific: "Een stedentrip maken met je broer/zus naar Den Haag",
}, {
    option_normal: "Naar de film gaan",
    option_specific: "Naar de film gaan met een date in Amsterdam",
}, {
    option_normal: "Naar een concert gaan",
    option_specific: "Naar een concert gaan met je broer/zus",
}, {
    option_normal: "Werken",
    option_specific: "Werken in de stad waar je bent opgegroeid",
}, {
    option_normal: "Studeren",
    option_specific: "Studeren met een vriend in de UB",
}, {
    option_normal: "Naar de zee gaan",
    option_specific: "Naar de zee gaan met een vriendin om te sporten",
}, {
    option_normal: "Naar een museum gaan",
    option_specific: "Naar een museum gaan met je ouders in Amsterdam",
}, {
    option_normal: "Naar een voorstelling gaan",
    option_specific: "Naar een voorstelling gaan met het hele gezin",
}, {
    option_normal: "Naar een festival gaan",
    option_specific: "Naar een festival gaan met je beste vriend in Amsterdam",
}, {
    option_normal: "Een feestje geven",
    option_specific: "Een feestje geven met je huisgenoten",
}];

// english
var choices_en = [{
    option_normal: "Going to the zoo",
    option_specific: "Go to the zoo with your boyfriend/girlfriend in Amsterdam",
}, {
    option_normal: "Going to a sports game",
    option_specific: "Go to a sports game with a group of friends",
}, {
    option_normal: "Going out for a drink",
    option_specific: "Going out for a drink with your friends in Amsterdam",
}, {
    option_normal: "Work out",
    option_specific: "Work out with your sport team",
}, {
    option_normal: "Watching Netflix",
    option_specific: "Watching Netflix with your roommate",
}, {
    option_normal: "Going to a party",
    option_specific: "Going to a party with a childhood friend in Amsterdam",
}, {
    option_normal: "Going out for dinner",
    option_specific: "Going out for dinner with your parents to an Italian restaurant",
}, {
    option_normal: "Going to a birthday",
    option_specific: "Going to the birthday of your cousin",
}, {
    option_normal: "Going on a family visit",
    option_specific: "Going on a family visit to your grandfather/grandmother",
}, {
    option_normal: "Cooking for dinner",
    option_specific: "Cooking for dinner with your childhood friends",
}, {
    option_normal: "Go shopping",
    option_specific: "Go shopping with your mom in Amsterdam",
}, {
    option_normal: "Going on a city trip",
    option_specific: "Going on a city trip with you sibling to The Hague",
}, {
    option_normal: "Going to the movies",
    option_specific: "Going to the movies with a date in Amsterdam",
}, {
    option_normal: "Going to a concert",
    option_specific: "Going to a concert with your sibling",
}, {
    option_normal: "Working",
    option_specific: "Working in your hometown",
}, {
    option_normal: "Studying",
    option_specific: "Studying with a friend in the library",
}, {
    option_normal: "Going to the sea",
    option_specific: "Going to the sea with a girlfriend to do some sport",
}, {
    option_normal: "Going to a museum",
    option_specific: "Going to a museum with your parents in Amsterdam",
}, {
    option_normal: "Going to a show",
    option_specific: "Going to a show with your family",
}, {
    option_normal: "Going to a festival",
    option_specific: "Going to a festival with your best friend in Amsterdam",
}, {
    option_normal: "Throwing a party",
    option_specific: "Throwing a party with your roommates",
}];


function populate_select_from_json(ID, language) {
    var choices;
    if (language === 0) {
        choices = choices_nl;
    } else if (language == 1) {
        choices = choices_en;
    }
    $.each(choices, function(key, value) {
        $(ID)
            .append($("<option></option>")
            .attr("value", key)
            .text(value.option_normal));
    });
}
