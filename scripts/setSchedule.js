
// const agendamentoSP = document.getElementById("filialSP");

// const agendamentoSantos = document.getElementById("filialSantos");

// agendamentoSP.addEventListener("submit", (event) => {

//     event.preventDefault();

//     const newAgenda = {
//         filial: "São Paulo",
//         setor: agendamentoSP["section"].value,
//         andar: agendamentoSP["andar"].value,
//         // email: "roger@fcamara.com.br",
//         // funcionario: "Roger",
//         // cpf: "00586712003",
//         // data: agendamentoSP["data"].value
//     }

//     const userId = db.collection('Usuario').doc(user.uid)
//     console.log(userId)




//     // db.collection("Agendamentos").add(newAgenda)
//     // .then(() => {
//     //     alert("Agendamento adicionado!")
//     //     setTimeout(function() {
//     //         window.location.href = "seeSchedules.html";
//     //     }, 2000);
//     // })
//     // .catch((error) => {
//     //     console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
//     // });

// })

// agendamentoSantos.addEventListener("submit", (event) => {

//     event.preventDefault();

//     const newAgenda = {
//         filial: "Santos",
//         setor: agendamentoSantos["section"].value,
//         andar: 1,
//         email: "roger@fcamara.com.br",
//         funcionario: "Roger",
//         cpf: "00586712003",
//         data: agendamentoSantos["date"].value
//     }



//     db.collection("Agendamentos").add(newAgenda)
//         .then(() => {

//             alert("Agendamento adicionado!")
//             setTimeout(function () {
//                 window.location.href = "seeSchedules.html";
//             }, 2000);

//         })
//         .catch((error) => {
//             console.error("Ocorreu um erro ao adicionar o agendamento: ", error);
//         });

// })


