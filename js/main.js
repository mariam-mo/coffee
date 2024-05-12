   // navbar
   jQuery(function($){
    var $navbar = $('.header-nav');
    $(window).on('scroll', function(event){
        var $current = $(this).scrollTop();
        if ($current > 200) {
            $navbar.addClass('navbar-color');
            } else {
                $navbar.removeClass('navbar-color')
        }
    });
}); 
//////////////////////////////////////////////////
  // number
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
////////////////////////////////
        // menu
        $(document).ready(function () {
          // Show drinks as default
          $('#drinks').show();

          // Handle menu item clicks
          $('.menu-buttons a').click(function (e) {
              e.preventDefault();

              // Get the target content id
              var target = $(this).data('target');

              // Hide content
              $('.collection').hide();

              // Show target content
              $('#' + target).show();
          });
      });
//////////////////////////////
  