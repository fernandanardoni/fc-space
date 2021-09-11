
const agendamentoSP = document.getElementById("filialSP");
const agendamentoSantos = document.getElementById("filialSantos");


auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('Usuario').get().then(snapshots => {
            snapshots.forEach((doc) => {
                if (doc.id == user.uid) {
                    console.log(doc.data())
                };
            });
        });

        // armazendndo agendamento SP
        agendamentoSP.addEventListener("submit", (event) => {
            event.preventDefault();

            const newSchedule = {
                filial: "São Paulo",
                andar: agendamentoSP["andar"].value,
                data: agendamentoSP["dateSP"].value,
                email: user.email,
                cpf: doc.data().cpf,
            }

            const newUserSchedule = {
                filial: "São Paulo",
                andar: agendamentoSP["andar"].value,
                data: agendamentoSP["dateSP"].value
            }

            db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newUserSchedule)
                .then(() => {
                    alert("Agendamento adicionado!")
                    window.location.href = "seeSchedules.html";
                })
                .catch(() => {
                    console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
                })

            db.collection("Agendamentos").add(newSchedule)


        });

        // armazenando agendamento Santos
        agendamentoSantos.addEventListener("submit", (event) => {
            event.preventDefault();

            const newSchedule = {
                filial: "Santos",
                andar: agendamentoSantos["andar"].value,
                data: agendamentoSantos["dateSantos"].value,
                email: user.email,
                cpf: doc.data().cpf,
            }

            const newUserSchedule = {
                filial: "Santos",
                andar: agendamentoSP["andar"].value,
                data: agendamentoSP["dateSantos"].value
            }

            db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newUserSchedule)
                .then(() => {
                    alert("Agendamento adicionado!")
                    window.location.href = "seeSchedules.html";
                })
                .catch(() => {
                    console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
                })

            db.collection("Agendamentos").add(newSchedule)

        });
    } else {
        console.log('user logged out')
    }
});

