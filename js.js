function updateHeaderUser() {
    const display = document.getElementById("userNameDisplay");
    const loginBtn = document.getElementById("loginBtn");

    const user = JSON.parse(localStorage.getItem("noteflow_user"));

    if (user?.name) {
        display.textContent = user.name;
        if (loginBtn) loginBtn.style.display = "none";
    } else {
        display.textContent = "";
        if (loginBtn) loginBtn.style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", updateHeaderUser);

// RESET rápido
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "R") {
        if (confirm("Resetar conta do NoteFlow?")) {
            localStorage.removeItem("noteflow_user");
            alert("Conta removida.");
            location.reload();
        }
    }
});

// =============== PEGAR USUÁRIO CORRETAMENTE ===============
const fullUser = JSON.parse(localStorage.getItem("noteflow_user"));

const title = document.getElementById("configUserTitle");
const email = document.getElementById("configUserEmail");
const cont = document.getElementById("configUsercont");

if (fullUser) {
    if (title) title.textContent = `User: ${fullUser.name}`;
    if (email) email.textContent = `Email: ${fullUser.email}`;
    if (cont) cont.textContent = `Contact: ${fullUser.cont}`;
}

// =============== RESET COMPLETO ===============
const resetBtn = document.getElementById("resetCacheBtn");

if (resetBtn) {
    resetBtn.onclick = () => {
        if (confirm("Resetar TODO o NoteFlow? Isso apagará notas, matérias, metas, calendário e conta.")) {
            
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith("noteflow_")) {
                    localStorage.removeItem(key);
                }
            });

            alert("Todo o cache do NoteFlow foi apagado!");
            location.reload();
        }
    };
}
