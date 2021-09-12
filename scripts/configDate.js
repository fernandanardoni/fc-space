
// formata a data que vem do banco


const configDate = (data) => {

    const dataCerta = data.split(" - ")[1]

    return dataCerta;



} 


// formata da data do dia


const todayDate = () => {
    const today = new Date;
    const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const mes = monthNumber[today.getMonth()]
    const todayFormatada = (today.getDate() + "/" + mes + "/" + today.getFullYear())
    return todayFormatada;
}


