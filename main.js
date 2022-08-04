// JAVASCRIPT FILE 

// verificar se JS está conectado
console.log ('on');

function displayHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProjects() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "block";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject2() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "block";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject3() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "block";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject4() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "block";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject5() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "block";
    document.getElementById("project-6").style.display = "none";
    $(window).scrollTop(0);
}

function displayProject6() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "block";
    $(window).scrollTop(0);
}

function topFunction() {
    $(window).scrollTop(0);
}
