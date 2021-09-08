

const data = document.querySelector(".datasp");


const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const monthNumber = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]



data.addEventListener("change", (event)=> {
    
    const currentDate = event.target.value;
    const newDate = currentDate.replace(","," ").split(" ");
    console.log(newDate);
    console.log(month.indexOf(newDate[0]))
    const date = (newDate[1] + "/" +  monthNumber[month.indexOf(newDate[0])] + "/" + newDate[3] )
    console.log('date', date)


})

