function updateHeaderUser() {
    const display = document.getElementById("userNameDisplay");
    const loginBtn = document.getElementById("loginBtn");

    const user = JSON.parse(localStorage.getItem("noteflow_user"));

    if (user?.name) {
        display.textContent = user.name;
        if (loginBtn) loginBtn.style.display = "none"; // esconde "Create Account"
    } else {
        display.textContent = "";
        if (loginBtn) loginBtn.style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", updateHeaderUser);

// 🔥 KEYBIND: Ctrl + Shift + R para resetar conta
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "R") {
        if (confirm("Resetar conta do NoteFlow?")) {
            localStorage.removeItem("noteflow_user");
            alert("Conta removida.");
            location.reload();
        }
    }
});

// pegar nome e email exatamente como foram salvos pelo formulário
const userName = localStorage.getItem("noteflow_user_name");
const userEmail = localStorage.getItem("noteflow_user_email");
const usercont = localStorage.getItem("noteflow_user_cont");

// mostrar na tela
const title = document.getElementById("configUserTitle");
const email = document.getElementById("configUserEmail");
const cont = document.getElementById("configUsercont");

if (title && userName) {
    title.textContent = `User: ${userName}`;
}

if (email && userEmail) {
    email.textContent = `Email: ${userEmail}`;
}
if (cont && usercont) {
    cont.textContent = `Contact: ${usercont}`;
}

const resetBtn = document.getElementById("resetCacheBtn");

if (resetBtn) {
    resetBtn.onclick = () => {
        if (confirm("Resetar TODO o NoteFlow? Isso apagará notas, matérias, metas, calendário e conta.")) {
            
            // apagar apenas dados do NoteFlow
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
