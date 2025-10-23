

function GoHome() {
    const btn_home = document.querySelector(".btn-home");

    btn_home.addEventListener("click", (e) => {

        e.preventDefault();
        window.location.href = "index.html";

    })
}

document.addEventListener("DOMContentLoaded", GoHome())

function mostrarSkills() {


    const btn_skills = document.querySelector(".button-show-skills");

    console.log(btn_skills);


    btn_skills.addEventListener("click", () => {

        window.location.href = "#skills";
    })

}

document.addEventListener("DOMContentLoaded", mostrarSkills());


function goProyectos() {

    const ver_mis_proyectos = document.querySelectorAll(".seccion-proyectos");
    if (ver_mis_proyectos.length > -1) {

        console.log(ver_mis_proyectos);

        ver_mis_proyectos.forEach(btn => {

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "proyectos.html";
            })
        });

    }
}


document.addEventListener("DOMContentLoaded", goProyectos());



