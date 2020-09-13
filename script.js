document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        edge: 'right',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    }
    var instances = M.Sidenav.init(elems, options);
  });

// Hides and shows navbar depending on scroll position
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    var position = $("#home").position();

    var $nav = $(".navbar-fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

function scrollToExperience() {
	var position = $("#experience").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
}

function scrollToHome () {
	var position = $("#home").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
}

function scrollToAbout () {
	var position = $("#aboutMe").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
}

function scrollToContact () {
	var position = $("#socialMediaBox").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
}

