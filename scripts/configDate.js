
// formata a data que vem do site


const configDate = async (data) => {

    const dataCerta = await data.split(" - ")[1]

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


const getDayofWeek = (item) => {

    const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    const splitDate = item.split("/");

    const formattedDate = splitDate[1] + "-" + splitDate[0] + "-" + splitDate[2]

    const date = new Date(formattedDate)

    const day = week[date.getDay()];

    return day;
}


