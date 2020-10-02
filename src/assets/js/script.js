$(document).ready(function(){
	/*++++Loading++++*/
	setTimeout(function(){
				$('body').addClass('loaded');
				$('.loading-section').fadeOut('slow');
			}, 10);
		
	
	/*++++Nav++++*/
	
/* 	$('.navbar_menu').affix({
  offset: {
    top: 169,
    bottom: function () {
      return (this.bottom = $('.top-header').addClass('true'));
    }
  }
}); */
/*var user = document.getElementsById('user-profile');*/
$(".user-a").on('click', function(){
  $("#user-profile").toggle();
});

 $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
/*++++Modal++++*/


//$('#mySignup,#myLogin,#myForgot').modal('hide')



/*++++Nav++++

$('#my_nav li a,.footerli li a, .logo,.section-link').click(function() {
	var targetID = $(this).attr('href');
	var targetOffset = $(targetID).offset().top;
	$('html, body').animate({scrollTop: targetOffset}, 1000, 'easeInOutExpo');
	return false;
});*/

/*Owl Slider*/

 var owl = $("#owl-demo");
  owl.owlCarousel({
      itemsCustom : [
        [0, 1], [768, 2]
      ],
			autoPlay: 3000
  });

/*++++owl team++++*/
	var owlteam = $("#owl-team");
  owlteam.owlCarousel({
      itemsCustom : [
        [0, 1], [480, 2], [768, 3], [1200, 4]
      ],
			autoPlay: 3000
			//navigation : true
  });
$(".la").on('click', function(){owlteam.trigger('owl.prev');});
$(".ra").on('click', function(){owlteam.trigger('owl.next');});

/*++++owl Testimonial++++*/
	var owl = $("#owl-testimonial");
  owl.owlCarousel({
      itemsCustom : [
        [0, 1], [768, 1]
      ],
			autoPlay: 3000
  });
	
/*++++Properties++++*/	

var owlpproperties = $("#owl-p-properties");
owlpproperties.owlCarousel({
      itemsCustom : [
        [0, 1], [768, 2], [1024, 3], [1600, 4]
      ],
			autoPlay: 3000
  });
	
$(".owl-buttonss .owl-prev").on('click', function(){owlpproperties.trigger('owl.prev');});
$(".owl-buttonss .owl-next").on('click', function(){owlpproperties.trigger('owl.next');});

/*++++Floor Plan++++*/	

	var owlfloorplan = $("#owl-floor-plan");
  owlfloorplan.owlCarousel({
      itemsCustom : [
        [0, 1], [768, 2], [1024, 3]
      ],
			autoPlay: 3000
  });
$(".left-arrow").on('click', function(){owlfloorplan.trigger('owl.prev');});
$(".right-arrow").on('click', function(){owlfloorplan.trigger('owl.next');});

/*++++Floor Plan++++*/	

	var owlLight = $(".owl-demo-3");
  owlLight.owlCarousel({
      itemsCustom : [
        [0, 1]
      ],
			autoPlay: 3000,
			navigation : true,
			slideSpeed	:1000
  });
$(".custom-galery .owl-nav .fa-chevron-left").on('click', function(){owlLight.trigger('owl.prev');});
$(".custom-galery .owl-nav .fa-chevron-right").on('click', function(){owlLight.trigger('owl.next');});

/*++++Floor Plan++++*/	

	var owlblog= $("#owl-blog");
  owlblog.owlCarousel({
      itemsCustom : [
        [0, 1]
      ],
			autoPlay: 3000,			
			slideSpeed	:1000
  });
$(".custom-galery .owl-nav .fa-chevron-left").on('click', function(){owlblog.trigger('owl.prev');});
$(".custom-galery .owl-nav .fa-chevron-right").on('click', function(){owlblog.trigger('owl.next');});

/*Owl Slider End*/


$(".search-sec button").on('click', function(){
	$(".search-sec input").focus();
});
$(".search-sec input").focus(function(){
	$(".search-sec button").addClass('white');
	});
$(".search-sec input").blur(function(){
	$(".search-sec button").removeClass('white');
	});
$(".loading i").fadeOut();	
$(".loading").on('click', function(){
	$(".loading i").fadeIn().delay(3000).fadeOut();
});
$(".text-option i").on('click', function(){
	$(".text-option i").fadeOut();
	$(".text-option .dropdown-menu").slideUp();
});
$(".text-option input").on('click', function(){
	$(".text-option i").fadeIn();
	$(".text-option .dropdown-menu").slideDown();
});
/*++++Custom Galery++++*/	

$(".custom-galery .overlay label").on('click', function(){
	$(".custom-galery").removeClass('open');
});
$(".r-property-image a,.news-img,#owl-floor-plan .item img,.list-page .list-property-image a").on('click', function(){
	$(".custom-galery").addClass('open');
});

/*++++List View++++*/	
$(".list-view").on('click', function(){	
	//alert('dfd');
	$(".grid-view-container").fadeOut('slow',function(){
			$(".list-view-container").fadeIn('slow');
		});	
	$(".grid-view").removeClass('active');
	$(this).addClass('active');
});
$(".grid-view").on('click', function(){
		//alert('dfd');
		$(".list-view-container").fadeOut('slow',function(){
				$(".grid-view-container").fadeIn('slow');
			});		
		$(".list-view").removeClass('active');
		$(this).addClass('active');
	
});

/*+++++Color Switcher+++++*/

$(".color-set").on('click', function(){
		$(".swatched").toggleClass('in');
	});
	
$(".swatched a").on('click', function(){
		var img=$(this).attr('data-img');
		var rell=$(this).attr('rel');
		//alert(img);
		$(".swatched a").removeClass('active');
		$(this).addClass('active');
		$("body").removeClass().addClass(rell);
		$(".logo-a img").attr('src','images/logos/'+img);
		$(".logo-bottom a img").attr('src','images/logos/'+img);
	});
	/*+++++Color Switcher+++++*/
/*+++++Form Home+++++*/
$(".search-type label input").on('click', function(){
	var labelpos=$(this).parent('label').offset().left;
	var cpos=$('.main-search-box').offset().left;
	var arrow=labelpos-cpos+30;
		$(".search-type-arrow").animate({
			'left':arrow+'px'
			},1000,'easeOutBounce');
		$(".search-type label").removeClass('active');
		$(this).parent('label').addClass('active');
	});	

$(".more-search-options-trigger").on('click', function(){
		$(this).toggleClass('active');
		$(".more-search-box").fadeToggle('slow');
	});	
/*+++++Form Home+++++*/	

//jQuery('.header').parallax("50%", 0.3);
//jQuery('#notime').parallax("50%", 0.3);
	
	
function changeLang() {
	var selectBox = document.getElementById("change_lang");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	window.location.href = 'http://hidein.net?lang='+selectedValue;
}
/*--------------------------------------- ANIMATION --------------------------------------------*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();
});


