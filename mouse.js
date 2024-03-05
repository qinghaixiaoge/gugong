(function () {
    const lis = document.querySelectorAll(".right-Container2 li")
    const tanContainer2s = document.querySelectorAll(".tan-Container2")
    // 鼠标进入事件
    function mouseEnter(e) {
        const tanContainer2 = e.target.querySelector(".tan-Container2")
        const rect = this.getBoundingClientRect()
        const theta = Math.atan2(rect.height, rect.width)
        const x = e.offsetX - rect.width / 2
        const y = rect.height / 2 - e.offsetY
        const angle = Math.atan2(y, x)
        if (angle < theta && angle >= -theta) {
            requestAnimationFrame(() => {
                tanContainer2.style.left = rect.width + 'px'
                tanContainer2.style.top = '0px'
                tanContainer2.style.transition = '0s';
                requestAnimationFrame(() => {
                    tanContainer2.style.transition = '0.3s';
                    tanContainer2.style.left = '0px'
                    tanContainer2.style.top = '0px'
                })
            })
            console.log("right");
        } else if (angle >= theta && angle < Math.PI - theta) {
            requestAnimationFrame(() => {
                tanContainer2.style.left = '0px'
                tanContainer2.style.top = -rect.height + 'px'
                tanContainer2.style.transition = '0s';
                requestAnimationFrame(() => {
                    tanContainer2.style.transition = '0.3s';
                    tanContainer2.style.left = '0px'
                    tanContainer2.style.top = '0px'
                })
            })
            console.log("top");
        } else if (angle >= Math.PI - theta || angle < -Math.PI + theta) {
            requestAnimationFrame(() => {
                tanContainer2.style.left = -rect.width + 'px'
                tanContainer2.style.top = '0px'
                tanContainer2.style.transition = '0s';
                requestAnimationFrame(() => {
                    tanContainer2.style.transition = '0.3s';
                    tanContainer2.style.left = '0px'
                    tanContainer2.style.top = '0px'
                })
            })
            console.log("left");
        } else {
            requestAnimationFrame(() => {
                tanContainer2.style.left = '0px'
                tanContainer2.style.top = rect.height + 'px'
                tanContainer2.style.transition = '0s';
                requestAnimationFrame(() => {
                    tanContainer2.style.transition = '0.3s';
                    tanContainer2.style.left = '0px'
                    tanContainer2.style.top = '0px'
                })
            })
            console.log("bottom");
        }
    }
    // 鼠标离开事件
    function mouseLeave(e) {
        const tanContainer2 = e.target.querySelector(".tan-Container2")
        const rect = this.getBoundingClientRect()
        const theta = Math.atan2(rect.height, rect.width)
        const x = e.offsetX - rect.width / 2
        const y = rect.height / 2 - e.offsetY
        const angle = Math.atan2(y, x)
        if (angle < theta && angle >= -theta) {
            console.log("right leave");
            requestAnimationFrame(() => {
                tanContainer2.style.left = rect.width + 'px'
                tanContainer2.style.top = '0px'
            })
        } else if (angle >= theta && angle < Math.PI - theta) {
            requestAnimationFrame(() => {
                tanContainer2.style.left = '0px'
                tanContainer2.style.top = -rect.height + 'px'
            })
            console.log("top leave");
        } else if (angle >= Math.PI - theta || angle < -Math.PI + theta) {
            requestAnimationFrame(() => {
                tanContainer2.style.left = -rect.width + 'px'
                tanContainer2.style.top = '0px'
            })
            console.log("left leave");
        } else {
            requestAnimationFrame(() => {
                tanContainer2.style.left = '0px'
                tanContainer2.style.top = rect.height + 'px'
            })
            console.log("bottom leave");
        }
    }
    function setTanPostion() {
        tanContainer2s.forEach(tanContainer2=>{
            tanContainer2.style = ""
        })
    }
    function init() {
        lis.forEach(li => {
            li.addEventListener("mouseenter", mouseEnter)
            li.addEventListener("mouseleave", mouseLeave)
        })
        window.addEventListener("resize", setTanPostion)
    }
    init()
})()