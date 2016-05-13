


var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 768;

var GRID_SIZE = 10;

var PHYS_GRAVITY = 0;
var PHYS_DRAG = 0.01;
var SPRING_STRENGTH = 0.9;
var SPRING_DAMPING = 0.8;

var FRAME_DELAY = 14;

var physics;
var particles = [];
var particles2 = [];
var particles3 = [];
var particles4 = [];
var particles5 = [];
var particles6 = [];
var particles7 = [];
var particles8 = [];
var particles9 = [];
var particles10 = [];
var canvas;
var ctx;
var mouseX = null;
var mouseY = null;
var big = null;
var numPart = 120;
var centro;

function init() {

    canvas = document.getElementById('main');
    canvas.style.height = CANVAS_HEIGHT + 'px';
    canvas.style.width = CANVAS_WIDTH + 'px';
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';

    physics = new ParticleSystem(PHYS_GRAVITY, PHYS_DRAG);
    
    big = physics.makeParticle( 0.1, 0.0, 0.0, 0.0);
    big.makeFixed();
    
    centro = physics.makeParticle( 0.1, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 0.0 );
    centro.makeFixed();

    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 170 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 170 + ( CANVAS_HEIGHT / 2 );
        particles[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles[ i / 3 ], 3500, 20.0 );
        physics.makeSpring( centro, particles[ i / 3 ], 0.005, 0.02, 200 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles[ i - 1 ], particles[ i ], 0.5, 0.2, 2 );
        }


    }
    physics.makeSpring( particles[ 0 ], particles[ particles.length - 1 ], 0.5, 0, 2 );
    


    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 185 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 185 + ( CANVAS_HEIGHT / 2 );
        particles[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles[ i / 3 ], 4500, 20.0 );
        physics.makeSpring( centro, particles[ i / 3 ], 0.005, 0.02, 200 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles[ i - 1 ], particles[ i ], 0.5, 0.2, 2 );
        }


    }
    physics.makeSpring( particles[ 0 ], particles[ particles.length - 1 ], 0.5, 0, 2 );
    
    
    //----------------------------------aro1
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 200 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 200 + ( CANVAS_HEIGHT / 2 );
        particles[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles[ i / 3 ], 5500, 20.0 );
        physics.makeSpring( centro, particles[ i / 3 ], 0.005, 0.02, 200 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles[ i - 1 ], particles[ i ], 0.5, 0.2, 2 );
        }


    }
    physics.makeSpring( particles[ 0 ], particles[ particles.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro1
    //----------------------------------aro2
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 215 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 215 + ( CANVAS_HEIGHT / 2 );
        particles2[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles2[ i / 3 ], 6500, 20.0 );
        physics.makeSpring( centro, particles2[ i / 3 ], 0.005, 0.02, 215 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles2[ i - 1 ], particles2[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles2[ 0 ], particles2[ particles2.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro2
    //----------------------------------aro3
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 230 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 230 + ( CANVAS_HEIGHT / 2 );
        particles3[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles3[ i / 3 ], 6500, 20.0 );
        physics.makeSpring( centro, particles3[ i / 3 ], 0.005, 0.02, 230 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles3[ i - 1 ], particles3[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles3[ 0 ], particles3[ particles3.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro3
    //----------------------------------aro4
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 245 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 245 + ( CANVAS_HEIGHT / 2 );
        particles4[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles4[ i / 3 ], 7500, 20.0 );
        physics.makeSpring( centro, particles4[ i / 3 ], 0.005, 0.02, 245 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles4[ i - 1 ], particles4[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles4[ 0 ], particles4[ particles4.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro4
    //----------------------------------aro5
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 260 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 260 + ( CANVAS_HEIGHT / 2 );
        particles5[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles5[ i / 3 ], 7500, 20.0 );
        physics.makeSpring( centro, particles5[ i / 3 ], 0.005, 0.02, 260 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles5[ i - 1 ], particles5[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles5[ 0 ], particles5[ particles5.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro5
    //----------------------------------aro6
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 275 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 275 + ( CANVAS_HEIGHT / 2 );
        particles6[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles6[ i / 3 ], 8500, 20.0 );
        physics.makeSpring( centro, particles6[ i / 3 ], 0.005, 0.02, 275 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles6[ i - 1 ], particles6[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles6[ 0 ], particles6[ particles6.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro6
    //----------------------------------aro7
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 290 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 290 + ( CANVAS_HEIGHT / 2 );
        particles7[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles7[ i / 3 ], 8500, 20.0 );
        physics.makeSpring( centro, particles7[ i / 3 ], 0.005, 0.02, 290 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles7[ i - 1 ], particles7[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles7[ 0 ], particles7[ particles7.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro7
    //----------------------------------aro8
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 305 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 305 + ( CANVAS_HEIGHT / 2 );
        particles8[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles8[ i / 3 ], 9500, 20.0 );
        physics.makeSpring( centro, particles8[ i / 3 ], 0.005, 0.02, 305 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles8[ i - 1 ], particles8[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles8[ 0 ], particles8[ particles8.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro8
    //----------------------------------aro9
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 320 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 320 + ( CANVAS_HEIGHT / 2 );
        particles9[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles9[ i / 3 ], 9500, 20.0 );
        physics.makeSpring( centro, particles9[ i / 3 ], 0.005, 0.02, 320 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles9[ i - 1 ], particles9[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles9[ 0 ], particles9[ particles9.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro9
    //----------------------------------aro10
    
    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 335 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 335 + ( CANVAS_HEIGHT / 2 );
        particles10[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles10[ i / 3 ], 10500, 20.0 );
        physics.makeSpring( centro, particles10[ i / 3 ], 0.005, 0.02, 335 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles10[ i - 1 ], particles10[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles10[ 0 ], particles10[ particles10.length - 1 ], 0.5, 0, 2 );
    
    //------------------------------------aro10


    for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 350 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 350 + ( CANVAS_HEIGHT / 2 );
        particles10[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles10[ i / 3 ], 11500, 20.0 );
        physics.makeSpring( centro, particles10[ i / 3 ], 0.005, 0.02, 335 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles10[ i - 1 ], particles10[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles10[ 0 ], particles10[ particles10.length - 1 ], 0.5, 0, 2 );





 for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 365 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 365 + ( CANVAS_HEIGHT / 2 );
        particles10[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles10[ i / 3 ], 12500, 20.0 );
        physics.makeSpring( centro, particles10[ i / 3 ], 0.005, 0.02, 335 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles10[ i - 1 ], particles10[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles10[ 0 ], particles10[ particles10.length - 1 ], 0.5, 0, 2 );



 for( var i = 0; i < 360; i+=3 ){
        var angulo = i * Math.PI / 180;
        var posX = Math.cos( angulo ) * 380 + ( CANVAS_WIDTH / 2 );
        var posY = Math.sin( angulo ) * 380 + ( CANVAS_HEIGHT / 2 );
        particles10[ i / 3 ] = physics.makeParticle( 0.4, posX, posY, 0.0 );
        physics.makeAttraction( big, particles10[ i / 3 ], 13500, 20.0 );
        physics.makeSpring( centro, particles10[ i / 3 ], 0.005, 0.02, 335 );
    }
    
    for( var i = 0; i < numPart; i++ ){
        if( i > 0 ){
        physics.makeSpring( particles10[ i - 1 ], particles10[ i ], 0.5, 0.2, 2 );
        }
    }
    physics.makeSpring( particles10[ 0 ], particles10[ particles10.length - 1 ], 0.5, 0, 2 );











    setInterval(draw, FRAME_DELAY);
    
    canvas.onmousemove = function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseX -= canvas.offsetLeft;
        mouseY -= canvas.offsetTop;
        big.position.set(mouseX, mouseY, 0);
    }
    
    canvas.addEventListener( "touchmove", doTouchMove, false );
    canvas.addEventListener( "touchend", doTouchEnd, false );
    
    function doTouchMove( event ){
        event.preventDefault();
        mouseX = event.targetTouches[ 0 ].pageX;
        mouseY = event.targetTouches[ 0 ].pageY;
        mouseX -= canvas.offsetLeft;
        mouseY -= canvas.offsetTop;
        big.position.set(mouseX, mouseY, 0);
    }
    
    function doTouchEnd( event ){
        event.preventDefault();
        big.position.set(0, 0, 0);
    }
    /*canvas.ontouchmove = function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseX -= canvas.offsetLeft;
        mouseY -= canvas.offsetTop;
        big.position.set(mouseX, mouseY, 0);
    }*/

}

function draw() {

    physics.tick();

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    //----------------------aro1
    ctx.beginPath();
    ctx.moveTo( particles[ 0 ].position.x, particles[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles[ i ].position.x, particles[ i ].position.y );
    }
    ctx.lineTo( particles[ 0 ].position.x, particles[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro1
    //----------------------aro2
    ctx.beginPath();
    ctx.moveTo( particles2[ 0 ].position.x, particles2[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles2[ i ].position.x, particles2[ i ].position.y );
    }
    ctx.lineTo( particles2[ 0 ].position.x, particles2[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro2
    //----------------------aro3
    ctx.beginPath();
    ctx.moveTo( particles3[ 0 ].position.x, particles3[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles3[ i ].position.x, particles3[ i ].position.y );
    }
    ctx.lineTo( particles3[ 0 ].position.x, particles3[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro3
    //----------------------aro4
    ctx.beginPath();
    ctx.moveTo( particles4[ 0 ].position.x, particles4[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles4[ i ].position.x, particles4[ i ].position.y );
    }
    ctx.lineTo( particles4[ 0 ].position.x, particles4[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro4
    //----------------------aro5
    ctx.beginPath();
    ctx.moveTo( particles5[ 0 ].position.x, particles5[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles5[ i ].position.x, particles5[ i ].position.y );
    }
    ctx.lineTo( particles5[ 0 ].position.x, particles5[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro5
    //----------------------aro6
    ctx.beginPath();
    ctx.moveTo( particles6[ 0 ].position.x, particles6[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles6[ i ].position.x, particles6[ i ].position.y );
    }
    ctx.lineTo( particles6[ 0 ].position.x, particles6[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro6
    //----------------------aro7
    ctx.beginPath();
    ctx.moveTo( particles7[ 0 ].position.x, particles7[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles7[ i ].position.x, particles7[ i ].position.y );
    }
    ctx.lineTo( particles7[ 0 ].position.x, particles7[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro7
    //----------------------aro8
    ctx.beginPath();
    ctx.moveTo( particles8[ 0 ].position.x, particles8[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles8[ i ].position.x, particles8[ i ].position.y );
    }
    ctx.lineTo( particles8[ 0 ].position.x, particles8[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro8
    //----------------------aro9
    ctx.beginPath();
    ctx.moveTo( particles9[ 0 ].position.x, particles9[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles9[ i ].position.x, particles9[ i ].position.y );
    }
    ctx.lineTo( particles9[ 0 ].position.x, particles9[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro9
    //----------------------aro10
    ctx.beginPath();
    ctx.moveTo( particles10[ 0 ].position.x, particles10[ 0 ].position.y );
    for( var i = 0; i < numPart; i++ ){
        ctx.lineTo( particles10[ i ].position.x, particles10[ i ].position.y );
    }
    ctx.lineTo( particles10[ 0 ].position.x, particles10[ 0 ].position.y );
    ctx.stroke();
    //---------------------aro10
    
    /*for( var i = 0; i < numPart; i++ ){
        ctx.beginPath();
        ctx.moveTo( centro.position.x, centro.position.y );
        ctx.lineTo( particles[ i ].position.x, particles[ i ].position.y );
        ctx.stroke();
    }*/

}
