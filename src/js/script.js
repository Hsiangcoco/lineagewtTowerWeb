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


    let autoSlideInterval; // 儲存自動播放的 interval
let isTabletOrBelow = false; // 用於判斷是否在平板模式以下
let currentIndex = 0; // 當前圖片索引

// 判斷是否為平板模式或以下
function checkTabletOrBelow() {
    isTabletOrBelow = window.matchMedia("(max-width: 820px)").matches;
    if (isTabletOrBelow) {
        stopAutoPlay(); // 停止自動播放
    } else {
        startAutoPlay(); // 啟動自動播放
    }
}

// 自動播放功能
function startAutoPlay() {
    if (isTabletOrBelow) return; // 平板模式以下不啟動自動播放
    stopAutoPlay(); // 防止重複啟動
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % 5; // 環形循環
        updateCarousel();
    }, 3000); // 每 3 秒切換一次
}

// 停止自動播放
function stopAutoPlay() {
    clearInterval(autoSlideInterval);
}

// 更新輪播位置
function updateCarousel() {
    const carousel = $(".youtube-carousel");
    const scrollDistance = 300; // 每次移動的距離
    const newPosition = -currentIndex * scrollDistance;
    carousel.css("transform", `translateX(${newPosition}px)`);
}

// 點擊右箭頭時滑動到下一張圖片
$(".youtube-arrow-right").click(function () {
    currentIndex = (currentIndex + 1) % 5; // 環形循環
    updateCarousel();
    startAutoPlay();
});

// 點擊左箭頭時滑動到上一張圖片
$(".youtube-arrow-left").click(function () {
    currentIndex = (currentIndex - 1 + 5) % 5; // 環形循環
    updateCarousel();
});

// 在滑鼠懸停時停止自動播放，離開時啟動
$(".youtube-carousel").hover(
    function () {
        stopAutoPlay();
    },
    function () {
        startAutoPlay();
    }
);

// 檢查視窗大小變化
window.addEventListener("resize", checkTabletOrBelow);

// 初始化
checkTabletOrBelow();
    $('.LT-gamenews-bk-sm-1').smoove({
        offset: '20%' /* offset 整數預設為像素不能加引號 ％要加引號 */
    });

    let resizeTimeout;

    $(window).on('resize', function () {
        clearTimeout(resizeTimeout); // 清除之前的計時器
        resizeTimeout = setTimeout(function () {
            location.reload(); // 延遲執行，避免頻繁重載
        }, 300); // 延遲 300 毫秒
    });

})








