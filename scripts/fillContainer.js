// // Preencher os agendamentos

// var saoPauloUnit = document.getElementById('sao-paulo');

// var santosUnit = document.getElementById('santos');

// const scheduleData = db.collection('Agendamentos');

// function fillScheduleList() {
//     scheduleData.get().then((item) => {
//         santosUnit.innerHTML = '<h2>Unidade Santos</h2>';

//         const scheduleList = item.docs.reduce((acc, doc) => {
//             const { funcionario, data, setor, filial } = doc.data();

//             if (filial == 'Santos') {
//                 acc += `
//                 <div class="schedule-container">
//                 <div class="info">
//                 <p class="user">${funcionario}</p>

//                 <div class="schedule-day">
//                 <p class="date">${data}</p>
//                 </div>

//                 <p class="sector">${filial}</p>
//                 </div>

//                 <div class="actions">
//                 <button class = "delete" id="${doc.id}" type="submit" onclick="deleteSchedule(this.id)">
//                 Apagar
//                 </button>

//                 </div>
//                 </div>
//                 `;
//             }

//             return acc;
//         }, '');

//         if (scheduleList) {
//             santosUnit.innerHTML += scheduleList;
//         } else {
//             santosUnit.innerHTML += 'Sem agendamentos para esta unidade';
//         }
//     });

//     scheduleData.get().then((item) => {
//         const scheduleList = item.docs.reduce((acc, doc) => {
//             saoPauloUnit.innerHTML = '<h2>Unidade São Paulo</h2>';

//             const { funcionario, data, setor, filial } = doc.data();

//             if (filial == 'São Paulo') {
//                 acc += `
//                 <div class="schedule-container">
//                <div class="info">
//                 <p class="user">${funcionario}</p>

//                 <div class="schedule-day">
//                 <p class="date">${data}</p>
//                 </div>

//                 <p class="sector">${filial}</p>
//                 </div>

//                 <div class="actions">
//                 <button class = "delete" id="${doc.id}" type="submit" onclick="deleteSchedule(this.id)">
//                 Apagar
//                 </button>

//                 </div>
//                 </div>
//                 `;
//             }

//             return acc;
//         }, '');

//         if (scheduleList) {
//             saoPauloUnit.innerHTML += scheduleList;
//         } else {
//             saoPauloUnit.innerHTML += 'Sem agendamentos para esta unidade';
//         }
//     });

//     console.log('Chamou a função de fill content');
// }

// fillScheduleList();

// function deleteSchedule(idToDelete) {
//     scheduleData.doc(`${idToDelete}`).delete();
//     console.log('Agendamento deletado ID: ', idToDelete);

//     fillScheduleList();
// }
