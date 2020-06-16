$(document).ready(function(){

  //toggler button
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  })

  //sticky navbar ; less padding
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    
    if(position >= 718){
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top')
    }
    else{
      $('.navbar').removeClass('navbar-background')
      $('.navbar').removeClass('fixed-top')
    }
  })

  //smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function(link){
    link.preventDefault

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25 
    }, 3000)
  })
  
  
  //back to top
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    
    if(position >= 718){
      $('#back-to-top').addClass('scrollTop')
      
    }
    else{
      $('#back-to-top').removeClass('scrollTop')
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  //ripples effect
  $("#header, .info").ripples({
    dropRadius: 5,
    perturbance: 0.2,

  });

  //magnific popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    //gallery
    gallery:{
      enabled: true
    }
    // other options
  });

})