// Preencher os agendamentos

const content = `
<div class="schedule-container">
<div class="info">
    <p class="user">João Paulo</p>

    <div class="schedule-day">
        <p class="date">11/10/21</p>
        <p class="hora">13:55h</p>
    </div>

    <p class="sector">Setor Leste</p>
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
`
var saoPauloUnit = document.getElementById("sao-paulo");

var santosUnit = document.getElementById("santos");

saoPauloUnit.innerHTML += content + content + content + content;

santosUnit.innerHTML += content + content + content + content;

