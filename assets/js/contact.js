$(function(){
    $("#confirm_button").on("click",function(){
            confirmContact();
    })
})

function confirmContact(){
    Swal.fire(
    'Validé !',
    'Votre message nous a bien été envoyé!',
    'success'
    );
}