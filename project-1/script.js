$(document).ready(function(){



  var makeCircles = function() {

    var quantity = 2;
    for (var i = 0; i < quantity; i++) {
      $('body').append('<div class="img randomize"></div>');
    }

  }

  makeCircles();


  $('.randomize').each(function(){

    var top = Math.ceil(Math.random() * 300);
    var left = Math.ceil(Math.random() * 2);
    var diameter = Math.ceil(Math.random() * 4);
    var zIndex = Math.ceil(Math.random() * 3);

    console.log(top);
    console.log(left);

    $(this).css({
      'top': top + "%",
      'left': left + "%",
      'z-index': zIndex
      //'height': diameter,
      //'width': diameter
    });
    // this = .circle
    $(this).addClass('draggable');

  })




  var makeCircles1 = function() {

    var quantity = 2;
    for (var i = 0; i < quantity; i++) {
      $('body').append('<div class="img1 randomize"></div>');
    }

  }

  makeCircles1();


  $('.randomize').each(function(){

    var top = Math.ceil(Math.random() * 20);
    var left = Math.ceil(Math.random() * 2);
    var diameter = Math.ceil(Math.random() * 4);
    var zIndex = Math.ceil(Math.random() * 3);

    console.log(top);
    console.log(left);

    $(this).css({
      'top': top + "%",
      'left': left + "%",
      'z-index': zIndex
      //'height': diameter,
      //'width': diameter
    });
    // this = .circle
    $(this).addClass('draggable');

  })

  var makeCircles2 = function() {

    var quantity = 2;
    for (var i = 0; i < quantity; i++) {
      $('body').append('<div class="img2 randomize"></div>');
    }

  }

  makeCircles2();


  $('.randomize').each(function(){

    var top = Math.ceil(Math.random() * 300);
    var left = Math.ceil(Math.random() * 2);
    var diameter = Math.ceil(Math.random() * 4);
    var zIndex = Math.ceil(Math.random() * 3);

    console.log(top);
    console.log(left);

    $(this).css({
      'top': top + "%",
      'left': left + "%",
      'z-index': zIndex
      //'height': diameter,
      //'width': diameter
    });
    // this = .circle
    $(this).addClass('draggable');

  })


    // split characters
    var characters = $("h1").text().split("");
    var charCount = characters.length;
    console.log(charCount);
    $("h1").empty();
    $.each(characters, function(i, el) {
      $("h1").append("<span class="+el+">"+el+"</span");
    });

    // rotate characters
    $('h1 span').each(function(){
      var rotation = Math.ceil(Math.random() * 360);
      $(this).css('-webkit-transform', 'rotate(' + rotation + 'deg)');
    });

    // make some things draggable
    $(function() {
      $( ".draggable" ).draggable();
      $( "h1 span" ).draggable();
    });

    // get the height of the window
    windowHeight = $(window).height();
    console.log(windowHeight);

});