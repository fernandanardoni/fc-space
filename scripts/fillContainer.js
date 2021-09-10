// Preencher os agendamentos

var saoPauloUnit = document.getElementById('sao-paulo');

var santosUnit = document.getElementById('santos');

const fillCollection = db.collection('Agendamentos');

function fillScheduleList() {
    fillCollection.get().then((item) => {
        santosUnit.innerHTML = '<h2>Unidade Santos</h2>';

        const scheduleList = item.docs.reduce((acc, doc) => {
            const { funcionario, data, setor, filial } = doc.data();

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
                <button class = "delete" id="${doc.id}" type="submit" onclick="openModal()">
                Apagar
                </button>
                
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

    fillCollection.get().then((item) => {
        const scheduleList = item.docs.reduce((acc, doc, id) => {
            saoPauloUnit.innerHTML = '<h2>Unidade São Paulo</h2>';

            const { funcionario, data, setor, filial } = doc.data();

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
                <button class = "delete" id="${doc.id}" type="submit" onclick="openModal()">
                Apagar
                </button>
                
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

fillScheduleList();
