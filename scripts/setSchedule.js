

const agendamentoSP = document.getElementById("filialSP");


const agendamentoSantos = document.getElementById("filialSantos");




// Agendamento nas tabelas de agendamento e usuário na filial de São Paulo

agendamentoSP.addEventListener("submit", (event) => {

    event.preventDefault();


    const userData = getToken("token").split(",")

    const userId = userData[0];


    db.collection("Usuario").doc(userId).get().then((doc) => {


        const newAgenda = {
            filial: "São Paulo",
            setor: agendamentoSP["section"].value,
            andar: agendamentoSP["andar"].value,
            email: doc.data().email,
            cpf: doc.data().cpf,
            data: agendamentoSP["dataSP"].value
        }

        const newAgendaUser = {
            filial: "São Paulo",
            setor: agendamentoSP["section"].value,
            andar: agendamentoSP["andar"].value,
            data: agendamentoSP["dataSP"].value
        }

        db.collection("Agendamentos").add(newAgenda)
            .then(() => {
                alert("Agendamento adicionado!")
                setTimeout(function () {
                    window.location.href = "seeSchedules.html";
                }, 2000);
            })
            .catch((error) => {
                console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
            });

        db.collection('Usuario').doc(userId).collection('agendamentos').add(newAgendaUser)

    })



})

// Agendamento nas tabelas de agendamento e usuário na filial de Santos


agendamentoSantos.addEventListener("submit", (event) => {

    event.preventDefault();

    const dados = getToken("token").split(",")

    const userId = dados[0];


    db.collection("Usuario").doc(userId).get().then((doc) => {

        const newAgenda = {
            filial: "Santos",
            setor: agendamentoSantos["section"].value,
            andar: 1,
            email: doc.data().email,
            cpf: doc.data().cpf,
            data: agendamentoSantos["dateSantos"].value
        }

        const newAgendaUser = {
            filial: "Santos",
            setor: agendamentoSantos["section"].value,
            andar: 1,
            data: "27/09/2021"
        }



        db.collection("Agendamentos").add(newAgenda)
            .then(() => {

                alert("Agendamento adicionado!")
                setTimeout(function () {
                    window.location.href = "seeSchedules.html";
                }, 2000);

            })
            .catch((error) => {
                console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
            });

        db.collection('Usuario').doc(userId).collection('agendamentos').add(newAgendaUser)


    })
})






