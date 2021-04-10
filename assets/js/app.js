
/*menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



/*type js*/

var typed= new Typed (".typed",{
strings: [
" Ellin",
"I'M FROM BANGLADESH",
"I'M A WEB DESIGNER",
"I'M A WEB DEVELOPER",
"I'M A FREELANCHER",

],
typeSpeed: 200,
loop:true,
});



/*pichart*/

$(function() {
        $('.chart1').easyPieChart({
			barColor:'#32BAE7',
			lineWidth:10,
        });
    });
	
	$(function() {
        $('.chart2').easyPieChart({
			barColor:'#D74980',
			lineWidth:10,
        });
    });
	
	$(function() {
        $('.chart3').easyPieChart({
			barColor:'#49D3BB',
			lineWidth:10,
        });
    });
	
	$(function() {
        $('.chart4').easyPieChart({
			barColor:'#EB7D4D',
			lineWidth:10,
        });
    });

/*scroller*/

    $('.scroll a').click(function(){
		$('html,body').animate({'scrollTop':10},300);
		
	});
	$(window).scroll(function(){
	
		if($(window).scrollTop()>650)
		{
			$('.scroll a').fadeIn();
		}
		else
		{
			$('.scroll a').fadeOut();
		}
		
	});
	
	/*animation*/
 		 AOS.init({
	    	offset: 300,
	    	duration: 1500,
	    });