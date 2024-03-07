(function () {
    const Container5 = document.querySelector(".Container5")
    let Width = document.documentElement.clientWidth
    let Height = document.documentElement.clientHeight
    let MaxLeft = Width - Container5.offsetWidth
    let MaxTop = Height - Container5.offsetHeight
    // console.log(MaxLeft,MaxTop);
    Container5.onmousedown = function (e) {
        const styles = getComputedStyle(this)
        const x = e.pageX
        const y = e.pageY
        let left = parseFloat(styles.left)
        let top = parseFloat(styles.top)
        window.onmousemove = function (e) {
            let currentX = e.pageX
            let currentY = e.pageY
            let nowX = left + currentX - x
            let nowY = top + currentY - y
            if (nowX >= MaxLeft) {
                nowX = MaxLeft
            }
            if (nowX <= 0) {
                nowX = 0
            }
            if (nowY >= MaxTop) {
                nowY = MaxTop
            }
            if (nowY <= 0) {
                nowY = 0
            }
            Container5.style.left = nowX + 'px'
            Container5.style.top = nowY + 'px'
        }
        window.onmouseup = window.onmouseleave = function () {
            window.onmousemove = null
        }
    }
    window.addEventListener("resize", function () {
        const styles = getComputedStyle(Container5)
        let left = parseFloat(styles.left)
        let top = parseFloat(styles.top)
        newLeft = left / Width * document.documentElement.clientWidth
        newTop = top / Height * document.documentElement.clientHeight
        Container5.style.left = newLeft + 'px'
        Container5.style.top = newTop + 'px'
        Width = document.documentElement.clientWidth
        Height = document.documentElement.clientHeight
        MaxLeft = Width - Container5.offsetWidth
        MaxTop = Height - Container5.offsetHeight
    })
})()