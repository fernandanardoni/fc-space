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
        console.log('user logged in', user)
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
        name: signUpData['first-name'].value,
        lastName: signUpData['last-name'].value,
        email: signUpData['signup-email'].value,
        password: signUpData['signup-password'].value
    };

    auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
        alert('Usuário cadastrado!')
        signUpData.reset();
    });
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

