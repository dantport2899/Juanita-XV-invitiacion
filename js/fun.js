'use strict'
window.addEventListener('load', () => {  //al hacer esto ya no es necesario cargar el script al final del html

    $(document).ready(function(){ 
         
        $('#scroll').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 1000); 
            return false; 
        });

        $('#scrollasistencia').click(function(){ 
            $("html, body").animate({ scrollTop: 900 }, 1000); 
            return false; 
        });

        $('#scrollasistencia2').click(function(){ 
            $("html, body").animate({ scrollTop: 900 }, 1000); 
            return false; 
        });
        
        $('#scrollBottom').click(function(){ 
            $("html, body").animate({ scrollTop: 1680 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom2').click(function(){ 
            $("html, body").animate({ scrollTop: 1680 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom3').click(function(){ 
            $("html, body").animate({ scrollTop: 1680 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom4').click(function(){ 
            $("html, body").animate({ scrollTop: 1680 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom5').click(function(){ 
            $("html, body").animate({ scrollTop: 1680 }, 1000); 
            return false; 
        }); 


        
    });

 });

 function centrar(){ 
     var centro = window.innerWidth/2;
    $("html, body").animate({ screenLeft: centro }, 1000); 
    return false; 
}