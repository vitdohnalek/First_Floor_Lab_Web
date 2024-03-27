//RESEARCH PAGE SLIDESHOW
// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

// Apply Intersection Observer to each research section
const mainSections = document.querySelectorAll("main .research_section");
mainSections.forEach((el) => observer.observe(el));


//HEADER OPACITY CHANGE
// Get the header element
const header = document.getElementById('header');

// Function to handle scroll event
function handleScroll() {
// Check if the user has scrolled down enough to change the background opacity
if (window.scrollY > 0) {
    document.documentElement.style.setProperty('--header-bg-opacity', '0.95');
} else {
    document.documentElement.style.setProperty('--header-bg-opacity', '0.4');
}
}

// Listen for scroll event and call handleScroll function
window.addEventListener('scroll', handleScroll);


//SCROLL TO THE TOP BUTTON
// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// When the user clicks on the button, scroll to the top of the document with smooth transition
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


