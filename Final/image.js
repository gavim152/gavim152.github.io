function prevImage(postid) {
	var totog = "#" + postid;
	var imgs = $(totog).find('.image-viewer-img');
	var totalimgs = (imgs.length);
	var currentvis = $(totog).find(".image-viewer-img:visible").map(function() { return this.id; }).get();
	var transformer = currentvis[0].split("-");
	imgnum = parseInt(transformer[2])-1;
	
	$(totog).find('.image-viewer-img:visible').hide();
	if (imgnum == 0) {
	imgnum = totalimgs;
	}
	$(totog + "-img-" + imgnum).show();
}

function nextImage(postid) {
	var totog = "#" + postid;
	var imgs = $(totog).find('.image-viewer-img');
	var totalimgs = (imgs.length);
	
	var currentvis = $(totog).find(".image-viewer-img:visible").map(function() { return this.id; }).get();
	
	var transformer = currentvis[0].split("-");
	imgnum = parseInt(transformer[2])+1;



	$(totog).find('.image-viewer-img:visible').hide();
	if (imgnum > totalimgs) {
	imgnum = 1;
	}
	$(totog + "-img-" + imgnum).show();
}

function resizeTop() {
if ($(window).height() > 900) {
		var i = Math.floor($(window).height() - 900);
		if (i >= 110) {
		i = 110;
		}
		$('#section-container, nav, #sidebar').css({top: Math.floor(40 + i) + 'px'});
		$('.card').css({'margin-top': Math.floor(40 + i) + 'px'});
		} else {
		$('#section-container, nav, #sidebar').css({top: '40px'});
		if ($(window).height() > 813) {
			var y = Math.floor($(window).height() - 900);
			$('.card').css({'margin-top': Math.floor(40 + y) + 'px'});
		} else {
		$('.card').css({'margin-top': '-47px'});
		}
}
}

function clearText(i) {
if (i.defaultValue == i.value) {
i.value = "";
}
}

function insertValue(i) {
if (i.value == "") {
i.value = i.defaultValue;
}
}

function swapNavWhite() {
$('html').css({backgroundColor: 'white'});
$('nav a.active').css({backgroundPosition: '0px -34px'})
.hover(function() {
$(this).css({backgroundPosition: '0px -51px'});
}, function() {
$(this).css({backgroundPosition: '0px -34px'});
});
$('#newsletter-container h3 img').attr({src: 'http://suzannegeiss.com/news/title_newsletter_white.png'});
$('#newsletter-container h4').css({color: '#FFF'});
$('input.textfield').css({borderColor: '#FFF', color: '#FFF'});
}

function resizeBg() {
if ($(window).height() > $('.bg-container img').height() || $(window).width() < $('.bg-container img').width()) {
$('.bg-container img').height($(window).height());
var j = $('.bg-container img').height() / 1000 * 100;
j = 1500 / 100 * j;
$('.bg-container img').width(j);
}
if ($(window).width() > $('.bg-container img').width() || $(window).height() < $('.bg-container img').height()) {
$('.bg-container img').width($(window).width());
j = $('.bg-container img').width() / 1500 * 100;
j = 1000 / 100 * j;
$('.bg-container img').height(j);
}
var k = $(window).width() - $('.bg-container img').width();
k = Math.round(k / 2);
j = $(window).height() - $('.bg-container img').height();
j = Math.round(j / 2);
$('.bg-container img').css({top: j - 1 + 'px', left: k + 'px'});
}

var idarray;
var cardpos = 0;
var killarray=new Array();
var killback=new Array();
var backqty;
var moving = 0;

