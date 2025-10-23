

function goAbout() {

    const btn_sobre_mi = document.querySelector(".btn-sobre-mi");

    btn_sobre_mi.addEventListener("click", (e) => {

        e.preventDefault();
        window.location.href = "about.html";
    })

}

document.addEventListener("DOMContentLoaded", goAbout());


function redidirigirToRepository(btn, url) {

    btn = document.querySelector("." + btn);
    btn.style.cursor = "pointer";


    btn.addEventListener("click", (e) => {

        window.open(url, "_blank")

    })

}


function redirigirYoutubbeAzul() {

    redidirigirToRepository("btn-repositorio-youtube-azul", "https://github.com/LuisYepes601/youtube-azul");


}

document.addEventListener("DOMContentLoaded", redirigirYoutubbeAzul());




function redidirigirToDemo(btn, url) {

    btn = document.querySelector("." + btn);
    btn.style.cursor = "pointer";


    btn.addEventListener("click", (e) => {

        window.open(url, "_blank")

    })

}


function redidirigirToDemoYoutoubeAzul() {

    redidirigirToDemo("btn-demo-youtube", "https://luisyepes601.github.io/youtube-azul/");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoYoutoubeAzul());



function redidirigirToDemoEncriptador() {

    redidirigirToRepository("btn-repositorio-encriptador", "https://github.com/LuisYepes601/Proyecto-alura.git");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoEncriptador());



function redidirigirToDemoEnvcriptador() {

    redidirigirToDemo("btn-demo-encriptador", "https://luisyepes601.github.io/Proyecto-alura/");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoEnvcriptador());

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