$(".parent .link").on("click", function(){
    call_page = $(this).attr('link');
    console.log(call_page);
    $("section").fadeOut();
    console.log(this);
    switch (call_page) {
        case "accueil":
            $("#accueil").fadeIn();
            break;

        case "propos":
            $("#propos").fadeIn();
            break;

        case "location":
            console.log("peut-etre");
            break;

        case "contact":
            console.log("pas envie");
            break;
                        
        default:
            console.log("JE SUIS PERDU LA");
            break;

    }
})