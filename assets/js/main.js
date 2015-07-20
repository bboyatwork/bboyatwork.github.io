/*
 * Author: Micah Jefferson
 * URL: http://bboyatwork.com
 */

  // Create a splash page with the site name that will pull up after page is loaded. 
    // Place in a container div

   $(".slider-container").slideUp(3000, "linear");
 

// ----------------------------------
// Global Action/Animation
// ----------------------------------
$('.hamburger').on('click', function(e){
  e.preventDefault();
  $('body').addClass("active");
  $('.hamburger').hide();
});

$('.close, nav a').on('click', function(e){
  e.preventDefault();
  $('body').removeClass("active");
  $('.hamburger').show();
});

  
  // Open forms in a call out window if in full view mode

  $("#openContact").on('click', function(e){
    e.preventDefault(); 
    $("#contactdialog").removeClass("dialog");
    $("#contactdialog .dialog__content").addClass("calloutForm");
    $(".dialog__overlay").addClass("overlayBackground");
  });

$(".show-newsletter").on('click', function(e){
    e.preventDefault(); 
    $("#newsletterDialog").removeClass("dialog");
    $("#newsletterDialog .dialog__content").addClass("calloutForm");
    $(".dialog__overlay").addClass("overlayBackground");

  });



$(".actionClose").on('click', function(e){
    e.preventDefault();
    $("#contactdialog").addClass("dialog");
    $("#contactdialog .dialog__content").removeClass("calloutForm");
    $(".dialog__overlay").removeClass("overlayBackground");

    $("#newsletterDialog").addClass("dialog");
    $("#newsletterDialog .dialog__content").removeClass("calloutForm");
    $(".dialog__overlay").removeClass("overlayBackground");


});

  // Create scroll to top button that will smoothly scroll window to the very top of the page
    // Once the user scrolls down half the page show the scroll to top button will appear about 30% fixed from the top of the page

    // var distanceFromTopToNav = $('.main-nav').offset().top;

// find out how far down the page the user has scrolled
// $(window).on('scroll', function(){
  
//   var viewableOffset = $(".main-nav").offset().top - $(window).scrollTop();
//   console.log(viewableOffset);
    // if the user is so far down the page = to full distance or greater then where the nav is positioned fromt he top of the page 
  // if($(this).scrollTop() >= distanceFromTopToNav)
  // {
  //   $('nav').addClass("scrolled");
  // }  
  // else{
  //   $('nav').removeClass("scrolled");
  // }

     

// -------------------------------------------
// Interactive Video Gallery Action/Animation
// -------------------------------------------
var windowWidth = $(window).width();
console.log(windowWidth);
$(document).ready(addVideo(windowWidth));

function addVideo(windowWidth){
  if(windowWidth > 480){
    addLargeVideo();
  }
  else{
    addSmallVideo();
  }
}

function addLargeVideo(){
  $("#headerwrap").hover(
    function(){
    $(this).html('<video src="images/CAFe-draft.mp4" poster="images/evanston-posterimage.jpg" controls></video>').fadeIn(5000); 
    }, function() {
    $(this).find( "video:last" ).remove();
  });
  windowWidth = $(window).width();
}

function addSmallVideo(){
  $("#headerwrap").hover(
    function(){
    $(this).html('<video class="videoSmall" src="images/CAFe-draft.mp4" poster="images/evanston-posterimage.jpg" controls></video>').fadeIn(5000); 
    }, function() {
    $(this).find( "video:last" ).remove();
  });
  windowWidth = $(window).width();
}

  // As the user hovers over the video in full view mode it will automatically start playing with no sound. Once the user clicks on the video / play button the video will start from the beginning with sound

  // Video will open in a lightbox and start playing

