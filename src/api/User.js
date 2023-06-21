const getUsers = () => {
    // Cuando new promise se resuelva
    const promise =  new Promise((resolve, reject) => {
        // fetch trabaja con promesas lo que signica que dentro de el hay un resolve o un reject
        fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then((usersJSON) => {
            const users = usersJSON.json()
            // Estoy resolviendo la promesa padre
            resolve(users);
        })
        .catch((error) => {
             // Estoy cachenado la promesa padre
            reject(error)
        })
    })
    return promise;
}
const getNationalizeByWord = (name) => {
    // Cuando new promise se resuelva
    const promise =  new Promise((resolve, reject) => {
        // fetch trabaja con promesas lo que signica que dentro de el hay un resolve o un reject
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then((usersJSON) => {
            const user = usersJSON.json()
            // Estoy resolviendo la promesa padre
            resolve(user);
        })
        .catch((error) => {
             // Estoy cachenado la promesa padre
            reject(error)
        })
    })
    return promise;
}


export { getUsers, getNationalizeByWord}