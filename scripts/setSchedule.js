

const agendamentoSP = document.getElementById("filialSP");


const agendamentoSantos = document.getElementById("filialSantos");

const userData = getToken("token").split(",")

const email = userData[1];
const userId = userData[0];





const identificador = () => db.collection("Usuario")?.doc(userId)?.get().then((doc) => { 
    if (doc.exists)
    return doc.data() })
    
console.log('identificador', identificador)

 console.log(userId === "410uw96u3SeE1pfLgJlBjWcny2o1") 


    // `${Object.keys(doc.data())}`
// login
// setToken([data.user.email, data.user.uid]);

agendamentoSP.addEventListener("submit", (event) => {

    event.preventDefault();



    const newAgenda = {
        filial: "São Paulo",
        setor: agendamentoSP["section"].value,
        andar: agendamentoSP["andar"].value,
        email: identificador.email,
        funcionario: "Roger",
        cpf: identificador.cpf,
        data: agendamentoSP["data"].value
    }

    console.log('newAgenda', newAgenda)

    
    db.collection("Agendamentos").add(newAgenda)
    .then(() => {
        alert("Agendamento adicionado!")
        setTimeout(function() {
            window.location.href = "seeSchedules.html";
        }, 2000);
    })
    .catch((error) => {
        console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
    });

})


agendamentoSantos.addEventListener("submit", (event) => {

    event.preventDefault();

    const dados = getToken("token").split(",")

    const newAgenda = {
        filial: "Santos",
        setor: agendamentoSantos["section"].value,
        andar: 1,
        email: dados[0],
        funcionario: "Roger",
        cpf: "00586712003",
        data: agendamentoSantos["date"].value
    }

 

    db.collection("Agendamentos").add(newAgenda)
    .then(() => {

        alert("Agendamento adicionado!")
        setTimeout(function() {
            window.location.href = "seeSchedules.html";
        }, 2000);

    })
    .catch((error) => {
        console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
    });

})


