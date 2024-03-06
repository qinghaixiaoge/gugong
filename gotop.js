(function () {
    const middleContainer3 = document.querySelector(".middle-Container3")
    const daoContainer3 = document.querySelector(".dao-Container3")
    const backContainer3 = document.querySelector(".back-Container3")
    const Container3 = document.querySelector(".Container3")
    const height = middleContainer3.children[0].clientHeight + 2
    const length = middleContainer3.children.length
    const tanHeight = height * length
    function init() {
        scroll()
        daoContainer3.addEventListener('click', tanClick)
        backContainer3.addEventListener('click', goBack)
        window.addEventListener("scroll", scroll)
    }
    // 点击弹出事件
    function tanClick() {
        if (this.getAttribute("data") === "open") {
            middleContainer3.style.height = tanHeight + 'px'
            this.setAttribute("data", "close")
            this.innerText = "X"
        } else {
            middleContainer3.style.height = "0px"
            this.setAttribute("data", "open")
            this.innerText = "导"
        }
    }
    // 回到顶部
    function goBack() {
        document.documentElement.scrollTop = 0
    }
    // 滚动
    function scroll() {
        if (document.documentElement.scrollTop >= document.documentElement.clientHeight) {
            Container3.style.display = "flex"
        } else {
            Container3.style.display = "none"
        }
    }
    init()
})()