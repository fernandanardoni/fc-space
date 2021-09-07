// funções de redirecionamento
function login() {
    window.location = "createSchedule.html";
}

function logout() {
    window.location = "index.html";
}

function mySchedules() {
    window.location = "seeSchedules.html"
}

const userView = document.querySelector('.user-view');

// ouvindo mudanças de login e logout
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in', user.email)
        const userInfo = `<a href="#email"><span id="profile-email" class="black-text email">${user.email}</span></a>`;
        userView.innerHTML = userInfo;
    } else {
        console.log('user logged out')
    }
})

// registrando usuário
const signUpData = document.querySelector('#signup-form');

signUpData.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        nome: signUpData['name'].value,
        email: signUpData['signup-email'].value,
        cpf: signUpData['cpf'].value.replace(/\.|- |,/g, ""),
        rg: signUpData['rg'].value.replace(/\.|-|,/g, ""),
        senha: signUpData['signup-password'].value
    };

    if (!user.email.includes("@fcamara.com.br")) {

        M.toast({ html: 'Digite um endereço de e-mail válido!' })

    } else if (!validateCPF(user.cpf)){
        M.toast({ html: 'Digite um endereço de CPF válido!' })
    }
    auth.createUserWithEmailAndPassword(user.email, user.senha).then((cred) => {
        return db.collection('Usuario').doc(cred.user.uid).set(user);
    });
    M.toast({ html: 'Usuário cadastrado com sucesso! Faça seu login.' })
    signUpData.reset();
});

// logando usuário
const loginData = document.querySelector('#login-form');

loginData.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        email: loginData['login-email'].value,
        password: loginData['login-password'].value,
    };

    auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        login();
        loginData.reset();

    })
});

// deslogando usuário
const logOut = document.querySelector('#logout-button');

logOut.addEventListener('click', (e) => {
    // e.preventDefault;
    auth.signOut().then(() => {
        logout();
    })
});