$(window).load(function() {


	

	idarray = $("#wrapper").find(".card").map(function() { return "#" + this.id; }).get();
	
	var starterpost = window.location.href.slice(window.location.href.indexOf('#')).split(/[&?]{1}[\w\d]+=/);
	var starterpostb = window.location.href.slice(window.location.href.indexOf('?')).split(/[&?]{1}[\w\d]+=/);
	
	if (starterpost == "l" || starterpost == "/" ) {
	location.hash = "!/" + idarray[cardpos].substring(1);
	}
	else {
	
	if ((starterpostb[0].charAt(0))=="?") {
	
	var iwant = "#"+starterpostb[0].substring(1);
	} else {
	
	var iwant = "#"+starterpost[0].substring(3);
	}
	
	if (iwant=="#post001"){
	iwant="#1";
	}
	
		if (iwant=="#post002"){
	iwant="#2";
	}
	
		if (iwant=="#post003"){
	iwant="#3";
	}
	
		if (iwant=="#post004"){
	iwant="#4";
	}
	
		if (iwant=="#post005"){
	iwant="#5";
	}
	
		if (iwant=="#post006"){
	iwant="#6";
	}
	
		if (iwant=="#post007"){
	iwant="#7";
	}
	
		if (iwant=="#post008"){
	iwant="#8";
	}
	
	
	

var len = idarray.length;
var elementIndex=-1;
for(var n=0;n<len;n++){
if(idarray[n]==iwant){
elementIndex=n;
}
}

cardpos=elementIndex;

	}
	
	var tempnum;
	tempnum = cardpos;
	
	$(idarray[cardpos]).removeClass("loader").addClass("topcardstart");
	
	if ((cardpos+1) > (idarray.length-1)) { tempnum=((cardpos) - (idarray.length-1)); }
	else { tempnum = (cardpos + 1) }
	$(idarray[tempnum]).removeClass("loader").addClass("card2start");
	
	if ((cardpos+2) > (idarray.length-1)) { tempnum=((cardpos+1) - (idarray.length-1)); }
	else { tempnum = (cardpos + 2)}
	$(idarray[tempnum]).removeClass("loader").addClass("card3start");
	
	if ((cardpos+3) > (idarray.length-1)) { tempnum=((cardpos+2) - (idarray.length-1)); }
	else { tempnum = (cardpos + 3)}
	$(idarray[tempnum]).removeClass("loader").addClass("card4start");
	
	if ((cardpos+4) > (idarray.length-1)) { tempnum=((cardpos+3) - (idarray.length-1)); }
	else { tempnum = (cardpos + 4)}
	$(idarray[tempnum]).removeClass("loader").addClass("card5start");
	
	if ((cardpos+5) > (idarray.length-1)) { tempnum=((cardpos+4) - (idarray.length-1)); }
	else { tempnum = (cardpos + 5)}
	$(idarray[tempnum]).removeClass("loader").addClass("card6start");
	
	if ((cardpos+6) > (idarray.length-1)) { tempnum=((cardpos+5) - (idarray.length-1)); }
	else { tempnum = (cardpos + 6)}
	$(idarray[tempnum]).removeClass("loader").addClass("card7start");
	
	if ((cardpos+7) > (idarray.length-1)) { tempnum=((cardpos+6) - (idarray.length-1)); }
	else { tempnum = (cardpos + 7)}
	$(idarray[tempnum]).removeClass("loader").addClass("card8start");
	
	setTimeout("loadingtwo()",2);
	
		
	resizeBg();
	resizeTop();
	swapNavWhite();
	
	var t=setTimeout("superballfade()",2000);
	
	$(".card").click(function() { var str = $(this).attr("class");
	var patt1=/[0-9]/;
	myClass=(str.match(patt1)-1);
		if (myClass>0){
		forward(myClass);
		}
	});
	

});

function loadingtwo() {
	$(".topcardstart").removeClass("topcardstart").addClass("slow").addClass("topcard");
	$(".card2start").removeClass("card2start").addClass("slow").addClass("card2");
	$(".card3start").removeClass("card3start").addClass("slow").addClass("card3");
	$(".card4start").removeClass("card4start").addClass("slow").addClass("card4");
	$(".card5start").removeClass("card5start").addClass("slow").addClass("card5");
	$(".card6start").removeClass("card6start").addClass("slow").addClass("card6");
	$(".card7start").removeClass("card7start").addClass("slow").addClass("card7");
	$(".card8start").removeClass("card8start").addClass("slow").addClass("card8");
	setTimeout("loadingthree()",2);
}

function loadingthree() {
	$(".topcard").removeClass("slow").addClass("fast");
	$(".card2").removeClass("slow").addClass("fast");
	$(".card3").removeClass("slow").addClass("fast");
	$(".card4").removeClass("slow").addClass("fast");
	$(".card5").removeClass("slow").addClass("fast");
	$(".card6").removeClass("slow").addClass("fast");
	$(".card7").removeClass("slow").addClass("fast");
	$(".card8").removeClass("slow").addClass("fast");
	moving=0;
}

function goto(postid) {
	var gopost = "#" + postid;
	var finder=(jQuery.inArray(gopost, idarray));
	var spread=(cardpos-finder);
	if (spread>0) {
		back(spread);
	} else if (spread<0) {
		forward(Math.abs(spread));
		bumpin(postid);
	}
}




