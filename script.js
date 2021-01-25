function hover(element){
    element.setAttribute("src", "res/github_black.png");
}

function unhover(element){
    element.setAttribute("src", "res/github.png");
}

function hidecv(){
    let pdf = document.getElementById("pdf--container");
    pdf.style.display = "none";
    let btnProjects = document.getElementById("btnProjects");
    btnProjects.style.borderBottom = "2px solid black";
}

function showcv(){
    let pdf = document.getElementById("pdf--container");
    let btnCV = document.getElementById("btnCV");
    btnCV.style.borderBottom = "2px solid black";
    pdf.style.display = "flex";
}

function hideprojects(){
    let projects = document.getElementById("projects__container");
    projects.style.display = "none";
    let btnProjects = document.getElementById("btnProjects");
    btnProjects.style.borderBottom = "none";
}

function showprojects(){
    let projects = document.getElementById("projects__container");
    projects.style.display = "flex";
    let btnCV = document.getElementById("btnCV");
    btnCV.style.borderBottom = "none";

}

let btnCV = document.getElementById("btnCV");
let btnProjects = document.getElementById("btnProjects");
let githubImages = document.querySelectorAll(".github--img");
let gitBtns = document.querySelectorAll(".project__foreground__content__gitbtn");

btnProjects.addEventListener("click", function(){
    console.log("clicked");
    hidecv();
    showprojects();
})

btnCV.addEventListener("click", function(){
    console.log("clicked");
    showcv();
    hideprojects();
})

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