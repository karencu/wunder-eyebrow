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
		move_slider_on_hover: true
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
	

		//add_to_cart

		
		$( ".strip_6_product1 .color_options .inputColor" ).val('COLOUR');
		$( ".strip_6_product2 .color_options .inputColor" ).val('COLOUR');
		$( ".strip_6_product3 .color_options .inputColor" ).val('COLOUR');

		$( ".offer" ).click(function() {

			
			var chosen;
			
			/* OFFER 1 */
			
			if($( this ).hasClass( "offer1" ) && $( this ).hasClass( "addToCart" )){
				chosen =  $( ".strip_6_product1 .color_options .inputColor" ).val();
				
				if(chosen == 'COLOUR'){
					$( ".strip_6_product1 .color_options .placeholders").css('border','2px solid #971602');
					$( ".strip_6_product1 .error_msg").text('PLEASE SELECT COLOUR').css('color','#971602');
				}
				else{
					$( ".strip_6_product1 .color_options .placeholders").css('border','0');
					$( ".strip_6_product1 .error_msg").text('');
				}
			}
			
		
			if($( this ).hasClass( "offer1" ) && !$( this ).hasClass( "addToCart" )){
				$( this ).text('ADD TO CART');
				$( this ).css('background', '#3d596e');
				$( this ).css('color', '#fff');
				$( this ).addClass('addToCart');

				
				chosen =  $( ".strip_6_product1 .color_options .inputColor" ).val();

				$( '.strip_6_product1' ).css('background', '#c9baa7');
				$( ".strip_6_product1 .color_options" ).show();
				$( ".strip_6_product1 .color_options .placeholders" ).click(function() {
					$( ".strip_6_product1 .color_options ul.choices" ).slideToggle( "slow", function() {});
				});
				
				$( ".strip_6_product1 .color_options ul.choices li" ).click(function() {
					 $( ".strip_6_product1 .color_options .inputColor" ).val($( this ).text());
					 $( ".strip_6_product1 .color_options ul.choices" ).hide();
				});
				
					
			}
			
			
			
			
			
			/* OFFER 2 */
			
			if($( this ).hasClass( "offer2" ) && $( this ).hasClass( "addToCart" )){
				chosen =  $( ".strip_6_product2 .color_options .inputColor" ).val();
				
				if(chosen == 'COLOUR'){
					$( ".strip_6_product2 .color_options .placeholders").css('border','2px solid #971602');
					$( ".strip_6_product2 .error_msg").text('PLEASE SELECT COLOUR').css('color','#971602');
				}
				else{
					$( ".strip_6_product2 .color_options .placeholders").css('border','0');
					$( ".strip_6_product2 .error_msg").text('');
				}
			}
			
		
			if($( this ).hasClass( "offer2" ) && !$( this ).hasClass( "addToCart" )){
				$( this ).text('ADD TO CART');
				$( this ).css('background', '#3d596e');
				$( this ).css('color', '#fff');
				$( this ).addClass('addToCart');
				
				chosen =  $( ".strip_6_product2 .color_options .inputColor" ).val();

				$( '.strip_6_product2' ).css('background', '#c9baa7');
				$( ".strip_6_product2 .color_options" ).show();
				$( ".strip_6_product2 .color_options .placeholders" ).click(function() {
					$( ".strip_6_product2 .color_options ul.choices" ).slideToggle( "slow", function() {});
				});
				
				$( ".strip_6_product2 .color_options ul.choices li" ).click(function() {
					 $( ".strip_6_product2 .color_options .inputColor" ).val($( this ).text());
					 $( ".strip_6_product2 .color_options ul.choices" ).hide();
				});
				
					
			}
			
			
			
			/* OFFER 3*/

			if($( this ).hasClass( "offer3" ) && $( this ).hasClass( "addToCart" )){
				chosen =  $( ".strip_6_product3 .color_options .inputColor" ).val();
				
				if(chosen == 'COLOUR'){
					$( ".strip_6_product3 .color_options .placeholders").css('border','2px solid #971602');
					$( ".strip_6_product3 .error_msg").text('PLEASE SELECT COLOUR').css('color','#971602');
				}
				else{
					$( ".strip_6_product3 .color_options .placeholders").css('border','0');
					$( ".strip_6_product3 .error_msg").text('');
				}
			}
			
		
			if($( this ).hasClass( "offer3" ) && !$( this ).hasClass( "addToCart" )){
				$( this ).text('ADD TO CART');
				$( this ).css('background', '#3d596e');
				$( this ).css('color', '#fff');
				$( this ).addClass('addToCart');
				
				chosen =  $( ".strip_6_product3 .color_options .inputColor" ).val();

				$( '.strip_6_product3' ).css('background', '#c9baa7');
				$( ".strip_6_product3 .color_options" ).show();
				$( ".strip_6_product3 .color_options .placeholders" ).click(function() {
					$( ".strip_6_product3 .color_options ul.choices" ).slideToggle( "slow", function() {});
				});
				
				$( ".strip_6_product3 .color_options ul.choices li" ).click(function() {
					 $( ".strip_6_product3 .color_options .inputColor" ).val($( this ).text());
					 $( ".strip_6_product3 .color_options ul.choices" ).hide();
				});
				
					
			}
			
			
			
			
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
