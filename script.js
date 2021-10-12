const panels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
panels.forEach((panel) => {
    panel.addEventListener("click",function(){
        active = document.querySelector(".active");
        panel.className = "panel active";
        active.className = "panel";
    })
})