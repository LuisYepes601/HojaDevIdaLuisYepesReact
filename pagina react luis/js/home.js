


function goAbout() {

    const btn_sobre_mi = document.querySelectorAll(".btn-sobre-mi");


    if (btn_sobre_mi.length > -1) {

        btn_sobre_mi.forEach(btn_sobre_mi => {

            btn_sobre_mi.addEventListener("click", (e) => {

                e.preventDefault();
                window.location.href = "about.html";

            })
        });

    }



}

document.addEventListener("DOMContentLoaded", goAbout())

function mostrarSkills() {


    const btn_skills = document.querySelectorAll(".button-show-skills");

    if (btn_skills.length > -1) {

        btn_skills.forEach(btn_skill => {
            btn_skill.addEventListener("click", (e) => {

                e.preventDefault();
                window.location.href = "#skills";
            })
        });
    }

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

