//页脚徽标轮播图
var ark_footer_swiper = new Swiper("#ark-footer-bdage-container", {
    direction: "horizontal", //横向切换
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    effect : 'fade', //渐隐切换
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 3000,//3秒切换一次
        pauseOnMouseEnter: true, //鼠标进入停止切换，离开恢复切换
    },
});
//首页顶部推荐文章轮播图
var ark_swiper = new Swiper("#ark-swiper-container", {
    direction: "horizontal", //横向切换
    loop: true,
    grabCursor : true,//鼠标悬停时显示抓手
    updateOnWindowResize: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,//2秒切换一次
        pauseOnMouseEnter: true, //鼠标进入停止切换，离开恢复切换
    },
});