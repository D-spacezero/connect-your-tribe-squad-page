
// Remove transition class
const square = document.querySelector('.fade');
square.classList.remove('fade-transition');

// Create the observer:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('fade-transition');
      return;
    }

    square.classList.remove('fade-transition');
  });
});

observer.observe(document.querySelector('.fade'));






/*$(function() {
    var header = $(".notscrolled");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            header.removeClass('notscrolled').addClass("scrolled");
        } else {
            header.removeClass("scrolled").addClass('notscrolled');
        }
        if (scroll >= 400) {
            header.removeClass('notscrolled').addClass("scrolled");
        }
    });
});


$(function() {
    var header = $(".scrolled");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            header.removeClass('scrolled').addClass("notscrolled");
        } else {
            header.removeClass("notscrolled").addClass('scrolled');
        }
		if (scroll >= 1100) {
            header.removeClass('notscrolled').addClass("scrolled");
        }
    });
});*/


