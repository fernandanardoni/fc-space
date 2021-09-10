const userView = document.querySelector('.user-view');
const agendamentoSP = document.getElementById("filialSP");
const agendamentoSantos = document.getElementById("filialSantos");

// ouvindo mudanças de login e logout
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in', user.uid)
        const userInfo = `<a href="#email"><span id="profile-email" class="black-text email">${user.email}</span></a>`;
        userView.innerHTML = userInfo;

        agendamentoSP.addEventListener("submit", (event) => {
            event.preventDefault();

            const newAgenda = {
                filial: "São Paulo",
                setor: agendamentoSP["section"].value,
                andar: agendamentoSP["andar"].value,
                email: user.email,
                // funcionario: "Roger",
            }

            db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newAgenda).then(() =>
                console.log('agendamento confirmado!')
            )

        })
    } else {
        console.log('user logged out')
    }
});