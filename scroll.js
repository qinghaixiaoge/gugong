(function () {
    const container = document.querySelector(".Container1")
    const imgHeight = document.querySelector(".Container").clientHeight
    console.log("轮播图片高度=>",imgHeight);
    const two = document.querySelector(".two")
    // 鼠标滚动事件
    function scroll() {
        if (document.documentElement.scrollTop >= imgHeight/2) {
            requestAnimationFrame(() => {
                container.classList.add("active")
                two.classList.add("active")
            })
            window.removeEventListener("scroll",scroll)
        }

    }
    function init() {
        scroll()
        window.addEventListener("scroll", scroll)
    }
    init()
})()