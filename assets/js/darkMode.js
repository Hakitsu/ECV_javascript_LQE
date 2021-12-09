let buttonDarkMode = $('.buttonDarkMode');
let SectionàPropos = $('#propos');
let SectionàProposH1 = $('#propos h1');
let feedbackInput = $('.feedback-input');

buttonDarkMode.on('click', function() {
    if(buttonDarkMode.hasClass('darkMode')){
    buttonDarkMode.text("Activer le dark mode ")
    
    buttonDarkMode.removeClass('darkMode')
    SectionàPropos.removeClass('darkMode')
    SectionàProposH1.removeClass('darkMode')
    $('body').removeClass('darkMode')
    feedbackInput.removeClass('darkMode')
    SectionàProposH1.addClass('divider gradient')
    }
    else{
        buttonDarkMode.text("Désactiver le dark mode ")
        
        buttonDarkMode.addClass('darkMode')
        SectionàPropos.addClass('darkMode')
        SectionàProposH1.addClass('darkMode')
        feedbackInput.addClass('darkMode')
        SectionàProposH1.removeClass('divider gradient')
        $('body').addClass('darkMode')
        

    }
});