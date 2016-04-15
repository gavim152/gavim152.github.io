$(document).ready(function () {
    var yOff = 40;
    var xOff = 20;
    var pathToImage = "katy.jpg";

    $(".clueimage").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "relative")
    
            .fadeIn("slow");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".clueimage").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("bottom", (e.pageY - yOff) + "px")
            
    });
});

$(document).ready(function(){
 
        $(".box1").scrollTop(Math.random()*2000)
        $(".box2").scrollTop(Math.random()*2000)
        $(".box3").scrollTop(Math.random()*2000)
        $(".box4").scrollTop(Math.random()*2000)
        $(".box5").scrollTop(Math.random()*2000)
        $(".box6").scrollTop(Math.random()*2000)
      
   
   
         


});