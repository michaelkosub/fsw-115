function films() {
    axios.get("http://swapi.dev/api/films/")
    .then((response) => {
        for (i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement("h1")
            h1.innerHTML = `${response.data.results[i].title}`
            let data = document.getElementById("list")
            data.append(h1)
        }
    })
    .catch ((error) => alert("error"));
}

function species() {
    axios.get("http://swapi.dev/api/species/")
    .then((response) => {
        for (i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement("h1")
            h1.innerHTML = `${response.data.results[i].name}`
            let data = document.getElementById("list")
            data.append(h1)
        }
    })
    .catch ((error) => alert("error"));
}

