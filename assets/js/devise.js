let Prix = $('#prix');
let ButtonDollar = $('.dollar');
let ButtonEuro = $('.euro');
let ButtonYen = $('.yen');

ButtonEuro.on('click', function() {
    Prix.text("Prix: 1200 €")
});

ButtonDollar.on('click', function() {
    Prix.text("Prix: 1360 $")
});

ButtonYen.on('click', function() {
    Prix.text("Prix: 154 000 ¥ ")
});




