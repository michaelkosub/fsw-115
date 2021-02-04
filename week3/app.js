const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0])
    }
}
function showData(arr) {
    for (let i = 0; i < arr.pokemon.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr.pokemon[i].name
        document.body.appendChild(h1)
    }
}