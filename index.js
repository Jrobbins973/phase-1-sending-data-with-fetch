// Add your code here

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify()
// }





function submitData(uName, uEmail) {

    const configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: uName,
            email: uEmail,
        }),    
    }

    let div = document.createElement("div")

    return fetch(`http://localhost:3000/users`,configurationObject )
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        div.append(object.id)
        document.body.appendChild(div)
    }).catch(function (error) {
        div.append(error.message)
        document.body.appendChild(div)

    });


}

// try {
//     submitData()

// } catch(error) {
//     console.error(error)
//     console.log('ITS ME THE ERROR')
// }





