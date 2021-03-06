const schedulesList = document.querySelector('.schedule-content');

const getScheduleByUser =  () => {

    auth.onAuthStateChanged( async (user) => {
        if (user) {

            await  db.collection('Usuario').doc(user.uid).get().then(item => {

                  db.collection('Agendamentos').get().then((snapshots) => {

                    months = {
                        jan: [],
                        fev: [],
                        mar: [],
                        abr: [],
                        mai: [],
                        jun: [],
                        jul: [],
                        ago: [],
                        set: [],
                        out: [],
                        nov: [],
                        dez: [],
                    }

                    snapshots.forEach(async (doc) => {
                        const day = new Date();

                        const data = doc.data().data;
                        const formatedDate = transformDate(data)

                        if (doc.data().cpf == item.data().cpf && day.getTime() < formatedDate.getTime() ) {

                            return monthSelector(doc.data().data, doc.data().filial, doc.id, doc.data().andar);

                        }
                    });


                    schedulesList.innerHTML = getFinalHTML() ? getFinalHTML() : '<h2 style = "margin-left: 16px; ; margin-top: 10px; font-size: 20px">Sem Agendamentos</h2>';



                });

            })



        }
    });
};

getScheduleByUser();


// Funções das modais

var scheduleIdToModal = '';

function openModal(scheduleId) {
    document.querySelector('.modal-wrapper').id = 'active';
    scheduleIdToModal = scheduleId;
}

function closeModal() {
    document.querySelector('.modal-wrapper').id = '';
}

function closeDeleteModal() {
    document.querySelector('.delete-modal').id = '';
}

function openDeleteModal(scheduleId) {
    document.querySelector('.delete-modal').id = 'active';

    scheduleIdToModal = scheduleId;
}

//função pra excluir um agendamento.

function deleteSchedule(idToDelete, newPage) {



    db.collection('Agendamentos').doc(idToDelete).delete();

    closeModal();
    closeDeleteModal();

    setTimeout(function () {

        if (newPage) {
            history.replaceState(null, null, "createSchedule.html");
            document.location.reload(true);

        } else {
            getScheduleByUser();

        }

    }, 350);

}

// Separa os agendamentos por mês
function monthSelector(date, filial, id, floor) {

    let content = `
    <li class="collection-item">
    <p class="sector">${filial} - ${floor} andar</p>

    <p class="date">${getDayofWeek(date)} - ${date}</p>

    <div class="actions">
        <a href="#" id="${id}" onclick="openModal(this.id)">
            <img src="assets/delete-icon.svg" alt="delete">
        </a>
        <a href="#" id="${id}" onclick="openDeleteModal(this.id)">
            <img src="assets/edit-icon.svg" alt="edit">
        </a>

    </div>
    </li>
    `

    if (date.includes("/01/")) {
        months.jan.push(content);
    } else if (date.includes("/02/")) {
        months.fev.push(content);
    } else if (date.includes("/03/")) {
        months.mar.push(content);
    } else if (date.includes("/04/")) {
        months.abr.push(content);
    } else if (date.includes("/05/")) {
        months.mai.push(content);
    } else if (date.includes("/06/")) {
        months.jun.push(content);
    } else if (date.includes("/07/")) {
        months.jul.push(content);
    } else if (date.includes("/08/")) {
        months.ago.push(content);
    } else if (date.includes("/09/")) {
        months.set.push(content);
    } else if (date.includes("/10/")) {
        months.out.push(content);
    } else if (date.includes("/11/")) {
        months.nov.push(content);
    } else if (date.includes("/12/")) {
        months.dez.push(content);
    }
}

var months = {
    jan: [],
    fev: [],
    mar: [],
    abr: [],
    mai: [],
    jun: [],
    jul: [],
    ago: [],
    set: [],
    out: [],
    nov: [],
    dez: [],
}

function getFinalHTML() {
    let finalHTML = '';

    if (months.jan.length > 0) {
        finalHTML += `
            <h2 class="month">Janeiro</h2>
            <ul class="collection" id="schedules-list">
            `

        months.jan.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.fev.length > 0) {
        finalHTML += `
        <h2 class="month">Fevereiro</h2>
        <ul class="collection" id="schedules-list">
        `

        months.fev.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.mar.length > 0) {
        finalHTML += `
        <h2 class="month">Março</h2>
        <ul class="collection" id="schedules-list">
        `

        months.mar.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.abr.length > 0) {
        finalHTML += `
        <h2 class="month">Abril</h2>
        <ul class="collection" id="schedules-list">
        `

        months.abr.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.mai.length > 0) {
        finalHTML += `
        <h2 class="month">Maio</h2>
        <ul class="collection" id="schedules-list">
        `

        months.mai.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.jun.length > 0) {
        finalHTML += `
        <h2 class="month">Junk</h2>
        <ul class="collection" id="schedules-list">
        `

        months.jun.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.jul.length > 0) {
        finalHTML += `
        <h2 class="month">Julho</h2>
        <ul class="collection" id="schedules-list">
        `

        months.jul.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.ago.length > 0) {
        finalHTML += `
        <h2 class="month">Agosto</h2>
        <ul class="collection" id="schedules-list">
        `

        months.ago.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.set.length > 0) {
        finalHTML += `
            <h2 class="month">Setembro</h2>
            <ul class="collection" id="schedules-list">
            `

        months.set.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.out.length > 0) {
        finalHTML += `
        <h2 class="month">Outubro</h2>
        <ul class="collection" id="schedules-list">
        `

        months.out.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.nov.length > 0) {
        finalHTML += `
        <h2 class="month">Novembro</h2>
        <ul class="collection" id="schedules-list">
        `

        months.nov.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }
    if (months.dez.length > 0) {
        finalHTML += `
        <h2 class="month">Dezembro</h2>
        <ul class="collection" id="schedules-list">
        `

        months.dez.forEach((li) => {
            finalHTML += li;
        })

        finalHTML += `</ul>`
    }

    return finalHTML;
}