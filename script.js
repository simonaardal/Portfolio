function hover(element){
    element.setAttribute("src", "res/github_black.png");
}

function unhover(element){
    element.setAttribute("src", "res/github.png");
}

let githubImages = document.querySelectorAll(".github--img");
let gitBtns = document.querySelectorAll(".project__foreground__content__gitbtn");

for(let i = 0; i < gitBtns.length; i++){
    gitBtns[i].addEventListener("mouseover", function(){
        hover(githubImages[i]);
    })
}

for(let i = 0; i < gitBtns.length; i++){
    gitBtns[i].addEventListener("mouseout", function(){
        unhover(githubImages[i]);
    })
}