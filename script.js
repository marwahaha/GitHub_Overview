
$(document).ready(function() {
    var folderHeight = [];

    for(x=1; x<9; x++){
        $(".tab"+x).css("left", (10 * x)+"%");                  // function to move tabs rightward
        folderHeight[x] = $(".project"+x).offset().top;              // function to dynamically create variables and set them to their respective div-distance to top
    }
    console.log(folderHeight[1]);
    console.log(folderHeight[2]);

    window.onscroll = function(){
        var scrolled = document.body.scrollTop;
        console.log(scrolled);
        for(x=1; x<9; x++){
            if (folderHeight[x] < scrolled){ 
                // $(".tab"+x).css("display", "static");
                document.getElementsByClassName("tab"+x)[0].style.position = "static";
            }
        }
    }

});