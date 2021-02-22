function blah(e) {
    const x = document.getElementsByClassName("checkbox")
    for (i = 0; i < x.length; i++) {
        if (x[i].type === "checkbox") {
            if (e.target == x[i]){

            let z = x[i].parentNode
                if (x[i].checked) {
                    z.style.textDecoration = "line-through"
                    
            }   else {
                    z.style.textDecoration = "none"
            }
                let id = z.id
                let y = {
                completed: x[i].checked
            }
            axios.put(`https://api.vschool.io/horses/todo${id}`, y)
            
            }
        }
    }
}          
            
    
function getData(){
    axios.get("https://api.vschool.io/horses/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
    }

let todolist = document.getElementById("todoList");


function listData(data) {

    clearList()

    for (let i = 0; i < data.length; i++) {

        
        const h3 = document.createElement("h3")
        h3.textContent = data[i].title
        h3.setAttribute("id", data[i]._id )

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("checkbox")
        checkbox.onchange = blah
        h3.appendChild(checkbox)

        const button = document.createElement("button")
        button.textContent = "x"
        button.classList.add("delete")

        h3.appendChild(button)
        document.getElementById("todoList").appendChild(h3)
        
        
    }

}





function clearList() {
    const el = document.getElementById("todoList")
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()


const todoForm = document.todoform 

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value
    }

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""

    axios.post("https://api.vschool.io/horses/todo", newTodo)
    .then(res =>  console.log(res))
    .then(clearList)
        .then(getData)
    .catch(err => console.log(err))
})

todolist.addEventListener("click", function (e){
    let deleteBtn = document.getElementsByClassName("delete")
    for(i = 0; i < deleteBtn.length; i++){
      if(e.target == deleteBtn[i]){
        let x = deleteBtn[i].parentNode
        let id = x.id
        axios.delete(`https://api.vschool.io/horses/todo/${id}`)
        todolist.removeChild(x)
      }
    }
  })

