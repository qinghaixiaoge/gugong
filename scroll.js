(function () {
    const container = document.querySelector(".Container1")
    const two = document.querySelector(".two")
    // 鼠标滚动事件
    function scroll(e) {
        console.log(document.documentElement.scrollTop,window.scrollY);
        if (document.documentElement.scrollTop >= 0) {
            requestAnimationFrame(() => {
                container.classList.add("active")
                two.classList.add("active")
            })
            window.removeEventListener("scroll",scroll)
        }

    }
    function init() {
        window.addEventListener("scroll", scroll)
    }
    init()
})()