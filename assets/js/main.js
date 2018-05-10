$(document).ready(function(){
	
	/*COLOR SHADES CAROUSEL*/
	$('.your-shade').slick({
		infinite: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 5,
		arrows: false,
			responsive: [
					{
					  breakpoint: 1199,
					  settings: { slidesToShow: 3, initialSlide:1}
					},
					{
					  breakpoint: 992,
					  settings: { slidesToShow: 3, initialSlide:1  }
					},
					{
					  breakpoint: 768,
					  settings: { slidesToShow: 3, initialSlide:1  }
					},
					{
					  breakpoint: 650,
					  settings: { slidesToShow: 3, initialSlide:1}
					},
					{
					  breakpoint: 649,
					  settings: { slidesToShow: 1  }
					}
				  ]
	});

	
	/* pricing swiper*/
	$('.pricing').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplaySpeed: 3000,
		autoplay: true,
		responsive: [
					{
					  breakpoint: 768,
					  settings: { slidesToShow: 1, arrows: true}
					}
				  ]
	});
	
	
	/*COLOR SHADES CAROUSEL*/
	$('.as_seen_on').slick({
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true
	});
	
	/*COLOR SHADES CAROUSEL*/
	$('.testimontial_box').slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000
	});

	
	
	/*SWIPER BEFORE AFTER*/
	$(function(){
	  $("#container1").twentytwenty({
		no_overlay: true, //Do not show the overlay with before and after
		move_slider_on_hover: true,
		default_offset_pct: 0.6
	  });
	});

	
	
	
	
	/*1,2,3 HOW TO STEPS FUNCTIONS FOR DESKTOP*/
	activePanel = $("#accordion div.panel:first");
	$(activePanel).addClass('active');
 
	$("#accordion").delegate('.panel', 'click', function(e){
		if( ! $(this).is('.active') ){
			$(activePanel).animate({width: "60px"}, 300);
			$(this).animate({width: "1020px"}, 300);
			$('#accordion .panel').removeClass('active');
			$(this).addClass('active');
			activePanel = this;
		 };
	});
	
		
	
	//shades of color hovering functionality
	$( ".shade_box" )
	  .mouseenter(function() {
		if($(this).find('.shade_face_1').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face1-shade-color.png");
		}
		if($(this).find('.shade_face_2').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face2-shade-color.png");
		}
		if($(this).find('.shade_face_3').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face3-shade-color.png");
		}
		if($(this).find('.shade_face_4').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face4-shade-color.png");
		}
		if($(this).find('.shade_face_5').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face5-shade-color.png");
		}
		else{
			
		}
	  })
	  .mouseleave(function() {				
		if($(this).find('.shade_face_1').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face1.png");
		}
		if($(this).find('.shade_face_2').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face2.png");
		}
		if($(this).find('.shade_face_3').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face3.png");
		}
		if($(this).find('.shade_face_4').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face4.png");
		}
		if($(this).find('.shade_face_5').length > 0){
			$(this).find( '.shade_img' ).attr("src","assets/img/face5.png");
		}
		else{
			
		}
		
		
	});
		  
		//how to use dropdown functionatilty
	$( '.step_content1' ).hide();
	$( '.step_content2' ).hide();
	$( '.step_content3' ).hide();
	
	$( ".step_0 .title" ).click(function() {
	  $( ".step_content0" ).slideToggle( "slow", function() {
	  });
	  $( ".step_content1" ).hide( "slow", function() {});
	  $( ".step_content2" ).hide( "slow", function() {});
	  $( ".step_content3" ).hide( "slow", function() {});
	});
	$( ".step_1 .title" ).click(function() {
	  $( ".step_content1" ).slideToggle( "slow", function() {
	  });
	  $( ".step_content0" ).hide( "slow", function() {});
	  $( ".step_content2" ).hide( "slow", function() {});
	  $( ".step_content3" ).hide( "slow", function() {});
	});
	$( ".step_2 .title" ).click(function() {
	  $( ".step_content2" ).slideToggle( "slow", function() {});
	   $( ".step_content0" ).hide( "slow", function() {});
	   $( ".step_content1" ).hide( "slow", function() {});
	  $( ".step_content3" ).hide( "slow", function() {});
	});
	$( ".step_3 .title" ).click(function() {
	  $( ".step_content3" ).slideToggle( "slow", function() {});
	   $( ".step_content0" ).hide( "slow", function() {});
	   $( ".step_content1" ).hide( "slow", function() {});
	  $( ".step_content2" ).hide( "slow", function() {});
	});

	
	/*DROPDOWN FUNCTIONS ON FOOTER*/
		$( ".boxer" ).find( ".content" ).hide();

		$( ".boxer.for_desktop" )
		  .mouseenter(function() {
			$( this ).find( ".title" ).css('display', 'none');
			$( this ).find( ".content" ).css('display', 'block');
		  })
		  .mouseleave(function() {
			$( this ).find( ".title" ).css('display', 'block');
			$( this ).find( ".content" ).css('display', 'none');
		});		
	
	
	
		$( ".dropdown2 .fa-chevron-down" ).click(function() {
			 $( '.dropdown2 .fa-chevron-down' ).css('display', 'none');
			 $( '.strip_10_right .boxer.for_mobile .divider' ).css('display', 'block');
			 $( '.strip_10_right .boxer.for_mobile' ).css("background", "#9c8971" );
		  $( ".boxer.for_mobile .content2" ).slideToggle( "slow", function() {
			
		  });
		});
		
		$( ".dropdown2 .fa-chevron-up" ).click(function() {
			 $( '.dropdown2 .fa-chevron-down' ).css('display', 'inline-block');
			 $( '.strip_10_right .boxer.for_mobile .divider' ).css('display', 'none');
			 $( '.strip_10_right .boxer.for_mobile' ).css("background", "#3d596e" );
		  $( ".boxer.for_mobile .content2" ).slideToggle( "slow", function() {
			
		  });
		});
		$( ".dropdown1 .fa-chevron-down" ).click(function() {
			$( '.dropdown1 .fa-chevron-down' ).css('display', 'none');
			$( '.strip_10_left .boxer.for_mobile .divider' ).css('display', 'block');
			 $( '.strip_10_left .boxer.for_mobile' ).css("background", "#9c8971" );
		  $( ".boxer.for_mobile .content1" ).slideToggle( "slow", function() {
			 
		  });
		});

		$( ".dropdown1 .fa-chevron-up" ).click(function() {
			$( '.dropdown1 .fa-chevron-down' ).css('display', 'inline-block');
			$( '.strip_10_left .boxer.for_mobile .divider' ).css('display', 'none');
			 $( '.strip_10_left .boxer.for_mobile' ).css("background", "#3d596e" );
		  $( ".boxer.for_mobile .content1" ).slideToggle( "slow", function() {
			 
		  });
		});
	

	
	
	
	
	
		//STRIP 7 OFFER SECTIONS DIFFERET FUNCTIONS
		
		
		//Close and Reset Other offers that are not currently selected
		function closeOtherOffer(offer,bar_menu){
			
			var num1 = 0;
			var num2 = 0;
			var screensize = 1199.98;
			
			var screenWidth = $( window ).width();

			if(screenWidth >= screensize){
			$( '.strip_6_product1 .add_to_cart' ).css('margin-top', '1em');
			$( '.strip_6_product2 .add_to_cart' ).css('margin-top', '1em');
			$( '.strip_6_product3 .add_to_cart' ).css('margin-top', '1em');
			}
			
			if(offer == 1){
				num1= 2;
				num2 = 3;
				$( '.strip_6_product'+num1+', .strip_6_product'+num2+'' ).css('color', '#fff');
				$( '.strip_6_product2' ).css('background', '#596a77');
				$( '.strip_6_product3' ).css('background', '#304555');
				if(screenWidth >= screensize){
					$( '.strip_6_product'+offer+' .add_to_cart' ).css('margin-top', '1em');
					$( '.strip_6_product'+num1+' .add_to_cart' ).css('margin-top', '1em');
					$( '.strip_6_product'+num2+' .add_to_cart' ).css('margin-top', '1em');
				}
				
			}

			if(offer == 2){
				num1= 1;
				num2 = 3;
				$( '.strip_6_product'+num1+', .strip_6_product'+num2+'' ).css('color', '#fff');
				$( '.strip_6_product1' ).css('background', '#838f99');
				$( '.strip_6_product3' ).css('background', '#304555');
				if(screenWidth >= screensize){
					$( '.strip_6_product'+offer+' .add_to_cart' ).css('margin-top', '1em');
					$( '.strip_6_product'+num1+' .add_to_cart' ).css('margin-top', '1em');
					$( '.strip_6_product'+num2+' .add_to_cart' ).css('margin-top', '1em');
				}
			}
			if(offer == 3){
				num1= 1;
				num2 = 2;
				$( '.strip_6_product'+num1+', .strip_6_product'+num2+'' ).css('color', '#fff');
				$( '.strip_6_product1' ).css('background', '#838f99');
				$( '.strip_6_product2' ).css('background', '#596a77');
				if(screenWidth >= screensize){
					$( '.strip_6_product'+offer+' .add_to_cart' ).css('margin-top', '3em');
					$( '.strip_6_product'+num1+' .add_to_cart' ).css('margin-top', '3em');
					$( '.strip_6_product'+num2+' .add_to_cart' ).css('margin-top', '3em');
				}
			}

				//slideUp the dropdown color options
				$( '.strip_6_product'+offer+' .color_options ul.choices' ).slideUp();
				
				//resetOtherOffer
				$( '.strip_6_product'+num1+' .color_options .inputColor, .strip_6_product'+num2+' .color_options .inputColor' ).val('COLOUR');
				$('.strip_6_product'+num1+' .color_options input[name="COLOUR"], .strip_6_product'+num2+' .color_options input[name="COLOUR"]').attr('value','COLOUR');
				
				
					
				
				
				
				$( '.strip_6_product .offer'+num1+',.strip_6_product .offer'+num2+'' ).text('CHOOSE OFFER');
				$( '.strip_6_product .offer'+num1+',.strip_6_product .offer'+num2+'' ).css('background', '#fff');
				$( '.strip_6_product .offer'+num1+',.strip_6_product .offer'+num2+'' ).css('color', '#30221f');
				$( '.strip_6_product .offer'+num1+',.strip_6_product .offer'+num2+'' ).removeClass('addToCart');
				$( '.strip_6_product'+num1+' .color_options, .strip_6_product'+num2+' .color_options' ).hide();
				$( '.strip_6_product'+num1+' .color_options .placeholders, .strip_6_product'+num2+' .color_options .placeholders').css('border','0');
				$( '.strip_6_product'+num1+' .error_msg, .strip_6_product'+num2+' .error_msg').text('');
			
				
		}
		
		
		//Update the currently selected form..change button to add to cart, display color shade option, add dropdown functio to color shade options
		//set the currently selected color shade to hidden input field
		
		function selectedOffer(offer,bar_menu){
			
			
				$( '.strip_6_product .offer'+offer+'' ).text('ADD TO CART');
				$( '.strip_6_product .offer'+offer+'' ).css('background', '#304555');
				$( '.strip_6_product .offer'+offer+'' ).css('color', '#fff');
				$( '.strip_6_product .offer'+offer+'' ).addClass('addToCart');
				
			
				
							
				chosen =  $( '.strip_6_product'+offer+' .color_options .inputColor' ).val();

				$( '.strip_6_product'+offer+'' ).css('background', '#c9baa7');
				$( '.strip_6_product'+offer+'' ).css('color', '#000');
				$( '.strip_6_product'+offer+' .color_options' ).show();
				$( '.strip_6_product'+offer+' .color_options .placeholders' ).click(function() {
					$( '.strip_6_product'+offer+' .color_options ul.choices' ).slideDown( "slow", function() {});
				});
				
				$( '.strip_6_product'+offer+' .color_options ul.choices li' ).click(function() {
					 $( '.strip_6_product'+offer+' .color_options .inputColor' ).val($( this ).text());
					 $('.strip_6_product'+offer+' .color_options input[name="COLOUR"]').attr('value',$( this ).text());
					 $( '.strip_6_product'+offer+' .color_options ul.choices' ).slideUp();
				});
	
		}
		
		
		//checks if user selected a color shade before adding to cart, displays error message if no color is selected, resets the form to original state if color shade is selected
		function checkError(offer){

			var chosen =  $( '.strip_6_product'+offer+' .color_options .inputColor' ).val();
			if(chosen == 'COLOUR'){
				$( '.strip_6_product'+offer+' .color_options .placeholders').css('border','2px solid #971602');
				$( '.strip_6_product'+offer+' .error_msg').text('PLEASE SELECT COLOUR').css('color','#971602');
			}
			else{
				$( '.strip_6_product'+offer+' .color_options .placeholders').css('border','0');
				$( '.strip_6_product'+offer+' .error_msg').text('');
			}
			
		}
		
		//add_to_cart

		
		//choose what happens when user click on any CHOOSE OFFER button, there are 3 functions triggered.
		//checkError();
		//closeOtherOffer();
		//selectedOffer();
		
		
		
		$( ".offer" ).click(function() {

			
			var chosen = 'COLOUR';
			var offer =0;
			var bar_menu = $( this ).hasClass( "bar_menu" );
			
			
			/* OFFER 1 */
			if($( this ).hasClass( "offer1" ) && $( this ).hasClass( "addToCart" )){
				offer = 1;
				checkError(offer);
			}
			if($( this ).hasClass( "offer1" ) && !$( this ).hasClass( "addToCart" )){	
				offer = 1;
				
			}	
			
			
			
			
			/* OFFER 2 */
			if($( this ).hasClass( "offer2" ) && $( this ).hasClass( "addToCart" )){
				offer = 2;
				checkError(offer);
			}
			if($( this ).hasClass( "offer2" ) && !$( this ).hasClass( "addToCart" )){
				offer = 2;	
			}

			
			
			
			
			/* OFFER 3*/
			if($( this ).hasClass( "offer3" ) && $( this ).hasClass( "addToCart" )){
				offer = 3;
				checkError(offer);
			}
			if($( this ).hasClass( "offer3" ) && !$( this ).hasClass( "addToCart" )){
				offer = 3;
			}
			
			
			
			closeOtherOffer(offer,bar_menu);
			selectedOffer(offer,bar_menu);
			
			
			
			});
			
			
			
			
		

		
		
		
		











//SMOOTH SCROLL
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });		
		
	
});
