const agendamentoSP = document.getElementById("filialSP");
const agendamentoSantos = document.getElementById("filialSantos");


export async function retornaVagasSP() {

    // const num = Math.floor(Math.random() * 111);
    // return num;

    const dataSelecionada = document.getElementById("data");
    const _dataSelecionada = dataSelecionada.value.split(" - ")[1];
    const data =  _dataSelecionada ? _dataSelecionada : "";

    let value = 0

    await db.collection("Agendamentos").get().then(querySnapshot => {
        
        querySnapshot.docs.forEach(doc => {   
            
            if (doc.data().data == data) {
                return value++;
            };


        })
    })
    .then(()=> {
        
        return value;
    }).catch(error => alert("Ocorreu um erro: ", error))
    
     
    return  value;
}

export async function retornaVagasSantos() {

    // const num = Math.floor(Math.random() * 111);
    // return num;
    const dataSelecionada = document.getElementById("data2");
    const _dataSelecionada = dataSelecionada.value.split(" - ")[1];
    const data = await _dataSelecionada ? _dataSelecionada : "";
    
    let value = 0
    await db.collection("Agendamentos").get().then(querySnapshot => {
        
        querySnapshot.docs.forEach(doc => {   
            
            if (doc.data().data == data) {
                
                return value++;
            };


        })
    })
    .then(()=> {
        
        return value;
    }).catch(error => alert("Ocorreu um erro: ", error))
   
    return  value;
}



auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('Usuario').get().then(snapshots => {
            snapshots.forEach((doc) => {
                if (doc.id == user.uid) {

                    // armazendndo agendamento SP
                    agendamentoSP.addEventListener("submit", (event) => {
                        event.preventDefault();

                        const data = agendamentoSP["dateSP"].value.split(" - ")[1];
                        const andar = document.querySelector('input[name="andar"]:checked').value;

                        const newSchedule = {
                            filial: "São Paulo",
                            andar: andar,
                            data: data,
                            email: user.email,
                            cpf: doc.data().cpf,
                        }

                        const newUserSchedule = {
                            filial: "São Paulo",
                            andar: andar,
                            data: data
                        }

                        let valor = 0
                        const getDates = () => db.collection("Agendamentos").get().then(querySnapshot => {
                            querySnapshot.forEach(doc => {

                                if (doc.data().data == data) {
                                    return valor++
                                };
                            })
                        })

                        getDates().then(
                            () => {

                                if (valor >= 240) {
                                    M.toast({ html: 'Infelizmente, não tem mais vagas disponíveis na data solicitada. Por favor, escolha uma nova data!' })

                                } else {
                                    db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newUserSchedule)
                                        .then(() => {
                                            setTimeout( () => {
                                                window.location.href = "seeSchedules.html";
                                            }, 2000)
                                        })
                                        .catch(() => {
                                            console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
                                        })

                                    db.collection("Agendamentos").add(newSchedule)
                                    return M.toast({ html: 'Agendamento adicionado!' })
                                }

                            }
                        );
                    });

                    // armazenando agendamento Santos

                    agendamentoSantos.addEventListener("submit", (event) => {
                        event.preventDefault();


                        const data = agendamentoSantos["dateSantos"].value.split(" - ")[1]


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

                        let valor = 0
                        const getDates = () => db.collection("Agendamentos").get().then(querySnapshot => {
                            querySnapshot.forEach(doc => {

                                if (doc.data().data == data) {
                                    return valor++
                                };

                            })
                        });


                        getDates().then(
                            () => {

                                if (valor >= 40) {
                                    M.toast({ html: 'Infelizmente, não tem mais vagas disponíveis na data solicitada. Por favor, escolha uma nova data!' })

                                } else {
                                    db.collection('Usuario').doc(user.uid).collection('agendamentos').add(newUserSchedule)
                                        .then(() => {
                                            setTimeout( () => {
                                                window.location.href = "seeSchedules.html";
                                            }, 2000)
                                        })
                                        .catch(() => {
                                            console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
                                        })

                                    db.collection("Agendamentos").add(newSchedule)
                                    return M.toast({ html: 'Agendamento adicionado!' })
                                }
                            }
                        );




                    });
                };
            });
        });



    } else {
        window.location = "index.html";
    }
});