window.addEventListener("load", (event) => {
    const range = (n) =>
        Array(n)
            .fill(0)
            .map((i, j) => i + j);
    

    function getCard(index) {
        return `#card${index}`;
    }
    function getCardContent(index) {
        return `#card-content-${index}`;
    }
    function getSliderItem(index) {
        return `#slide-item-${index}`;
    }

    // const set = gsap.set;

    // function animate(target, duration, properties) {
    //     return new Promise((resolve) => {
    //         gsap.to(target, {
    //             ...properties,
    //             duration: duration,
    //             onComplete: resolve,
    //         });
    //     });
    // }
    console.log(typeof gsap);
    if (typeof gsap !== 'undefined' && gsap != undefined &&  gsap ) {
    console.log($('.card-item').length)
    let order = Array.from(Array($('.card-item').length).keys());
    let detailsEven = true;

    let current = 0;
    let offsetTop = 300;
    let offsetLeft = 700;
    let cardWidth = 200;
    let cardHeight = 300;
    let gap = 40;
    let numberSize = 50;
    const ease = "sine.inOut";

    function init() {
        const [active, ...rest] = order;
        const detailsActive = detailsEven ? "#details-even" : "#details-odd";
        const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
        const { innerHeight: height, innerWidth: width } = window;
        offsetTop = height - 630;
        offsetLeft = width - 830;

        gsap.set("#pagination", {
            top: offsetTop + 330,
            left: offsetLeft,
            y: 200,
            opacity: 0,
            zIndex: 60,
        });
        gsap.set("nav", { y: -200, opacity: 0 });

        gsap.set(getCard(active), {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
        gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
        gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });

        gsap.set(".progress-sub-foreground", {
            width: 500 * (1 / order.length) * (active + 1),
        });

        rest.forEach((i, index) => {
            gsap.set(getCard(i), {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                zIndex: 30,
                borderRadius: 10,
            });
            gsap.set(getCardContent(i), {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                zIndex: 40,
                y: offsetTop + cardHeight - 100,
            });
            gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
        });

        gsap.set(".indicator", { x: -window.innerWidth });

        const startDelay = 0.6;

        // gsap.to(".cover", {
        //     x: width + 400,
        //     delay: 0.5,
        //     ease,
        //     onComplete: () => {
        //         setTimeout(() => {
        //             loop();
        //         }, 500);
        //     },
        // });

        rest.forEach((i, index) => {
            gsap.to(getCard(i), {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 30,
                delay: 0.05 * index,
                ease,
                delay: startDelay,
            });
            gsap.to(getCardContent(i), {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 40,
                delay: 0.05 * index,
                ease,
                delay: startDelay,
            });
        });
        gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
        gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
        gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
    }

    let clicks = 0;

    function step() {
        return new Promise((resolve) => {
            order.push(order.shift());
            detailsEven = !detailsEven;

            const detailsActive = detailsEven ? "#details-even" : "#details-odd";
            const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

            // document.querySelector(`${detailsActive} .place-box .text`).textContent =
            //     data[order[0]].place;
            document.querySelector(`${detailsActive} .title-1`).textContent =
                $(`#card-content-${current} .content-place h2`).html();
            // document.querySelector(`${detailsActive} .title-2`).textContent =
            //     data[order[0]].title2;
            // document.querySelector(`${detailsActive} .desc`).textContent =
            //     data[order[0]].description;

            gsap.set(detailsActive, { zIndex: 22 });
            gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
            gsap.to(`${detailsActive} .text`, {
                y: 0,
                delay: 0.1,
                duration: 0.7,
                ease,
            });
            gsap.to(`${detailsActive} .title-1`, {
                y: 0,
                delay: 0.15,
                duration: 0.7,
                ease,
            });
            gsap.to(`${detailsActive} .title-2`, {
                y: 0,
                delay: 0.15,
                duration: 0.7,
                ease,
            });
            gsap.to(`${detailsActive} .desc`, {
                y: 0,
                delay: 0.3,
                duration: 0.4,
                ease,
            });
            gsap.to(`${detailsActive} .cta`, {
                y: 0,
                delay: 0.35,
                duration: 0.4,
                onComplete: resolve,
                ease,
            });
            gsap.set(detailsInactive, { zIndex: 12 });

            const [active, ...rest] = order;
            const prv = rest[rest.length - 1];

            gsap.set(getCard(prv), { zIndex: 10 });
            gsap.set(getCard(active), { zIndex: 20 });
            gsap.to(getCard(prv), { scale: 1.5, ease });

            gsap.to(getCardContent(active), {
                y: offsetTop + cardHeight - 10,
                opacity: 0,
                duration: 0.3,
                ease,
            });
            gsap.to(getSliderItem(active), { x: 0, ease });
            gsap.to(getSliderItem(prv), { x: -numberSize, ease });
            gsap.to(".progress-sub-foreground", {
                width: 500 * (1 / order.length) * (active + 1),
                ease,
            });

            gsap.to(getCard(active), {
                x: 0,
                y: 0,
                ease,
                width: window.innerWidth,
                height: window.innerHeight,
                borderRadius: 0,
                onComplete: () => {
                    const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                    gsap.set(getCard(prv), {
                        x: xNew,
                        y: offsetTop,
                        width: cardWidth,
                        height: cardHeight,
                        zIndex: 30,
                        borderRadius: 10,
                        scale: 1,
                    });

                    gsap.set(getCardContent(prv), {
                        x: xNew,
                        y: offsetTop + cardHeight - 100,
                        opacity: 1,
                        zIndex: 40,
                    });
                    gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

                    gsap.set(detailsInactive, { opacity: 0 });
                    gsap.set(`${detailsInactive} .text`, { y: 100 });
                    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
                    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
                    gsap.set(`${detailsInactive} .desc`, { y: 50 });
                    gsap.set(`${detailsInactive} .cta`, { y: 60 });
                    clicks -= 1;
                    if (clicks > 0) {
                        step();
                    }
                },
            });

            rest.forEach((i, index) => {
                if (i !== prv) {
                    const xNew = offsetLeft + index * (cardWidth + gap);
                    gsap.set(getCard(i), { zIndex: 30 });
                    gsap.to(getCard(i), {
                        x: xNew,
                        y: offsetTop,
                        width: cardWidth,
                        height: cardHeight,
                        ease,
                        delay: 0.1 * (index + 1),
                    });

                    gsap.to(getCardContent(i), {
                        x: xNew,
                        y: offsetTop + cardHeight - 100,
                        opacity: 1,
                        zIndex: 40,
                        ease,
                        delay: 0.1 * (index + 1),
                    });
                    gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
                }
            });
        });
    }

    async function loop() {
        await animate(".indicator", 2, { x: 0 });
        await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
        set(".indicator", { x: -window.innerWidth });
        await step();
        loop();
    }

    async function loadImage(src) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    async function loadImages() {
        const promises = data.map(({ image }) => loadImage(image));
        return Promise.all(promises);
    }


    init();

    $('.animate-slide .pagination .arrow-right').on('click', async function () {
        current = current >= 4 ? 0 : current + 1;
        console.log('next slide', current);
        await step();
    })
}

// $(".dropdown").click(
//     function () {
//         $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideToggle("400");
//         $(this).toggleClass('open');
//         var e = document.getElementById("overlay");
//         var c = window.getComputedStyle(e).backgroundColor;
//         if (c === "rgb(255, 255, 255)") {
//             e.style.background = "#aaaaaa";
//         }
//         else {
//             e.style.background = "#ffffff";
//         }
//     }
// );
})
