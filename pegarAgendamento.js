
// Lógica final consumindo o DB do FireBase

// function addData(horario) {
//     const calendario = horario.map( horario => `<li>${horario.data().text}</li>`)

//     document.getElementById("calendario").innerHTML += calendario;
// }


// function carregarDatas() {
//     const datasCollection = firebase.firestore(collection)("agendamentos");
//     document.getElementById("datas").innerHTML = "Carregando..."
//     datasCollection.get().then( snap => {
//         document.getElementById("datas").innerHTML = ""
//         snap.forEach(data => {
//             addData(data)
//         })
//     })
// }


// Utilizando um mock para aplicar a logica de pegar as datas agendadas

{   agendamentos = {
        "data": [
            "31/12/2020",
            "31/12/2021",
            "31/12/2022",
            "31/12/2023",
            "31/12/2024",
            "31/12/2025",
            "31/12/2026",
            "31/12/2027",
            "31/12/2028",
            "31/12/2029"
]
}
}

function carregarData() {
    const calendario = document.getElementById("datas");

    const seila =  agendamentos.data
    console.log(seila)

    const agenda = seila.map(horario => `<option value=${horario}>${horario}</option>`)
    calendario.innerHTML += agenda;
}


carregarData()







