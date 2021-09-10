// Preencher os agendamentos

var saoPauloUnit = document.getElementById('sao-paulo');

var santosUnit = document.getElementById('santos');

const fillCollection = db.collection('Agendamentos');

function fillScheduleListSantos() {
    fillCollection.get().then((item) => {
        const scheduleList = item.docs.reduce((acc, doc) => {
            const { funcionario, data, setor, filial } = doc.data();

            santosUnit.innerHTML = '<h2>Unidade Santos</h2>';

            if (filial == 'Santos') {
                acc += `
        <div class="schedule-container" id="${doc.id}">
        <div class="info">
        <p class="user">${funcionario}</p>
        
        <div class="schedule-day">
        <p class="date">${data}</p>
        </div>
        
        <p class="sector">${filial}</p>
        </div>
        
        <div class="actions">
        <a href="./createSchedule.html" class="remarca">
        <img src="assets/edit_black_24dp.svg" alt="remarcar">
        </a>
        <a href="#" class="delete" id="${doc.id}" onclick=" openModal()">
        <img src="assets/delete_black_24dp.svg" alt="apagar">
        </a>
        </div>
        </div>
        `;
            }

            return acc;
        }, '');

        if (scheduleList) {
            santosUnit.innerHTML += scheduleList;
        } else {
            santosUnit.innerHTML += 'Sem agendamentos para esta unidade';
        }
    });
}
fillScheduleListSantos();

function fillScheduleListSaoPaulo() {
    fillCollection.get().then((item) => {
        const scheduleList = item.docs.reduce((acc, doc, id) => {
            const { funcionario, data, setor, filial } = doc.data();

            saoPauloUnit.innerHTML = '<h2>Unidade São Paulo</h2>';

            if (filial == 'São Paulo') {
                acc += `
        <div class="schedule-container" id="${doc.id}">
        <div class="info">
        <p class="user">${funcionario}</p>
        
        <div class="schedule-day">
        <p class="date">${data}</p>
        </div>
        
        <p class="sector">${filial}</p>
        </div>
        
        <div class="actions">
        <a href="./createSchedule.html" class="remarca">
        <img src="assets/edit_black_24dp.svg" alt="remarcar">
        </a>
        <a href="#" class="delete" id="${doc.id}" onclick=" openModal()">
        <img src="assets/delete_black_24dp.svg" alt="apagar">
        </a>
        </div>
        </div>
        `;
            }

            return acc;
        }, '');

        if (scheduleList) {
            saoPauloUnit.innerHTML += scheduleList;
        } else {
            saoPauloUnit.innerHTML += 'Sem agendamentos para esta unidade';
        }
    });
}
fillScheduleListSaoPaulo();

function deleteSchedule() {
    // fillCollection.doc('544').delete();
}
