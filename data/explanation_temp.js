var introduction = 'Welkom bij de studie Vertel iets over je weekend! <br><br>Geef aan wat je moedertaal is door op de jouw moedertaal te klikken.';
var buttons1 = '<button id="lang_button_nl" class="simple_button" type="button" onclick="set_lang_nl()">Nederlands</button><button id="lang_button_other" class="simple_button" type="button" onclick="set_lang_other()">Andere taal</button>';
var ic = '<b>INFORMATIEBROCHURE VOOR DEELNEMERS AAN ‘Vertel iets over je weekend’</b><br><br>Beste deelnemer,<br>Voordat het onderzoek begint, is het belangrijk dat je op de hoogte bent van de procedure die in dit onderzoek wordt gevolgd en wat dit betekent voor jou. Lees daarom onderstaande tekst zorgvuldig door en aarzel niet om opheldering te vragen over deze tekst, mocht deze niet duidelijk zijn. De onderzoeksleider zal eventuele vragen graag beantwoorden. Neem de tijd om het te lezen en te beslissen of je wilt deelnemen aan het onderzoek of niet. Het onderzoek zal ongeveer 60 minuten duren en volledige deelname zal worden beloond met 1 participatiepunt.<br><br><b>Doel van het onderzoek</b><br>Het onderzoek is geïnitieerd door Bruno Verschuere van de programmagroep Klinische Psychologie, afdeling Psychologie, FMG, Universiteit van Amsterdam om te onderzoeken of het mogelijk is om ware en gelogen statements over weekendplannen van elkaar te onderscheiden. <br><br><b>Vertrouwelijkheid van gegevens</b><br>Alle onderzoeksgegevens zullen vertrouwelijk worden behandeld. Alleen de verantwoordelijke personen van de afdeling Psychologie hebben toegang tot de geanonimiseerde data. De toestemmingsverklaring die je tekent zal deze mensen toestemming geven om over deze data te beschikken. De data die wordt verkregen tijdens het onderzoek zal tot 5 jaar na afronding van het onderzoek op de computer blijven opgeslagen. Als resultaten van dit onderzoek worden gepubliceerd of gepresenteerd bij wetenschappelijke bijeenkomsten, zal jouw naam nooit genoemd worden.<br><br><b>Vrijwilligheid</b><br>Als je nu besluit af te zien van deelname aan dit experiment, zal dit op geen enkele wijze gevolgen voor je hebben. Als je tijdens het onderzoek zelf besluit je medewerking te staken, zal dat eveneens op geen enkele wijze gevolg voor je hebben. Tevens kun je 24 uur na dit onderzoek alsnog je toestemming om gebruik te maken van je gegevens intrekken. Je kunt jouw medewerking dus te allen tijde staken zonder opgave van redenen. Mocht je jouw medewerking staken, of achteraf, zij het binnen 24 uur, je toestemming intrekken, dan zullen je gegevens worden verwijderd uit onze bestanden en vernietigd.<br><br><b>Verzekering</b><br>Omdat dit onderzoek geen risico’s voor de gezondheid of veiligheid met zich meebrengt, gelden de voorwaarden van de reguliere aansprakelijkheidsverzekering van de UvA.<br><br><b>Nadere inlichtingen</b><br> Mocht je vragen hebben over dit onderzoek, vooraf of achteraf, dan kun je je wenden tot de verantwoordelijke onderzoeker, Dr. Bruno Verschuere, tel. +31-205256799, email b.j.verschuere @uva.nl, Roeterseilandcampus gebouw G, kamer 1.31, Amsterdam. Voor eventuele klachten over dit onderzoek kun je je wenden tot het lid van de Commissie Ethiek, Dr. A. van Emmerik, tel. +20 525 8604, email a.a.p.vanemmer@uva.nl, Roeterseilandcampus gebouw G, kamer 1.41, Amsterdam.<br><br>Klik op de pijl om door te gaan.';

// language
var instructions_general1_nl = 'NEDERLANDS LANGUAGE MANIPULATION INSTRUCTION.';
var instructions_general1_en = 'ENGLISH LANGUAGE MANIPULATION INSTRUCTION.';

