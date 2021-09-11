const userView = document.querySelector('.user-view');
const agendamentoSP = document.getElementById("filialSP");
const agendamentoSantos = document.getElementById("filialSantos");

// ouvindo mudanças de login e logout
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('Usuario').get().then(snapshots => {
            snapshots.forEach((doc) => {
                if (doc.id == user.uid) {
                    console.log(doc.data())
                    const userInfo = `
                        <a href="#email"><span id="profile-email" class="black-text email">${doc.data().nome || doc.data().name}</span></a>
                        <a href="#email"><span id="profile-email" class="black-text email">${doc.data().email}</span></a>`;
                    userView.innerHTML = userInfo;
                };
            });
        });


        agendamentoSP.addEventListener("submit", (event) => {
            event.preventDefault();

            const newAgenda = {
                filial: "São Paulo",
                andar: agendamentoSP["andar"].value,
                data: agendamentoSP["data"].value,
                email: user.email,
            }

            db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newAgenda).then(() =>
                console.log('agendamento confirmado!')
            )

        })
    } else {
        console.log('user logged out')
    }
});