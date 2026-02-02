/*---------------------------------------
  CUSTOM ANIMATIONS JAVASCRIPT              
-----------------------------------------*/

(function ($) {

"use strict";

  // Loading Animation
  $(window).on('load', function() {
    setTimeout(function() {
      $('.loading-overlay').addClass('hidden');
    }, 1000);
  });

  // Scroll Animation
  function checkScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    
    $('.fade-in, .slide-in-left, .slide-in-right, .scale-in').each(function() {
      var elementTop = $(this).offset().top;
      var elementHeight = $(this).outerHeight();
      
      if (scrollTop > elementTop - windowHeight + elementHeight * 0.3) {
        $(this).addClass('active');
      }
    });
  }

  // Parallax Effect
  function parallaxEffect() {
    var scrollTop = $(window).scrollTop();
    
    $('.parallax-bg').each(function() {
      var speed = $(this).data('speed') || 0.5;
      var yPos = -(scrollTop * speed);
      $(this).css('transform', 'translateY(' + yPos + 'px)');
    });
  }

  // Smooth Scroll for Anchor Links
  $('.navbar-nav a, .smoothscroll').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var offsetTop = $(target).offset().top - 80;
    
    $('html, body').animate({
      scrollTop: offsetTop
    }, 1000, 'easeInOutExpo');
  });

  // Sticky Navigation
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var navbar = $('.navbar');
    
    if (scrollTop > 100) {
      navbar.addClass('navbar-scrolled');
    } else {
      navbar.removeClass('navbar-scrolled');
    }
  });

  // Counter Animation
  function animateCounters() {
    $('.counter').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');
      
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  }

  // Initialize Functions
  $(window).on('scroll', function() {
    checkScroll();
    parallaxEffect();
  });

  // Initial Check
  $(document).ready(function() {
    checkScroll();
    
    // Add loading overlay
    if (!$('.loading-overlay').length) {
      $('body').prepend('<div class="loading-overlay"><div class="loading-spinner"></div></div>');
    }
  });

  // Mouse Move Parallax Effect
  $(document).on('mousemove', function(e) {
    var mouseX = e.pageX / $(window).width();
    var mouseY = e.pageY / $(window).height();
    
    $('.hero-section .container').css({
      'transform': 'translate(' + mouseX * 10 + 'px, ' + mouseY * 10 + 'px)'
    });
  });

  // Button Hover Effects
  $('.custom-btn').on('mouseenter', function() {
    $(this).addClass('btn-pulse');
  }).on('mouseleave', function() {
    $(this).removeClass('btn-pulse');
  });

  // Card Hover Effects
  $('.pricing-thumb, .artists-thumb').on('mouseenter', function() {
    $(this).addClass('hover-lift');
  }).on('mouseleave', function() {
    $(this).removeClass('hover-lift');
  });

  // Image Hover Effects
  $('.about-image, .artists-image').on('mouseenter', function() {
    $(this).addClass('hover-scale');
  }).on('mouseleave', function() {
    $(this).removeClass('hover-scale');
  });

  // Text Reveal Animation
  $('.text-reveal').on('mouseenter', function() {
    $(this).addClass('active');
  }).on('mouseleave', function() {
    var $this = $(this);
    setTimeout(function() {
      $this.removeClass('active');
    }, 800);
  });

})(window.jQuery);
