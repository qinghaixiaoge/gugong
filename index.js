(function () {
    const iconContainer = document.querySelector(".icon-container")
    const menuLis = document.querySelectorAll(".menu-container li")
    const tanContainers = document.querySelectorAll(".tan-container")
    iconContainer.onmouseenter = function () {
        const menuLiActive = document.querySelector(".menu-container li.active")
        const tanActive = document.querySelector(".tan-container.active")
        if (menuLiActive) {
            menuLiActive.classList.remove("active")
        }
        if (tanActive) {
            tanActive.classList.remove("active")
        }
    }
    menuLis.forEach((menuLi, index) => {
        menuLi.onmouseenter = function (e) {
            const menuLiActive = document.querySelector(".menu-container li.active")
            const tanActive = document.querySelector(".tan-container.active")
            if (menuLiActive) {
                menuLiActive.classList.remove("active")
            }
            if (tanActive) {
                tanActive.classList.remove("active")
            }
            if (index === 0) {
                return
            }
            const offsetLeft = menuLi.offsetLeft - (tanContainers[index].children.length * tanContainers[index].children[0].offsetWidth) / 2 + menuLi.offsetWidth / 2
            this.classList.add("active")
            tanContainers[index].classList.add("active")
            tanContainers[index].style.paddingLeft = offsetLeft + 'px'
            tanContainers[index].onmouseleave = function () {
                this.classList.remove("active")
                menuLi.classList.remove("active")
            }
        }
    })
    tanBtn.onclick = function(){
        tanBox.style.display = 'flex'
        tanBox.style.zIndex = '99'
        tanBox.style.opacity = '1'
    }
    closetanBox.onclick = function(){
        tanBox.style.display = 'none'
        tanBox.style.zIndex = '-1'
        tanBox.style.opacity = '0'
    }
})()