function toggleElement() {
    let element = document.getElementById("001");
    let display = element.style.display;
    if (display == "block") {
        element.style.display = "none"
    } else {
        element.style.display = "block"
    }
}