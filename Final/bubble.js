

$("#foo").html(foo);
$(".final").append(foo);

$("#foo1").html(foo1);
$(".final1").append(foo1);

$("#foo2").html(foo2);
$(".final2").append(foo2);

$("#foo3").html(foo3);
$(".final3").append(foo3);

$("#foo4").html(foo4);
$(".final4").append(foo4);

$("#foo5").html(foo5);
$(".final5").append(foo5);

$("#foo6").html(foo6);
$(".final6").append(foo6);

$("#foo7").html(foo7);
$(".final7").append(foo7);

$("#foo8").html(foo8);
$(".final8").append(foo8);

$("#foo9").html(foo9);
$(".final9").append(foo9);

$("#foo10").html(foo10);
$(".final10").append(foo10);

$("#foo11").html(foo11);
$(".final11").append(foo11);

$("#toggle").on("click", function(){
  $(".final").toggleClass("show");
  $(".final1").toggleClass("show");
    $(".final2").toggleClass("show");
      $(".final3").toggleClass("show");
       $(".final4").toggleClass("show");
        $(".final5").toggleClass("show");
         $(".final6").toggleClass("show");
          $(".final7").toggleClass("show");
           $(".final8").toggleClass("show");
            $(".final9").toggleClass("show");
             $(".final10").toggleClass("show");
              $(".final11").toggleClass("show");
               $(".gif").toggleClass("show");
                $(".gif4").toggleClass("show");
                 $(".background").toggleClass("show");
                  $(".emoji").toggleClass("show");

   $(".bubblewrap").toggleClass("hide");
   $(".box").toggleClass("hide");
   $(".box1").toggleClass("hide");
});



var colors = ["red", "blue", "yellow", "green", "orange", "black", "cyan", "magenta"]

function changeColor() {
    var col = document.getElementById("changecolor");
    col.style.backgroundColor = colors[Math.floor((Math.random()*8)+1)];
}


