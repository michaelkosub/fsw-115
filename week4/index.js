axios.get("https://api.vschool.io/horses/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h3 = document.createElement('h3')
            if (response.data[i].completed === true){
                h3.textContent = response.data[i].title
                h3.style.textDecoration = "line-through"
                h3.style.textDecorationColor = "black"
                h3.style.textAlign = "center"
                h3.style.color="blue"
            } else {
                h3.textContent = `${response.data[i].title}`
                h3.style.textAlign = "center"
            }
                document.body.appendChild(h3)
        }
    })
    .catch(error => console.log(error)