// Preencher os agendamentos

var saoPauloUnit = document.getElementById('sao-paulo');

var santosUnit = document.getElementById('santos');

const scheduleSantos = getSchedulesByFilial('Santos');
const scheduleSaoPaulo = getSchedulesByFilial('Sao Paulo');

function fillScheduleListSantos() {
    scheduleSantos.then((unit) => {
        var contentSantos = '';
        for (i in unit) {
            contentSantos += `
        <div class="schedule-container">
        <div class="info">
            <p class="user">${unit[i].funcionario}</p>
        
            <div class="schedule-day">
                <p class="date">${unit[i].data}</p>
                <p class="hora">13:55h</p>
            </div>
        
            <p class="sector">${unit[i].setor}</p>
        </div>
        
        <div class="actions">
            <a href="./createSchedule.html" class="remarca">
                <img src="assets/edit_black_24dp.svg" alt="remarcar">
            </a>
            <a href="#" class="delete" onclick=" openModal()">
                <img src="assets/delete_black_24dp.svg" alt="apagar">
            </a>
        </div>
        </div>
        `;
        }

        santosUnit.innerHTML += contentSantos;
    });
}

fillScheduleListSantos();

function fillScheduleListSaoPaulo() {
    scheduleSaoPaulo.then((unit) => {
        var contentSaoPaulo = '';
        for (i in unit) {
            contentSaoPaulo += `
        <div class="schedule-container">
        <div class="info">
            <p class="user">${unit[i].funcionario}</p>
        
            <div class="schedule-day">
                <p class="date">${unit[i].data}</p>
                <p class="hora">13:55h</p>
            </div>
        
            <p class="sector">${unit[i].setor}</p>
        </div>
        
        <div class="actions">
            <a href="./createSchedule.html" class="remarca">
                <img src="assets/edit_black_24dp.svg" alt="remarcar">
            </a>
            <a href="#" class="delete" onclick=" openModal()">
                <img src="assets/delete_black_24dp.svg" alt="apagar">
            </a>
        </div>
        </div>
        `;
        }

        saoPauloUnit.innerHTML += contentSaoPaulo;
    });
}

fillScheduleListSaoPaulo();
