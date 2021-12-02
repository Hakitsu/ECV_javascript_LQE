let buttonDarkMode = $('.buttonDarkMode');
let SectionàPropos = $('#SectionàPropos');
let SectionàProposH1 = $('#SectionàPropos h1');

buttonDarkMode.on('click', function() {
    if(buttonDarkMode.hasClass('darkMode')){
    buttonDarkMode.text("Activer le dark mode ")
    
    buttonDarkMode.removeClass('darkMode')
    SectionàPropos.removeClass('darkMode')
    SectionàProposH1.removeClass('darkMode')
    $('body').removeClass('darkMode')
    SectionàProposH1.addClass('divider gradient')
    }
    else{
        buttonDarkMode.text("Désactiver le dark mode ")
        
        buttonDarkMode.addClass('darkMode')
        SectionàPropos.addClass('darkMode')
        SectionàProposH1.addClass('darkMode')
        SectionàProposH1.removeClass('divider gradient')
        $('body').addClass('darkMode')
        

    }
});