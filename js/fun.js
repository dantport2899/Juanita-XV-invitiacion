'use strict'
window.addEventListener('load', () => {  //al hacer esto ya no es necesario cargar el script al final del html

    $(document).ready(function(){ 
         
        $('#scroll').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 1000); 
            return false; 
        });
        
        $('#scrollBottom').click(function(){ 
            $("html, body").animate({ scrollTop: 9999 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom2').click(function(){ 
            $("html, body").animate({ scrollTop: 9999 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom3').click(function(){ 
            $("html, body").animate({ scrollTop: 9999 }, 1000); 
            return false; 
        }); 

        $('#scrollBottom4').click(function(){ 
            $("html, body").animate({ scrollTop: 9999 }, 1000); 
            return false; 
        }); 

    });

 });