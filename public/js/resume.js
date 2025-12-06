(($) => {
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
					"easeInOutExpo",
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$(".js-scroll-trigger").click(() => {
		$(".navbar-collapse").collapse("hide");
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$("body").scrollspy({
		target: "#sideNav",
	});

	// Disable Right click in the page
	$("#page-top").on("contextmenu", (e) => false);

	// Enable Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// Magnific Popup - Project Section Scripts
	$(".image-link").magnificPopup({
		type: "image",
		gallery: {
			enabled: false,
		},
		callbacks: {
			open: function () {
				const textContent = $(this.currItem.el)
					.siblings(".text-container")
					.clone();
				console.log();
				this.content.append(textContent);
				textContent.show();
			},
			close: function () {
				this.content.find(".text-container").remove();
			},
		},
	});
})(jQuery); // End of use strict
