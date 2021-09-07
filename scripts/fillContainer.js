// Preencher os agendamentos

const content = `
<div class="agendamento-container">
<div class="informacoes">
    <p class="usuario">Pessoa Aleatoria</p>

    <div class="dia-do-agendamento">
        <p class="data">11/10/21</p>
        <p class="hora">13:55h</p>
    </div>

    <p class="setor">Setor Leste</p>
</div>

<div class="actions">
    <a href="./createSchedule.html" class="remarca">
        <img src="assets/edit_black_24dp.svg" alt="remarcar">
    </a>
    <a href="#" class="apaga" onclick=" openModal()">
        <img src="assets/delete_black_24dp.svg" alt="apagar">
    </a>
</div>
</div>
`
var unidadeSaoPaulo = document.getElementById("sao-paulo");

var unidadeSantos = document.getElementById("santos");

unidadeSaoPaulo.innerHTML += content + content + content + content;

unidadeSantos.innerHTML += content + content + content + content;

