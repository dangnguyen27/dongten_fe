window.addEventListener("load", (event) => {
    $(".nav-item.dropdown .nav-link").on('click', function () {
        if($(this).hasClass('show')) {
            $('.overlay').addClass('active');
            $('.main-content').addClass('zindex_1');
            $('.main-content').addClass('position-relative');
        } else {
            $('.overlay').removeClass('active');
            $('.main-content').removeClass('zindex_1');
            $('.main-content').removeClass('position-relative');
        }
        // $('.overlay').toggleClass('active');
        // $('.main-content').toggleClass('zindex_1');
        // $('.main-content').toggleClass('position-relative');
    });

    $(document).on('click', function (e) {
        console.log($(e.target).closest(".dropdown-menu .container").length, $(e.target).closest(".nav-link").length)
        if ($(e.target).closest(".nav-link").length === 0 && $(e.target).closest(".dropdown-menu .container").length === 0) {
            $('.overlay').removeClass('active');
            $('.main-content').removeClass('zindex_1');
            $('.main-content').removeClass('position-relative');
        }
    });
})