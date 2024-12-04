
function openForm() {
    document.getElementById("form-section").style.display = "block";
    window.scrollTo({
        top: document.getElementById("form-section").offsetTop,
        behavior: "smooth"
    });
}
