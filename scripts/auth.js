const signUpData = document.querySelector('#signup-form');

signUpData.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        name: signUpData['first-name'].value,
        lastName: signUpData['last-name'].value,
        email: signUpData['signup-email'].value,
        password: signUpData['signup-password'].value
    };

    if(user.email.includes("@fcamara.com.br")){
        
        return auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
                alert('Usuário cadastrado!')
                signUpData.reset();
        });
    } else {
        console.log("Digite um email válido!")
    }

});

const loginData = document.querySelector('#login-form');

loginData.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        email: loginData['login-email'].value,
        password: loginData['login-password'].value,
    };

    auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        loginData.reset();
        console.log('user logged in')
    })
});