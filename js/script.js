$(function () {
    $('.slideText').textslider({
        direction: 'scrollUp', // 捲動方向: scrollUp向上, scrollDown向下
        scrollNum: 1, // 一次捲動幾個元素
        scrollSpeed: 800, // 捲動速度(ms)
        pause: 3000 // 停頓時間(ms)
    });
    $('.imgCycle').cycle({
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


    //影片輪播
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

    let lastWidth = $(window).width();
let threshold = 50; // 設定閾值，避免微小變化

$(window).on('resize', function() {
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(function() {
        const currentWidth = $(window).width();
        
        // 只在寬度變化超過閾值時才重新整理
        if (Math.abs(currentWidth - lastWidth) > threshold) {
            lastWidth = currentWidth;
            location.reload();
        }
    }, 300);
});

    // 檢查是否是第一次載入頁面
    if (!sessionStorage.getItem('pageLoaded')) {
        // 設置標記，表示頁面已經載入過
        sessionStorage.setItem('pageLoaded', 'true');
        // 執行重新整理
        location.reload();
    }



    function loadMore() {
        // 原始資料模板
        const template = `
    <div class="gamenews-content-textbox">
        <div class="gamenews-content-textbox-1">
            <img src="../images/gamenews-content-img-1.png" alt="">
            <a href="#">
                <p>[說明] 1/8(三) 「白金通行證(21日)」商品說明(骷髏世界除外)(更新)</p>
            </a>
        </div>
        <div class="gamenews-content-text-1">
            <p>天堂Ｗ攻略聖所</p>
            <p>2025/01/07</p>
        </div>
    </div>
`;

        // 獲取更多內容的容器
        const moreContent = document.getElementById('more-content');

        // 顯示隱藏的內容
        moreContent.classList.remove('hidden');

        // 添加10筆新資料
        for (let i = 0; i < 10; i++) {
            moreContent.insertAdjacentHTML('beforeend', template);
        }
    }


    $(".load-more-btn").click(function () {
        loadMore()
    });
    $(".floating-nav").click(function () {
        $(this).toggleClass('active')
    })

})