// manipulations
var instructions_general2_nl = 'In dit onderzoek zijn we geïnteresseerd in hoe we onderscheid kunnen maken tussen mensen die liegen over hun weekendplannen en mensen die hier de waarheid over vertellen. <br><br>We vergelijken hierbij activiteiten die plaatsvonden in het afgelopen weekend met activiteiten die gepland staan voor komend weekend. De ene helft van de deelnemers wordt straks gevraagd om de waarheid te vertellen over hun weekendplannen. De andere helft vragen we om hierover te liegen. Om vervolgens een goede vergelijking te kunnen maken tussen de twee groepen deelnemers, is het belangrijk dat we eerst van iedereen zeker weten wat ze <i>echt</i> voor weekendplannen hebben. <br><br>Klik op de pijl om door te gaan.';
var instructions_general2_en = 'In this study, we are interested in whether we can tell if someone is lying about their weekend plans or telling the truth.</br></br>We compare activities that have already taken place on the past weekend with those events that will take place next weekend. Half of the participants in this study will be instructed to tell the truth. The other half is told to lie about their weekend activities. To be able to differentiate between the two groups, it is important that we know from each participant what their activities were last weekend and what their plans are for next weekend. <br><br>Click on the arrow to proceed.';

var instructions_pastweekend_nl = 'Geef nu aan wat je hebt gedaan in het afgelopen weekend. In de lijst staan een aantal opties die je aan kunt klikken. Kies hieruit de optie die het meest centraal stond in jouw afgelopen weekend.<br><br> Geef ook aan wat je absoluut niet hebt gedaan in het afgelopen weekend. Hier kun je meerdere opties selecteren.';
var instructions_pastweekend_en = 'ENGLISH!!!! Geef nu aan wat je hebt gedaan in het afgelopen weekend. In de lijst staan een aantal opties die je aan kunt klikken. Kies hieruit de optie die het meest centraal stond in jouw afgelopen weekend.<br><br> Geef ook aan wat je absoluut niet hebt gedaan in het afgelopen weekend. Hier kun je meerdere opties selecteren.';
var slider_text_pastweekend_do_nl = 'Geef nu aan voor [OPTIE WEL GEDAAN IN WEEKEND] hoe vaak je deze activiteit in het verleden hebt gedaan.';
var slider_text_pastweekend_do_en = 'ENGLISH!!! Geef nu aan voor [OPTIE WEL GEDAAN IN WEEKEND] hoe vaak je deze activiteit in het verleden hebt gedaan.';
var slider_text_pastweekend_notdo_nl = 'Geef nu aan voor [OPTIE NIET GEDAAN] hoe vaak je dit in het verleden <i>wel</i> hebt gedaan.';
var slider_text_pastweekend_notdo_en = 'ENGLISH!!! Geef nu aan voor [OPTIE NIET GEDAAN] hoe vaak je dit in het verleden <i>wel</i> hebt gedaan.';

var instructions_nextweekend_nl = 'Geef nu aan wat je gaat doen in het komende weekend. In de lijst staan een aantal opties die je aan kunt klikken. Kies hieruit de optie die het meest centraal staat in jouw komende weekend.<br><br>Geef ook aan wat je absoluut niet gaat doen in het komende weekend. Hier kun je meerdere opties selecteren.';
var instructions_nextweekend_en = 'ENGLISH!!! Geef nu aan wat je gaat doen in het komende weekend. In de lijst staan een aantal opties die je aan kunt klikken. Kies hieruit de optie die het meest centraal staat in jouw komende weekend.<br><br>Geef ook aan wat je absoluut niet gaat doen in het komende weekend. Hier kun je meerdere opties selecteren.';

var slider_text_nextweekend_do_nl = 'Geef nu aan hoe vaak je de hieronder vermelde activiteit(en) in het verleden al hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteit echt gaat doen komend weekend en hoe goed je deze activiteit op dit moment al hebt gepland.';
var slider_text_nextweekend_do_en = 'ENGLISH!!!! Geef nu aan voor [OPTIE WEL DOEN IN KOMEND WEEKEND] hoe vaak je deze activiteit in het verleden al hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteit echt gaat doen komend weekend en hoe goed je deze activiteit op dit moment al hebt gepland.';
var slider_text_nextweekend_notdo_nl = 'Geef nu aan hoe vaak je de hieronder vermelde activiteit(en) in het verleden <i>wel</i> hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteit echt niet gaat doen komend weekend.';
var slider_text_nextweekend_notdo_en = 'ENGLISH!!!! Geef nu aan voor [OPTIE NIET DOEN IN KOMEND WEEKEND] hoe vaak je deze activiteit in het verleden <i>wel</i> hebt gedaan.<br><br>Geef ook aan hoe zeker het is dat je deze activiteit echt niet gaat doen komend weekend.';

