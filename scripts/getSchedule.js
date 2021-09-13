// //Pegas os agendamentos no banco de dados e retorna um Array;

// function getSchedulesByFilial(filial) {
//     const dataCollection = db.collection('Agendamentos');
//     return dataCollection.get().then((item) => {
//         const schedule = [];
//         item.forEach((data) => {
//             if (data.data().filial == filial) {
//                 schedule.push(data.data());
//             }
//         });
//         return schedule;
//     });
// }

// // Pegando todos os agendamentos

// function getSchedules() {
//     const datasCollection = db.collection('Agendamentos');
//     datasCollection.get().then((item) => {
//         item.forEach((data) => {
//             console.log('agendamentos', data.data());
//         });
//     });
// }

// // Pegando uma informação dentro da tabela de usuário

// function getUser() {
//     const users = db
//         .collection('Usuario')
//         .doc('lC9klqnuJuUv5ylIwNNU')
//         .collection('agendamentos');

//     users.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             console.log('Usuario', doc.data());
//         });
//     });
// }

// // Pegando apenas uma filial

// function getOffice() {

//     // [START get_all_users]
//     db.collection("Escritorio").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${Object.keys(doc.data())}`);
//         });
//     });

//     // const docRef = db.collection('Escritorio').doc("1");

//     // docRef
//     //     .get()
//     //     .then((doc) => {
//     //         if (doc.exists) {
//     //             console.log('dados da filial:', doc.data());
//     //         } else {
//     //             // doc.data() will be undefined in this case
//     //             console.log('No such document!');
//     //         }
//     //     })
//     //     .catch((error) => {
//     //         console.log('Error getting document:', error);
//     //     });
// }

// getSchedules();
// getUser();
// getOffice();

const schedulesList = document.querySelector('#schedules-list');

const getScheduleByUser = () => {

    let month = document.querySelector(".month");
    console.log("mes", month);
    
    if (month) {
        month.innerHTML = ""
    }
    
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection('Usuario')
                .doc(user.uid)
                .collection('agendamentos')
                .get()
                .then((snapshots) => {
                    let html = '';
                    snapshots.forEach((doc) => {
                        console.log(doc.data());

                        const scheduleItem = `
                        <li class="collection-item">
                        
                 <p class="sector">${doc.data().filial}</p>
                 </div>

                 <p class="date">${doc.data().data}</p>
                 </div>

                 <div class="actions">



                 <a href="#" id="${doc.id}" onclick="deleteSchedule(this.id)">
                    <img src="assets/delete-icon.svg" alt="delete">
                </a>
                <a href="#" id="">
                    <img src="assets/edit-icon.svg" alt="edit">
                </a>
                
                </div>
                        </li>
                    `;

                        html += scheduleItem;

                        schedulesList.innerHTML = html;
                    });

                schedulesList.insertAdjacentHTML("beforebegin", `<h2 class="month" >Setembro</h2>`)
                });
        } else {
            console.log('user logged out');
        }
    });
};

getScheduleByUser();

//função pra excluir um agendamento.
function deleteSchedule(idToDelete) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection('Usuario')
                .doc(user.uid)
                .collection('agendamentos')
                .doc(idToDelete)
                .delete();
            console.log('Usuario deletado:', idToDelete, user.uid);
        }
    });

    getScheduleByUser();
}
