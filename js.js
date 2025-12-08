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

