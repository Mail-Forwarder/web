
// Document ready
$(document).ready(function() {

    // Does the side nav exists
    if(!($('.sidenav').length === 0)) {
        // Init side nav
        $('.sidenav').sidenav();
    };

    //Check for existing tab class
    if(!($('.tabs').length === 0)) {
        //init tabs
        $('.tabs').tabs();
    };
});
