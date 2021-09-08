// deixei aqui nesse arquivo as funções pontuais

const schedulesCollection = document.querySelector('#schedules');

const setSchedules = (data) => {
    let html = '';
    data.forEach(doc => {
        const scheduling = doc.data();
        const listItem = `
        <li>${scheduling.data}
        `;
        html += listItem;

        schedulesCollection.innerHTML = html;
    })
};

function mySchedules() {
    window.location = "seeSchedules.html"
}



// document.addEventListener('DOMContentLoaded', function() {
//         var elemSelect = document.querySelectorAll('select');
//         var instanceSelect = M.FormSelect.init(elemSelect);
//         var elemDate = document.querySelectorAll('.datepicker');
//         var instanceDate = M.Datepicker.init(elemDate);
//         var elemTime = document.querySelectorAll('.timepicker');
//         var instanceTime = M.Timepicker.init(elemTime);
//     }

// );