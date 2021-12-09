$(".bouton_change").click(function(){

    if($(this).attr("devise") == "euro"){
        $('.price').each(function(i){
            var prix = ($(this).data("value") * 0.89).toFixed(0); 
            $(this).text(prix + " €");
           
        });

        $('.prix_produit').each(function(i){
            var prix = ($(this).data("value") * 0.89).toFixed(0); 
            $(this).text(prix + " €");
           
        });
    }
    if($(this).attr("devise") == "dollar"){
        $('.price').each(function(i){
            var prix = $(this).data("value"); 
            $(this).text(prix + " $");
           
        });

        $('.prix_produit').each(function(i){
            var prix = $(this).data("value"); 
            $(this).text(prix + " $");
           
        });
    }
    if($(this).attr("devise") == "yen"){
        $('.price').each(function(i){
            var prix = ($(this).data("value") * 113.5).toFixed(0); 
            $(this).text(prix + " ¥");
           
        });

        $('.prix_produit').each(function(i){
            var prix = ($(this).data("value") * 113.5).toFixed(0); 
            $(this).text(prix + " ¥");
           
        });
    }
   
       
});


