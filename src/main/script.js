$(document).ready(function() {
    // CopyRight Date Dynamic
    let newDate = new Date();
    $('#copyright').text(newDate.getFullYear());

    // Toggle NavBar Small
    $(".links a[data-target]").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        const targetId = $(this).attr('data-target');
        let TargetEle = $('#' + targetId);
        if (TargetEle.length) {
            let isshow = TargetEle.css("display") === "block";
            $('.navbar_small').slideUp();
            if (!isshow) {
                TargetEle.slideDown();
            };
        };
    });

    $(document).on("click", function() {
        $('.navbar_small').slideUp();
    });

    $(".menu").on('click', function(event) {
        event.stopPropagation();
        let navbarMob = $(".navbar");
        navbarMob.slideToggle("slow");
    });
});