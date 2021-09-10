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

   
      auth.signInWithEmailAndPassword(user.email, user.password).then((data) => {

        const token = {
            id: data.user.uid,
            email: data.user.email,
        }
        setToken(token)

         login();
         loginData.reset();
    })   

});
