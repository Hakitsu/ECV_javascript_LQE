

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

        case "location":
            $("#location").fadeIn();
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
  $("section").fadeout();
}
