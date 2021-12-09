$(".bouton_produit").on("click", function(){
    name_car = $(this).closest(".produit").find("h1").text();
    sectionOut();
    $("#contact").fadeIn();
    $("#form_voiture").fadeIn().val(name_car);
    
    
});

$(".parent .link").on("click", function(){
    call_page = $(this).attr('link');
    sectionOut();
    switch (call_page) {
        case "accueil":
            $("#accueil").fadeIn();
            break;

        case "propos":
            $("#propos").fadeIn();
            break;

        case "boutique":
            $("#boutique").fadeIn();
            break;

        case "contact":
            $("#contact").fadeIn();
            break;

        default:
            console.log("JE SUIS PERDU LA");
            break;

    }
})

function sectionOut(){
  $("section").fadeOut();
}