function forward(howfar) {
if (howfar>0) {
setTimeout("forwardsloppy(1)",1);

}

if (howfar>1) {
setTimeout("forwardsloppy(1)",200);

}

if (howfar>2) {
setTimeout("forwardsloppy(1)",400);

}

if (howfar>3) {
setTimeout("forwardsloppy(1)",600);

}
if (howfar>4) {
setTimeout("forwardsloppy(1)",800);

}
if (howfar>5) {
setTimeout("forwardsloppy(1)",1000);

}
if (howfar>6) {
setTimeout("forwardsloppy(1)",1200);

}
if (howfar>7) {
setTimeout("forwardsloppy(1)",1400);
}
if (howfar>8) {
setTimeout("forwardsloppy(1)",1600);
}
if (howfar>9) {
setTimeout("forwardsloppy(1)",1800);
}
if (howfar>10) {
setTimeout("forwardsloppy(1)",2000);
}
if (howfar>11) {
setTimeout("forwardsloppy(1)",2200);
}
if (howfar>12) {
setTimeout("forwardsloppy(1)",2400);
}
if (howfar>13) {
setTimeout("forwardsloppy(1)",2600);
}
if (howfar>14) {
setTimeout("forwardsloppy(1)",2800);
}
if (howfar>15) {
setTimeout("forwardsloppy(1)",3000);
}

if (howfar>16) {
setTimeout("forwardsloppy(1)",3200);
}


if (howfar>17) {
setTimeout("forwardsloppy(1)",3400);
}

if (howfar>18) {
setTimeout("forwardsloppy(1)",3600);
}




}


function back(howfar) {
if (howfar>0) {
setTimeout("backsloppy(1)",1);

}

if (howfar>1) {
setTimeout("backsloppy(1)",200);

}

if (howfar>2) {
setTimeout("backsloppy(1)",400);

}

if (howfar>3) {
setTimeout("backsloppy(1)",600);

}
if (howfar>4) {
setTimeout("backsloppy(1)",800);

}
if (howfar>5) {
setTimeout("backsloppy(1)",1000);

}
if (howfar>6) {
setTimeout("backsloppy(1)",1200);

}
if (howfar>7) {
setTimeout("backsloppy(1)",1400);

}
if (howfar>8) {
setTimeout("backsloppy(1)",1600);
}
if (howfar>9) {
setTimeout("backsloppy(1)",1800);
}
if (howfar>10) {
setTimeout("backsloppy(1)",2000);
}
if (howfar>11) {
setTimeout("backsloppy(1)",2200);
}
if (howfar>12) {
setTimeout("backsloppy(1)",2400);
}
if (howfar>13) {
setTimeout("backsloppy(1)",2600);
}
if (howfar>14) {
setTimeout("backsloppy(1)",2800);
}
if (howfar>15) {
setTimeout("backsloppy(1)",3000);
}

if (howfar>16) {
setTimeout("backsloppy(1)",3200);
}

if (howfar>17) {
setTimeout("backsloppy(1)",3400);
}

if (howfar>18) {
setTimeout("backsloppy(1)",3600);
}

if (howfar>19) {
setTimeout("backsloppy(1)",3800);
}


if (howfar>20) {
setTimeout("backsloppy(1)",4000);
}







}



function forwardsloppy(howfar) {


		if (howfar > 8) {
		remain = (howfar-8);
		setTimeout("forward(remain)",600);
		howfar = 8;}

		var cntr=0;
		
		while (cntr<howfar) {
			$(".topcard").removeClass("topcard").addClass("zoomout");
			$(".card2").removeClass("card2").addClass("topcard");
			$(".card3").removeClass("card3").addClass("card2");
			$(".card4").removeClass("card4").addClass("card3");
			$(".card5").removeClass("card5").addClass("card4");
			$(".card6").removeClass("card6").addClass("card5");
			$(".card7").removeClass("card7").addClass("card6");
	
			$(".card8").removeClass("card8").addClass("card7");
			
			if ((cardpos+8)>=(idarray.length)) { 
			
			$(idarray[(cardpos-(idarray.length-8))]).removeClass("loader").addClass("fast").addClass("card8"); 
			
			}
			else {
			$(idarray[(cardpos+8)]).removeClass("loader").addClass("fast").addClass("card8");
			
			
			}
			
			killarray.push(idarray[cardpos]);
			
			setTimeout("kill()",800);
			
			location.hash = "!/" + $('.topcard').attr('id');
			
			cardpos++;
			if (cardpos==idarray.length) { cardpos=0; }
			cntr++;
  		}
	
}







function gofast() {
	$(".card").removeClass("med").addClass("fast");
}

$(window).resize(function() {
	resizeBg();
	resizeTop();
});

