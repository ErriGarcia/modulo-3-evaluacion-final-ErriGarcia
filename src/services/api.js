const callToApi = (houseFilter) => {
    const urlApi = `https://hp-api.onrender.com/api/characters/house/${houseFilter}`
    return fetch(urlApi)
        .then(response => response.json())
        .then(response => {
                console.log(urlApi)
            const cleanData = response.map(eachCharacter => {
                return {
                    id: eachCharacter.id,
                    name: eachCharacter.name,
                    specie: eachCharacter.species,
                    gender: eachCharacter.gender,
                    house: eachCharacter.house,
                    alive: eachCharacter.alive,
                    image: eachCharacter.image
                }
            })
            return cleanData
        })
}

export default callToApi