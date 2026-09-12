const imageChosen = document.getElementById("image-chosen")
const fileImage = document.getElementById("file-img")
const visibility = document.getElementById("visibility")
const zoomPlus = document.querySelector(".fa-search-plus")
const zoomMinus = document.querySelector(".fa-search-minus")
const contentVisible = document.querySelector(".fa-eye")
const contentHide = document.querySelector(".fa-eye-slash")
const rotate = document.querySelector(".fa-undo")

fileImage.onchange = function() {
    imageChosen.src = URL.createObjectURL(fileImage.files[0])
}

contentHide.addEventListener("click", () => {
    visibility.style.background = "linear-gradient(to bottom right, rgb(151,151,151,0.8), rgb(151,151,151,0.8))"
    visibility.style.backdropFilter = "blur(1rem)"
})

contentVisible.addEventListener("click", () => {
    visibility.style.background = "transparent"
    visibility.style.backdropFilter = "none"
})

zoomPlus.addEventListener("click", () => {
    switch(imageChosen.style.width) {
        case "50%":
            imageChosen.style.width = "70%"
            break
        default:
            imageChosen.style.width = "100%"
            break
    }
})

zoomMinus.addEventListener("click", () => {
    switch(imageChosen.style.width) {
        case "100%":
            imageChosen.style.width = "70%"
            imageChosen.style.height = "70%"
            break
        default:
            imageChosen.style.width = "50%"
            imageChosen.style.height = "50%"
            break
    }
})

rotate.addEventListener("click", () => {
    switch(imageChosen.style.transform) {
        case "rotate(90deg)":
            imageChosen.style.transform = "rotate(180deg)"
            break
        case "rotate(180deg)":
            imageChosen.style.transform = "rotate(270deg)"
            break
        case "rotate(270deg)":
            imageChosen.style.transform = "rotate(360deg)"
            break
        default:
            imageChosen.style.transform = "rotate(90deg)"
            break
    }
})