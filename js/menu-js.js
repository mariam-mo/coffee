// menu
$(document).ready(function () {
    // Show drinks as default
    $('#drinks').show();

    // Handle menu item clicks
    $('.menu-buttons a').click(function (e) {
        e.preventDefault();

        // Get the target content id
        var target = $(this).data('target');

        // Hide content
        $('.collection').hide();

        // Show target content
        $('#' + target).show();
    });
});