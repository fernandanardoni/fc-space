

const filialSp = document.getElementById("filialSP");


const filialSantos = document.getElementById("login-form");


// Agendamento nas tabelas de agendamento e usuário na filial de São Paulo

filialSp.addEventListener("submit", (event) => {

    event.preventDefault();


    const userData = getToken("token").split(",")

    const userId = userData[0];


    db.collection("Usuario").doc(userId).get().then((doc) => {


        const newAgenda = {
            filial: "São Paulo",
            andar: filialSp["andar"].value,
            email: doc.data().email,
            cpf: doc.data().cpf,
            data: filialSp["dateSP"].value
        }

        const newAgendaUser = {
            filial: "São Paulo",
            andar: filialSp["andar"].value,
            data: filialSp["dateSP"].value
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


filialSantos.addEventListener("submit", (event) => {

    event.preventDefault();

    const dados = getToken("token").split(",")

    const userId = dados[0];


    db.collection("Usuario").doc(userId).get().then((doc) => {

        const newAgenda = {
            filial: "Santos",
            andar: 1,
            email: doc.data().email,
            cpf: doc.data().cpf,
            data: filialSantos["dateSantos"].value
        }

        const newAgendaUser = {
            filial: "Santos",
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






