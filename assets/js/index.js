let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    getApi()
})

function getApi() {
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"
    let name = document.getElementById("name")
    let img = document.getElementById("imgPokemon")
    let response = document.getElementById("content")
    let html = ""



    urlForm = urlForm + name.value.toLocaleLowerCase()

    fetch(urlForm).then(res => res.json()).then((data) => {
        console.log(data)
        html = `Nome: ${upFirtCase(data.name)} <br> Type: ${upFirtCase(data.types[0].type.name)}`
        response.innerHTML = html
        
        img.innerHTML = `<img src= "${data.sprites.front_default}">
                         <img src= "${data.sprites.back_default}">
                         <img src= "${data.sprites.front_shiny}">
                         <img src= "${data.sprites.back_shiny}">
        `
        
        
    }).catch((err) => {
        if (err == "SyntaxError: Unexpected token N in JSON at position 0"){
            html = "Pokémon não encontrado! :("
        }else{
            html = "Erro: " + err
        }

        response.innerHTML = html
    })
}

function upFirtCase(val) {
    return val[0].toUpperCase() + val.substr(1);
}
