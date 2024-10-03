function HelloWorld(){
    alert("Hello")
}

const dropbuttons = document.querySelectorAll(".toggle-check");
const dropmenu = document.getElementById("menu-toggle");
const menu = document.getElementById("main-nav");

dropmenu.addEventListener('change', function dropmenulist(){
    if (dropmenu.checked){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
});

dropbuttons.forEach(dropbutton => {
    dropbutton.addEventListener('change', function changedrop() {
        const span = this.nextElementSibling;
        const text = this.parentElement.nextElementSibling;

        if (this.checked){
            span.textContent = "-";
            text.style.display = "block";
        }
        else{
            span.textContent = "+";
            text.style.display = "none";
        }
    });
});

changedrop();

