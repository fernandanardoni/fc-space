

function validateCPF(cpf) {

    let sum = 0
    let leftover;

    const regex = /^(?:(\d)\1{10})$|(\D)|^(\d{12,})$|^(\d{0,10})$/g;

    if (cpf.match(regex)) return false;


    for (var i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    leftover = (sum * 10) % 11
    if ((leftover == 10) || (leftover == 11)) leftover = 0
    if (leftover != parseInt(cpf.substring(9, 10))) return false
    sum = 0
    for (var i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    leftover = (sum * 10) % 11
    if ((leftover == 10) || (leftover == 11)) leftover = 0
    if (leftover != parseInt(cpf.substring(10, 11))) return false
    return true
}