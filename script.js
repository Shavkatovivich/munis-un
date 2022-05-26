window.addEventListener("scroll", function() {
    var siteHeader = document.querySelector(".site__nav");
    siteHeader.classList.toggle("sticky", window.scrollY > 15);
})