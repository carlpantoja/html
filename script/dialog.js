function showDialog(dialog, button) {
    if(button.className != "close") {
        dialog.showModal()
    } else {
        dialog.close()
    }
}