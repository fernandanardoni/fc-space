document.addEventListener('DOMContentLoaded', function() {
        const dateOptions = {
            monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Pronto',
            labelMonthNext: 'Próximo mês',
            labelMonthPrev: 'Mês anterior',
            labelMonthSelect: 'Selecione um mês',
            labelYearSelect: 'Selecione um ano',
            selectMonths: true,
            selectYears: 15
        }

        var elemSelect = document.querySelectorAll('select');
        var instanceSelect = M.FormSelect.init(elemSelect);
        var elemDate = document.querySelectorAll('.datepicker');
        var instanceDate = M.Datepicker.init(elemDate, dateOptions);
        var elemTime = document.querySelectorAll('.timepicker');
        var instanceTime = M.Timepicker.init(elemTime);
    }

);