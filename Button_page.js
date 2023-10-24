document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    backToTopButton.addEventListener("click", function () {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // For smooth scrolling
        });
    });
});
