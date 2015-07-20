/*
 * Author: Micah Jefferson
 * URL: http://bboyatwork.com
 */

// ----------------------------------
// Layout - CSS
// ----------------------------------

  // The layout will be fully responsive 

  // The header navigation would stick to top of the page in full view mode and stay stuck as the user scrolled down. 
    //Fix the header

  // The main image right below the header would be an image that would scale responsively.

  //The title of the website/name of the organization would be large and transparent text over the image that would also scale responsively using rems

  // Below the header image/background the main body of the content will be in a 2 column grid layout which will become one column if the browser width is less than 800px.

  // Detect when to apply mobile styling by using media queries

  // Create a splash page with the site name that will pull up after page is loaded. 
    // Place in a container div

   $(".slider-container").slideUp(3000, "linear");


  // maybe have the logo fade in as well

  // have images in first top 3rd slide to different images 

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

  // Add sticky donate button to the bottom right of the page with highest z index, ( also a contact button?)
    // Use fixed positioning
  
  // Open forms in a call out window if in full view mode
  // $(".show-newsletter").on('click', function(){
  //   $(".newsletter").addClass("calloutForm");
  //   $(".somedialog").addClass("overlayBackground");
  // });

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

$('.dialog__overlay').on('click', function(e){
  e.preventDefault();
    $("#newsletterDialog").addClass("dialog");
    $("#newsletterDialog .dialog__content").removeClass("calloutForm");
    $(".dialog__overlay").removeClass("overlayBackground");



  // When an input box is selected in a form outline outline it red to let user know it is active
});

$('.actionClose').on('click', function(e){
    e.preventDefault();
    $("#contactdialog").addClass("dialog");
    $("#contactdialog .dialog__content").removeClass("calloutForm");
    $(".dialog__overlay").removeClass("overlayBackground");

});

// ----------------------------------
// Navigation Action/Animation
// ----------------------------------

  //If user is on a mobile device or scales the browser down to less than 800px, the nav would turn into a hamburger menu button
    // When the hamburger menu is clicked on the nav will slide in from to left to right when opened.

  // When the user hovers over a button/links to click the selected icon would pulse until user clicked the item in full view mode.
    // Apply hover effects

  // When a nav link is clicked the page will automatically scroll to that section and flash a red border around it that will last for less than a second

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
// Interactive Photo Gallery Action/Animation
// -------------------------------------------

  // The slideshow gallery will be able to be paged through with a slider or ‘advance’ / ‘previous’ buttons. 

  // If user is on mobile, gesture swipe will be used

  // Clicking on an image would open the image in a lightbox for the user to see the image in a larger resolution. 


// -------------------------------------------
// Interactive Video Gallery Action/Animation
// -------------------------------------------

  // As the user hovers over the video in full view mode it will automatically start playing with no sound. Once the user clicks on the video / play button the video will start from the beginning with sound

  // Video will open in a lightbox and start playing

  // In mobile/tablet view the user can swipe video left and write if there are multiple videos
    // When video is selected open video in Youtube/native player


// -------------------------------------------
// Scroll to animate data visualization graphs
// Interactive Google Maps
// -------------------------------------------

  // Visual data that would animate as user scrolls down the page and would complete once the section is in the upper third of the page

  // Embed custom Google Maps widget 


// -------------------------------------------
// Interactive Kickstarter Widget
// -------------------------------------------

  // The kickstarter widget and the newsletter signup box section. 
    // Once the user clicks within that box it will open up in a form that hovers over the page in it’s own ‘window’.


// -------------------------------------------
// Footer Contact
// -------------------------------------------

  // The footer will contain contact information and social links.  
    // When Once a user clicks on the contact link for email this will also open a form in a window that will hover over the page.
