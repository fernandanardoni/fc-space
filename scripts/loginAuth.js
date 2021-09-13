function login() {
    window.location = "createSchedule.html";
}


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

    }).catch(() => M.toast({ html: 'Usuário e/ou senha incorretos!' })) 

});
