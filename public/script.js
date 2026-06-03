
import {
    db,
    collection,
    addDoc
} from "./firebase.js";


// CONTROLE DOS MODAIS

const rotasModais = {

    // MENU
    linkSolucao: "modalSolucao",
    linkSeguranca: "modalSeguranca",
    linkFuncionalidades: "modalFuncionalidades",

    // HERO
    linkSolucaoHero: "modalSolucao",

    // NAVBAR
    abrirModal: "modalContato"
};

// UX - MENU MOBILE (HAMBURGUER)

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ABRIR / FECHAR MENU
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    navLinks.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
}

// ABRIR MODAIS

Object.keys(rotasModais).forEach((idBotao) => {

    const elemento = document.getElementById(idBotao);
    const idModal = rotasModais[idBotao];

    if (!elemento || !idModal) return;

    const modal = document.getElementById(idModal);

    if (!modal) return;

    elemento.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks?.classList.remove("active"); 

        modal.classList.add("ativo");
    });

});

// WHATSAPP DIRETO

const btnEspecialista =
    document.getElementById("falarEspecialista");

if (btnEspecialista) {

    btnEspecialista.addEventListener("click", function (e) {

        e.preventDefault();

        const mensagem =
`Olá! Gostaria de falar com um especialista sobre o GESPEC.`;

        const numeroWhatsApp = "5513997507042";

        const url =
`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


// FECHAR MODAL NO BOTÃO X

const botoesFechar = document.querySelectorAll(".modal-fechar");

botoesFechar.forEach((botao) => {

    botao.addEventListener("click", function () {

        const modal = botao.closest(".modal-overlay");

        if (modal) {

            modal.classList.remove("ativo");
        }

    });

});


// FECHAR MODAL CLICANDO FORA

const overlays = document.querySelectorAll(".modal-overlay");

overlays.forEach((overlay) => {

    overlay.addEventListener("click", function (e) {

        if (e.target === overlay) {

            overlay.classList.remove("ativo");
        }

    });

});

// FORMULÁRIO WHATSAPP

const formulario = document.getElementById("meuFormulario");

if (formulario) {

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        // CAPTURA DOS DADOS
        const nome = document.getElementById("nome").value;
        const escola = document.getElementById("escola").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // SALVAR FIREBASE

await addDoc(
    collection(db, "leads"),
    {
        nome: nome,
        escola: escola,
        email: email,
        mensagem: mensagem,
        data: new Date()
    }
);

        // TEXTO WHATSAPP
        const texto =
            `Olá! Gostaria de solicitar uma demonstração do GESPEC.

            Nome: ${nome}
            Instituição: ${escola}
            E-mail: ${email}
            Mensagem: ${mensagem}`;


        // NÚMERO WHATSAPP
        const numeroWhatsApp = "5513997507042";


        // FECHAR MODAL
        const modal = document.getElementById("modalContato");

        if (modal) {

            modal.classList.remove("ativo");
        }


        // LIMPAR FORMULÁRIO
        formulario.reset();


        // ESPERA ANIMAÇÃO DO MODAL
        setTimeout(function () {

            // ALERTA
            alert(
                "Solicitação enviada com sucesso! Entraremos em contato o quanto antes."
            );


        }, 300);

    });

}
