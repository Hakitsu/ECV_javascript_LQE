newsletter_check = false;
$(function(){
    $("body").on("mouseleave",function(){
        if(newsletter_check == false){
            //exitPage();
            newsletter_check = true;
        }
    })
})

function exitPage(){
    Swal.fire({
        title : 'Newsletter',
        text : 'Abonnez-vous pour ne pas louper nos news',
        input : 'email',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'NON !',
        confirmButtonColor: '#3085d6',
        confirmButtonText: "S'ABONNER !",
        reverseButtons: true
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
        'Merci!',
        'Vous allez recevoir un mail qui confirme votre abonnement.',
        'success'
        )
    }
    });
}