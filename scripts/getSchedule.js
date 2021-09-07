
// Pegando todos os agendamentos

function getSchedules() {
    const datasCollection = db.collection("Agendamentos"); 
    datasCollection.get().then( item => {
        item.forEach(data => {
            
            console.log("agendamentos",data.data())
        })
    })
}

// Pegando uma informação dentro da tabela de usuário

function getUser() {


    const users = db.collection("Usuario").doc("lC9klqnuJuUv5ylIwNNU").collection("agendamentos");


    users.get().then((function (querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log('Usuario', doc.data())
        })
    }));


    

};

// Pegando apenas uma filial

function getOffice() {

    const docRef = db.collection("Escritorio").doc("1");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("dados da filial:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

getSchedules()
getUser()
getOffice()










