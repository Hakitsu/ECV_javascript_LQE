let buttonDarkMode = $('.buttonDarkMode');
let SectionàPropos = $('#propos');
let SectionàProposH1 = $('#propos h1 ');
let SectionBoutiqueH1 = $('#Boutique h1');
let feedbackInput = $('.feedback-input');
let boutique = $('#Boutique');
let card = $('.card button')

buttonDarkMode.on('click', function() {
    if(buttonDarkMode.hasClass('darkMode')){
    buttonDarkMode.text("Activer le dark mode ")

    buttonDarkMode.removeClass('darkMode')
    SectionàPropos.removeClass('darkMode')
    SectionàProposH1.removeClass('darkMode')
    SectionàProposH1.addClass('divider gradient')
    card.addClass('darkMode')
    $('body').removeClass('darkMode')
    $('html').removeClass('darkMode')

    feedbackInput.removeClass('darkMode')

    boutique.removeClass('darkMode')
    SectionBoutiqueH1.removeClass('darkMode')
    SectionBoutiqueH1.addClass('divider gradient')
    }
    else{
        buttonDarkMode.text("Désactiver le dark mode ")
        
        $('body').addClass('darkMode')
        $('html').addClass('darkMode')
        
        buttonDarkMode.addClass('darkMode')

        SectionàPropos.addClass('darkMode')
        SectionàProposH1.addClass('darkMode')
        SectionàProposH1.removeClass('divider gradient')
        card.removeClass('darkMode')
        feedbackInput.addClass('darkMode')

        boutique.addClass('darkMode')
        SectionBoutiqueH1.removeClass('divider gradient')
        SectionBoutiqueH1.addClass('darkMode')
       
        $('body').addClass('darkMode')
        

    }
});