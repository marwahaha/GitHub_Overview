
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
        if (x > 1){                      
            $(".tab"+x).css("margin-left", (10 * (x-1))+"%");           // function to move tabs rightward
        }
        folderHeight[x] = $(".project"+x).offset().top;                 // function to dynamically set 'folder' height to screen height
    }


    window.onscroll = function(){                                       // function to switch 'tabs' from fixed to static 
        var scrolled = document.body.scrollTop;
            // console.log(scrolled);
        for(x=1; x<9; x++){
            if (folderHeight[x] <= (scrolled + (h + (x*14)-(x*64)))){      
                                                                        /* does not sync properly yet. Screen hight is always 50 + x*14 pixels smaller than folder hight
                                                                        14 is margin between folders
                                                                        50 is height of tabs */
                // $(".tab"+x).css("display", "static");       
                document.getElementsByClassName("tab"+x)[0].style.position = "static";
                document.getElementsByClassName("buffer"+x)[0].style.marginTop = 0+"px";
            }

            else if (folderHeight[x]  >= (scrolled + (h + (x*14)-(x*64)))){ 
                // $(".tab"+x).css("display", "static");
                document.getElementsByClassName("tab"+x)[0].style.position = "fixed";
                document.getElementsByClassName("buffer"+x)[0].style.marginTop = 50+"px";
            }
        }
        // console.log(h);
        // console.log(folderHeight[6]);
    }

// --------------------------------------------------------------------------------- API ---------------------------------------------------------------------------------

    // $.ajax({
    //     url: 'https://api.github.com/repos/JoskedeJong/ProjectZoo',
    //     //  url: 'https://api.github.com/repos/JoskedeJong/ProjectZoo/pushed_at',
    //     dataType: 'json',
    //     method: 'GET',
    //     success: function (data) {
    //         console.log(data);
    //         x = data["pushed_at"];
    //         $(".content1").append("This project was last pushed at: "+x);
    //     },
    //     error: function (error) {
    //         console.log(error)
    //     }
    // });


    $.ajax({
        // url: 'https://api.github.com/repos/JoskedeJong/GitHub_Overview/events',
        url: 'https://api.github.com/users/JoskedeJong/repos',
        dataType: 'json',
        method: 'GET',
        success: function (data) {
            console.log(data);
            for(i=0; i<9; i++){
                x = data[i]["description"];                             // gathers description, if resent
                if (x != null){
                    $(".content"+i).append("<p>"+x+"</p>");
                }
                y = data[i]["pushed_at"];                               // gathers last push date
                $(".content"+i).append("This project was last pushed at: "+y);
            }
        },
        error: function (error) {
            console.log(error)
        }
    });

});