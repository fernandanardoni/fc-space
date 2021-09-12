
const agendamentoSP = document.getElementById("filialSP");
const agendamentoSantos = document.getElementById("filialSantos");




auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('Usuario').get().then(snapshots => {
            snapshots.forEach((doc) => {
                if (doc.id == user.uid) {
                    
                    // armazendndo agendamento SP
                    agendamentoSP.addEventListener("submit", (event) => {
                        event.preventDefault();

                        const data = configDate(agendamentoSP["dateSP"].value);

                        const newSchedule = {
                            filial: "São Paulo",
                            andar: agendamentoSP["andar"].value,
                            data: data,
                            email: user.email,
                            cpf: doc.data().cpf,
                        }

                        const newUserSchedule = {
                            filial: "São Paulo",
                            andar: agendamentoSP["andar"].value,
                            data: data
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


                        const data = configDate(agendamentoSantos["dateSantos"].value)

                        const newSchedule = {
                            filial: "Santos",
                            andar: 1,
                            data: data,
                            email: doc.data().email,
                            cpf: doc.data().cpf,
                        }

                        const newUserSchedule = {
                            filial: "Santos",
                            andar: 1,
                            data: data
                        }

                    //    const dados = () => db.collection("Agendamentos").where("data", "===", data).then(doc=> console.log(doc.data()))
                    //    dados()


                    
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
                };
            });
        });



    } else {
        window.location = "index.html";
        console.log('user logged out')
    }
});

