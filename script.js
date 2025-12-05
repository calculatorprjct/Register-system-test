// --- Регистрация ---
async function signup(event) {
    event.preventDefault();
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        alert("User registered: " + userCredential.user.email);
        document.getElementById("signup-form").reset();
    } catch (error) {
        alert(error.message);
    }
}

// --- Вход ---
async function signin(event) {
    event.preventDefault();
    const email = document.getElementById("email-signin").value;
    const password = document.getElementById("password-signin").value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        alert("Login successful: " + userCredential.user.email);
        document.getElementById("signin-form").reset();
    } catch (error) {
        alert(error.message);
    }
}

// Привязка форм
document.getElementById("signup-form").addEventListener("submit", signup);
document.getElementById("signin-form").addEventListener("submit", signin);
