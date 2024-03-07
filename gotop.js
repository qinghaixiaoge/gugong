(function () {
    const middleContainer3 = document.querySelector(".middle-Container3")
    const daoContainer3 = document.querySelector(".dao-Container3")
    const backContainer3 = document.querySelector(".back-Container3")
    const Container3 = document.querySelector(".Container3")
    const Container2 = document.querySelector(".Container2")
    const height = middleContainer3.children[0].clientHeight + 2
    const length = middleContainer3.children.length
    const tanHeight = height * length
    console.log(tanHeight);
    function init() {
        scroll()
        rightPositon()
        daoContainer3.addEventListener('click', tanClick)
        backContainer3.addEventListener('click', goBack)
        window.addEventListener("scroll", scroll)
        window.addEventListener("resize", rightPositon)
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
            Container3.style.opacity = "1"
        } else {
            Container3.style.display = "none"
        }
    }
    function rightPositon(){
        Container3.style.right = `calc(50% - ${Container2.clientWidth / 2}px - 40px)`
    }
    init()
})()