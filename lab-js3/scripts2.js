var objects = ['kanye1.png',
               'kanye2.png',
               'kanye3.png',
               'kanye4.png',
               'kanye5.png',
               'kanye6.png',
               'kanye7.png',
               'kanye9.png',
               'kanye10.png',
               'kanye11.png',
               'kanye12.png',
               'kanye13.png',
               'kanye14.png',
               'kanye15.png',
               'kanye16.png',
               'kanye17.png',
               'kanye18.png',
               'kanye19.png',
               'kanye20.png',
               'kanye21.png',
               'kanye22.png',
               



               ];

var colors  = ['red', 'blue', 'yellow'];

$('.button').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      object_to_use        = objects[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number > 22) {
    result = '<span class="object ' + color_to_use + '">' + object_to_use + '</span>';
  } else {
    result = '<img class="object ' + color_to_use + '" src="' + object_to_use + '" />';
  }

  $('.content').prepend(result);
});


