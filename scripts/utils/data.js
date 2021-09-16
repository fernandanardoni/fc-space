import { retornaVagasSantos, retornaVagasSP } from '../setSchedule.js';

var diaSemana = ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
var mesAno = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var data = new Date();
var hoje =
    diaSemana[data.getDay()] +
    ", " +
    mesAno[data.getMonth()] +
    " de " +
    data.getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        monthsFull: mesAno,
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],

        i18n: {
            months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            weekdays: ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"],
            weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"],
            cancel: 'Cancelar',
            clear: 'Limpar',
            done: 'OK'
        },
        weekdaysFull: diaSemana,
        weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        weekdaysLetter: ["D", "S", "T", "Q", "Q", "S", "S"],
        selectMonths: true,
        selectYears: true,
        clear: false,
        disableWeekends: true,
        format: "dddd - dd/mm/yyyy",
        today: "Hoje",
        close: "X",
        min: new Date(data.getFullYear() - 0, 0, 3),
        max: new Date(data.getFullYear() + 1, 11, 31),
        closeOnSelect: true,

        onClose: async () => {


            document.getElementById("progress-bar").innerHTML = ``;
            const _retornaPorcentagem = await retornaVagasSP();
            const retornaValor = await retornaVagasSantos();

            const divProgress = document.createElement("div");
            //divProgress.setAttribute("class", "progress");
            const porcentagem = _retornaPorcentagem;

            if (retornaValor) {
                divProgress.innerHTML = ` 
                   <p> ${40 - retornaValor} vagas restantes.</p>   
                   <div class="progress" style="width: ${retornaValor}%"></div>
                  `;

                document.getElementById("progress-bar-santos").appendChild(divProgress);

            } else {

                divProgress.innerHTML = ` 
                       <p> ${240 - porcentagem} vagas restantes.</p>   
                       <div class="progress" style="width: ${porcentagem}%"></div>
                      `;

                document.getElementById("progress-bar").appendChild(divProgress);
            }


        },
        disableDayFn: (callbackDay) => {
            const x = new Date("2021,9,15").toDateString();
            const y = new Date("2021,09,16").toDateString();
            const z = new Date("2021,09,21").toDateString();

            let disableListDate = [x, y, z];

            if (disableListDate.includes(callbackDay.toDateString())) {
                return true;
            } else {
                return false;
            }
        }
    };
    /* disableDayFn:((callbackDay) => {
                  if(callbackDay.getDay() != 0 && callbackDay.getDay() !=6) {
                      return false;
                  } else {
                      return true;
                  }
              })
   
     }*/
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, options);


});