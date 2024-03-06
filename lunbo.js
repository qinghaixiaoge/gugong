//目标 1s 由1倍变成1.1倍
        //切换图片 0.5s 变成1.5倍 然后消失
        (function () {
            const imgContainer = document.querySelector(".img-container")
            const imgs = document.querySelectorAll(".Container img")
            const arrowLeft = document.querySelector(".arrow-left")
            const arrowRight = document.querySelector(".arrow-right")
            const points = document.querySelectorAll(".point")
            let index = 0
            let timer = null
            let over = false
            //剔除style
            function BeginAnimal(dom) {
                requestAnimationFrame(() => {
                    dom.style = 'none'
                })
            }
            //初始化动画
            function Animal(dom) {

                requestAnimationFrame(() => {
                    dom.style.transform = "scale(1.1)"
                    dom.style.transition = "all 1s linear"
                    dom.style.opacity = "1"
                })
            }
            //离开动画
            function DelayAnimal(dom) {
                requestAnimationFrame(() => {
                    dom.style.transform = "scale(1.5)"
                    dom.style.transition = "all 0.5s linear"
                    dom.style.opacity = "0"
                })
                over = true
                dom.addEventListener("transitionend", function () {
                    // console.log(dom.dataset.name);
                    over = false
                    BeginAnimal(dom)
                }, {
                    once: true
                })
            }
            //小点动画
            function PointAnimal(dom) {
                requestAnimationFrame(() => {
                    document.querySelector(".point.active").classList.remove("active")
                    dom.classList.add("active")
                })
            }
            //添加定时器自动切换
            function TimeDelayAnimal() {
                requestAnimationFrame(() => {
                    timer = setInterval(next, 5000)
                })
            }
            function init() {
                Animal(imgs[index])
                TimeDelayAnimal()
            }
            //手动点击清空定时器
            function Deletetimer() {
                clearInterval(timer)
                TimeDelayAnimal()
            }
            //切换下一张
            function next() {
                if (over) {
                    console.log("动画未执行完毕，禁止跳转");
                    return
                }
                Deletetimer()
                requestAnimationFrame(() => {
                    DelayAnimal(imgs[index])
                    index++
                    if (index > imgs.length - 1) {
                        index = 0
                    }
                    Animal(imgs[index])
                    PointAnimal(points[index])
                })
            }
            //切换上一张
            function prev() {
                if (over) {
                    console.log("动画未执行完毕，禁止跳转");
                    return
                }
                Deletetimer()
                requestAnimationFrame(() => {
                    DelayAnimal(imgs[index])
                    index--
                    if (index < 0) {
                        index = imgs.length - 1
                    }
                    Animal(imgs[index])
                    PointAnimal(points[index])
                })
            }
            arrowRight.addEventListener('click', next)
            arrowLeft.addEventListener('click', prev)
            points.forEach((point, i) => {
                point.addEventListener('click', function () {
                    if (over || index === i) {
                        console.log("动画未执行完毕，禁止跳转");
                        return
                    }
                    Deletetimer()
                    PointAnimal(point)
                    DelayAnimal(imgs[index])
                    index = i
                    Animal(imgs[index])
                })
            })
            init()
        })()