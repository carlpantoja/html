let lists = document.getElementsByClassName("list")
let doBox = document.getElementById("do")
let doingBox = document.getElementById("doing")
let didBox = document.getElementById("did")

Array.from(lists).forEach(function(list) {

    list.addEventListener("dragstart", function(e) {
        let selected = e.target

        doBox.addEventListener("dragover", function(e) {
            e.preventDefault()
        })

        doBox.addEventListener("drop", function(e) {
            if(selected != null) {
                doBox.appendChild(selected)
                selected = null
            }
        })

        doingBox.addEventListener("dragover", function(e) {
            e.preventDefault()
        })

        doingBox.addEventListener("drop", function(e) {
            if(selected != null) {
                doingBox.appendChild(selected)
                selected = null
            }
        })

        didBox.addEventListener("dragover", function(e) {
            e.preventDefault()
        })

        didBox.addEventListener("drop", function(e) {
            if(selected != null) {
                didBox.appendChild(selected)
                selected = null
            }
        })
    })
})