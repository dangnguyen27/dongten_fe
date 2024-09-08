window.addEventListener("load", (event) => {
    $(".nav-item.dropdown .nav-link").on('click', function () {
        $('.overlay').toggleClass('active');
        $('.main-content').toggleClass('zindex_1');
        $('.main-content').toggleClass('position-relative');
    });
})