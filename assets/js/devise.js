let Prix = $('#prix');

$(".imgDevise").click(function(){
    let PrixEuro = $(this).data("value")
    if($(this).attr("devise") == "euro"){
        Prix.text("Prix: " + PrixEuro + " €")
    }
    if($(this).attr("devise") == "dollar"){
        let PrixDollar = (PrixEuro * 1.13).toFixed(2)
        Prix.text("Prix: " + PrixDollar + " $")
    }
    if($(this).attr("devise") == "yen"){
        let PrixYen = (PrixEuro * 128.54).toFixed(2)
        Prix.text("Prix: " + PrixYen + " ¥")
    }
});




