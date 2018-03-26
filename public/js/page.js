
// Document ready
$(document).ready(function() {
    // Does the side nav-ul exists = Is there a navbar?
    if(!($('#mobile-nav').length === 0)) {
        // Init side nav
        $('.button-collapse').sideNav();
    };
    
    // Does the side nav exists
    if(!($('.sidenav').length === 0)) {
        // Init side nav
        $('.sidenav').sidenav();
    };
});
