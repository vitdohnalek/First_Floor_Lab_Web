// HAMBURGER NAV
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }
});

// RESEARCH PAGE — Intersection Observer for scroll-reveal + timeline
var researchSections = document.querySelectorAll('main .research_section');
var timelineProgress = document.querySelector('.timeline-progress');
var timelineDots = document.querySelectorAll('.timeline-dot');

if (researchSections.length > 0) {
    // Scroll-reveal observer
    var revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        },
        { threshold: 0.15 }
    );

    researchSections.forEach(function (el) {
        revealObserver.observe(el);
    });

    // Timeline progress tracking
    if (timelineProgress && timelineDots.length > 0) {
        // Dot activation observer — fires when a section crosses 40% of viewport
        var dotObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    var index = Array.prototype.indexOf.call(researchSections, entry.target);
                    var dot = document.querySelector('.timeline-dot[data-section="' + index + '"]');
                    if (dot) {
                        if (entry.isIntersecting) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    }
                });
            },
            { threshold: 0.4 }
        );

        researchSections.forEach(function (el) {
            dotObserver.observe(el);
        });

        // Scroll-driven progress bar
        window.addEventListener('scroll', function () {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            timelineProgress.style.height = Math.min(progress, 100) + '%';
        });
    }
}

// HEADER OPACITY CHANGE ON SCROLL
function handleScroll() {
    var opacity = window.scrollY > 0 ? '0.95' : '0.6';
    document.documentElement.style.setProperty('--header-bg-opacity', opacity);
}
window.addEventListener('scroll', handleScroll);

// SCROLL-TO-TOP BUTTON (only if present on the page)
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
