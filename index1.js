(function () {
    const arrowContainer = document.querySelector(".arrowContainer")
    const imgs = document.querySelectorAll(".Container img")
    console.log(imgs);
    const icons = document.querySelectorAll(".icon")
    let currentIndex = 0
    let timer = null
    let isGo = false
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'hidden') {
          // 页面不可见，停止轮播图切换
          clearInterval(timer);
        } else {
          // 页面可见，重新启动轮播图切换
          timer = setInterval(() => {
            runAnimation15("right")
            runAnimation11()
        }, 5000)
        }
      });
    const init = () => {
        imgs[0].clientHeight
        // console.log(6666);
        imgs[currentIndex].style.opacity = '1'
        /* 初始化 绑定各类事件函数 */
        initEvent()
        runAnimation11()
        timeGo()
        console.log(currentIndex);
    }
    /* 时间过渡函数 */
    function timeGo() {
        clearInterval(timer)
        timer = setInterval(() => {
            runAnimation15("right")
            runAnimation11()
        }, 5000)
    }
    /* 下标点击事件 */
    function onIconClick() {
        icons.forEach((icon, index) => {
            icon.onclick = function () {
                console.log(isGo);
                if (!isGo || currentIndex === index) {
                    console.log("back");
                    return
                }
                console.log(index);
                runAnimation15()
                currentIndex = index
                runAnimation11()
                document.querySelector(".icon.active").classList.remove("active")
                icons[currentIndex].classList.add("active")
                timeGo()
            }
        })
    }
    function initEvent() {
        arrowContainer.addEventListener('click', onArrowContainerClick)
        onIconClick()
    }
    /* 箭头点击事件 */
    function onArrowContainerClick(e) {
        // if (e.target.classList.contains("arrow-left")) {
        //     console.log("left");
        // } else {
        //     console.log("right");
        // }
        runAnimation15(e.target.classList.contains("arrow-left") ? "left" : "right")
        runAnimation11()
        timeGo()
    }
    /* 瞬间放大1.5倍的动画函数 */
    function runAnimation15(direction) {
        imgs[currentIndex].style.opacity = '0'
        imgs[currentIndex].style.transform = 'scale(1.5)'
        imgs[currentIndex].style.transition = 'all 0.8s ease'
        isGo = false
        imgs[currentIndex].addEventListener('transitionend', function () {
            this.style = ''
            // 避免动画还没执行完，又切换回来导致白屏
            isGo = true
        }, {
            once: true
        })
        if (direction === "left") {
            currentIndex--
        } else {
            currentIndex++
        }
        if (currentIndex >= imgs.length) {
            currentIndex = 0
        }
        if (currentIndex < 0) {
            currentIndex = imgs.length - 1
        }
        document.querySelector(".icon.active").classList.remove("active")
        console.log(currentIndex);
        icons[currentIndex].classList.add("active")
    }
    /* 放大1.1倍的动画函数 */
    function runAnimation11() {
        imgs[currentIndex].style.opacity = '1'
        imgs[currentIndex].style.transform = 'scale(1.1)'
        imgs[currentIndex].style.transition = 'transform 4s .6s linear,opacity 1s linear'
    }

    init()
})()