const signUpData = document.querySelector('#signup-form');

signUpData.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        nome: signUpData['name'].value,
        email: signUpData['signup-email'].value,
        cpf: signUpData['cpf'].value.replace(/\.|- |,/g, ""),
        senha: hashPassword.hash(signUpData['signup-password'].value)
    };
    
    if (!user.email.includes("@fcamara.com.br")) {
        
        M.toast({ html: 'Digite um endereço de e-mail válido!' })
        
    } else if (!validateCPF(user.cpf)) {

        M.toast({ html: 'Digite um CPF válido!' })

    } else {
        auth.createUserWithEmailAndPassword(user.email, user.senha).then((cred) => {
            M.toast({ html: 'Usuário cadastrado com sucesso! Faça seu login.' })
            signUpData.reset();
            return db.collection('Usuario').doc(cred.user.uid).set(user);
        });
     }

});