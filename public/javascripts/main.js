$(document).ready(function() {

    // Manage state of the navbar
    var page_content_offset = null;
    $(".parallax").scroll(function() {
        page_content_offset = $(".page-content-section").offset().top;
        if (!$(".navbar").hasClass("visible") && page_content_offset <= 0) {
            // Reveal the navbar
            swapClass(".navbar", "visible", "invisible");
        } else if ($(".navbar").hasClass("visible") && page_content_offset > 0) {
            // Hide the navbar
            swapClass(".navbar", "invisible", "visible");
        }
    });

    // Utility function for swapping classes on a DOM element
    function swapClass(selector, classAdd, classRemove) {
        $(selector).addClass(classAdd);
        $(selector).removeClass(classRemove);
    }

});