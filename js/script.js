// SM Gold Sargodha  site scripts
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Sticky Header
    =============================== */

    var header = document.getElementById("siteHeader");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 12) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }, { passive: true });
    }

    /* ===============================
   Contact Form -> WhatsApp
================================ */

var contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        var name = document.getElementById("name").value.trim();

        var phone = document.getElementById("phone").value.trim();

        var message = document.getElementById("message").value.trim();

        var whatsappMessage =
`🌟 New Inquiry from SM Gold Website

👤 Name: ${name}

📞 Phone: ${phone}

💬 Message:
${message}`;

        var whatsappURL =
"https://wa.me/923236069069?text=" +
encodeURIComponent(whatsappMessage);

        window.open(whatsappURL,"_blank");

    });

}



    /* ===============================
       Mobile Navigation
    =============================== */

    var navToggle = document.getElementById("navToggle");
    var mainNav = document.getElementById("mainNav");

    if (navToggle && mainNav) {

        function openMenu() {
            mainNav.classList.add("open");
            document.body.classList.add("menu-open");
            navToggle.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
            mainNav.classList.remove("open");
            document.body.classList.remove("menu-open");
            navToggle.setAttribute("aria-expanded", "false");

            document.querySelectorAll(".has-dropdown").forEach(function (item) {
                item.classList.remove("open");
            });
        }

        navToggle.addEventListener("click", function (e) {

            e.stopPropagation();

            if (mainNav.classList.contains("open")) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                if (!link.parentElement.classList.contains("has-dropdown")) {
                    closeMenu();
                }

            });

        });

        document.addEventListener("click", function (e) {

            if (
                !mainNav.contains(e.target) &&
                !navToggle.contains(e.target)
            ) {
                closeMenu();
            }

        });

        document.addEventListener("keydown", function (e) {

            if (e.key === "Escape") {
                closeMenu();
            }

        });

        window.addEventListener("resize", function () {

            if (window.innerWidth > 720) {
                closeMenu();
            }

        });

    }

    /* ===============================
       Mobile Dropdown
    =============================== */

    document.querySelectorAll(".has-dropdown > a").forEach(function (link) {

        link.addEventListener("click", function (e) {

            if (window.innerWidth <= 720) {

                e.preventDefault();

                var parent = link.parentElement;

                document.querySelectorAll(".has-dropdown").forEach(function (item) {

                    if (item !== parent) {
                        item.classList.remove("open");
                    }

                });

                parent.classList.toggle("open");

            }

        });

    });

    /* ===============================
       Today's Date
    =============================== */

    document.querySelectorAll(".js-today-date").forEach(function (el) {

        var opts = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };

        el.textContent = new Date().toLocaleDateString("en-GB", opts);

    });

    /* ===============================
       Footer Year
    =============================== */

    document.querySelectorAll(".js-year").forEach(function (el) {

        el.textContent = new Date().getFullYear();

    });

    /* ===============================
       Scroll Reveal
    =============================== */

    var revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealEls.length) {

        var io = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    io.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        revealEls.forEach(function (el) {

            io.observe(el);

        });

    } else {

        revealEls.forEach(function (el) {

            el.classList.add("in-view");

        });

    }

    /* ===============================
       Back To Top
    =============================== */

    var backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            backToTop.classList.toggle("visible", window.scrollY > 500);

        }, { passive: true });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ===============================
       Gallery Filter
    =============================== */

    var filterButtons = document.querySelectorAll(".gallery-filters button");

    var tiles = document.querySelectorAll(".gallery-tile");

    if (filterButtons.length && tiles.length) {

        filterButtons.forEach(function (btn) {

            btn.addEventListener("click", function () {

                filterButtons.forEach(function (b) {

                    b.classList.remove("active");

                });

                btn.classList.add("active");

                var cat = btn.getAttribute("data-filter");

                tiles.forEach(function (tile) {

                    var show =
                        cat === "all" ||
                        tile.getAttribute("data-category") === cat;

                    tile.style.display = show ? "" : "none";

                });

            });

        });

    }

});