var instructions_deceptive1_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// + repeat choice!
var instructions_truthful1_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// + repeat choice!


var instructions_deceptive1_en = 'You are now asked to write a statement about your activities on the last weekend and abut your plans for next weekend. Your task is to <i>lie</i> about this. We will give you the activity that you have to lie about. Make up a convincing story around this event. To be convincing, try to be as detailed and as plausible as possible in your statement.<br><br>Click on the arrow to proceed.';
// + repeat choice!
var instructions_truthful1_en = 'You are now asked to write a statement about your activities on the last weekend and abut your plans for next weekend. Your task is to <i>tell the truth</i> about this. In your statement, please describe the activity stated below. This event was selected from the list of activities that you indicated previously. To be convincing, try to be as detailed and as plausible as possible in your statement.<br><br>Click on the arrow to proceed.';
// + repeat choice!


var instructions_deceptive2_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// + repeat choice!
var instructions_truthful2_nl = 'Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// + repeat choice!


var instructions_deceptive2_en = 'ENGLISH!!!!! Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier over <i>liegt</i>. De activiteit waar je over gaat liegen is gegeven. Jij bedenkt dus het verhaal om deze activiteit heen. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.<br><br>Klik op de pijl om door te gaan';
// + repeat choice!
var instructions_truthful2_en = 'ENGLISH!!! Je wordt nu gevraagd om een verhaal te schrijven over de activiteit van afgelopen weekend en een verhaal over de activiteit van komend weekend. Het is de bedoeling dat je hier <i>de waarheid</i> over vertelt. Beschrijf hierbij de activiteit waarvan je net hebt aangegeven die te gaan doen of die je hebt gedaan. Probeer hierbij zo gedetailleerd en plausibel mogelijk te zijn.';
// + repeat choice!


var instructions_modelstatement_nl = 'Uit eerder onderzoek is gebleken dat het voor veel deelnemers lastig is om een duidelijk verhaal te vertellen wat gedetailleerd genoeg is. Daarom krijg je zo eerst een voorbeeld te lezen. Lees dit aandachtig door, hierna komen er vragen over het modelstatement. Deze moet je goed beantwoorden voordat je door kan met de taak.';
var instructions_modelstatement_en = 'ENGLISH !!! Uit eerder onderzoek is gebleken dat het voor veel deelnemers lastig is om een duidelijk verhaal te vertellen wat gedetailleerd genoeg is. Daarom krijg je zo eerst een voorbeeld te lezen. Lees dit aandachtig door, hierna komen er vragen over het modelstatement. Deze moet je goed beantwoorden voordat je door kan met de taak.';

// language tasks
// see lextale and vocab_task directoties

// outro
var debriefing_nl = 'DEBRIEFING NL';
var debriefing_en = 'DEBRIEFING EN';

var outro_nl = 'NEDERLANDS!!!! Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
    '<span id="debr">' + debriefing_nl + '</span></br></br>' +
    'In order to validate your participation, it is necessary that you provide your UvA Student number below in the left hand-field and confirm your participation code in the middle text field.' +
    '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="16" style="text-align: center; left: 20%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR UVA STUDENT NUMBER">' +
    '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 50%; top: 85%; height: 10%; width: 25%; color: red" placeholder="PARTICIPATION CODE">';
var outro_en = 'Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
    '<span id="debr">' + debriefing_en + '</span></br></br>' +
    'In order to validate your participation, it is necessary that you provide your UvA Student number below in the left hand-field and confirm your participation code in the middle text field.' +
    '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="16" style="text-align: center; left: 20%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR UVA STUDENT NUMBER">' +
    '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 50%; top: 85%; height: 10%; width: 25%; color: red" placeholder="PARTICIPATION CODE">';

// credits
var credits = '<div id="credits">' +
    'University of Amsterdam // Bennett Kleinberg: <a href="mailto:b.a.r.kleinberg@uva.nl?Subject=Online%20Experiment" target="_top">b.a.r.kleinberg@uva.nl</a>' +
    '</div>';
