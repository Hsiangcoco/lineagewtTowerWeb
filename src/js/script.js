$(function () {
    $('.slideText').textslider({
        direction: 'scrollUp', // 捲動方向: scrollUp向上, scrollDown向下
        scrollNum: 1, // 一次捲動幾個元素
        scrollSpeed: 800, // 捲動速度(ms)
        pause: 3000 // 停頓時間(ms)
    });
    $('.imgCycle').after('').cycle({
        fx: 'fade', //輪播方式
        sync: true, //有無前一張殘影
        delay: -3000, //輪播速度
        pause: 1,
        next: '.arrow-right',
        prev: '.arrow-left',
    })


    const $carousel = $(".youtube-carousel");
    const $slides = $carousel.find("a");
    const totalSlides =5;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 10; // 每次移動 100% 的寬度
        $carousel.css({
            transform: `translateX(${offset}%)`,
        });
    }

    function startAutoPlay() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % 5; // 環形循環
            updateCarousel();
        }, 3000); // 每 3 秒切換一次
    }

    function stopAutoPlay() {
        clearInterval(autoSlideInterval);
    }

    // 點擊右箭頭時滑動到下一張圖片
    $(".youtube-arrow-right").click(function () {
        currentIndex = (currentIndex + 1) % 5; // 環形循環
        console.log(currentIndex)
        updateCarousel();
        startAutoPlay();
    });

    // 點擊左箭頭時滑動到上一張圖片
    $(".youtube-arrow-left").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % 5; // 環形循環
        updateCarousel();
    });

    $(".youtube-carousel").hover(
        function () {
            stopAutoPlay();
        },
        function () {
            startAutoPlay();
        }
    );

    startAutoPlay()

    $('.LT-gamenews-bk-sm-1').smoove({
        offset:'20%' /* offset 整數預設為像素不能加引號 ％要加引號 */
    });
})








