
$(document).ready(function() {
    var folderHeight = [];
    var h = document.documentElement.clientHeight;

    function screenHeight(){                                            // sets article blocks to screen height
        let l = document.getElementsByClassName("folder");
        for(var i = 0; i < l.length; i++){
            l[i].style.height = h+"px";
        }
    }
    screenHeight();

    for(x=1; x<9; x++){
        // $(".tab"+x).css("left", (10 * x)+"%");                       
        $(".tab"+x).css("margin-left", (10 * x)+"%");                   // function to move tabs rightward
        folderHeight[x] = $(".project"+x).offset().top;                 // function to dynamically create variables and set them to their respective div-distance to top
    }


    window.onscroll = function(){                                       // function to switch 'tabs' from fixed to static 
        var scrolled = document.body.scrollTop;
            // console.log(scrolled);
        for(x=1; x<9; x++){
            if (folderHeight[x] <= (scrolled + (h + ((x-1)*4)-(x*50)))){      
                                                                        /* does not sync properly yet. Screen hight is always 50 + x*14 pixels smaller than folder hight
                                                                        14 is margin between folders
                                                                        50 is height of tabs */



                // $(".tab"+x).css("display", "static");                     // what I want is for the tap to alternate when 
                document.getElementsByClassName("tab"+x)[0].style.position = "static";
                //
            }
            else if (folderHeight[x]  >= (scrolled + (h + ((x-1)*4)-(x*50)))){ 
                // $(".tab"+x).css("display", "static");
                document.getElementsByClassName("tab"+x)[0].style.position = "fixed";
            }
        }
        console.log(h);
        console.log(folderHeight[6]);
    }

// --------------------------------------------------------------------------------- API ---------------------------------------------------------------------------------

    $.ajax({
        url: 'https://api.github.com/repos/JoskedeJong/ProjectZoo',
        dataType: 'json',
        method: 'GET',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error)
        }
    });

});