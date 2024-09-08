window.addEventListener("load", (event) => {
    $(".nav-item .nav-link").on('click', function () {
        $('.overlay').toggleClass('active');
    });
})