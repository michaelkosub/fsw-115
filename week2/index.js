var one = `{
    "response_code": 0,

    "results": [
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who wrote the children&#039;s story &quot;The Little Match Girl&quot;?",
            "correct_answer": "Hans Christian Andersen",
            "incorrect_answers": [
                "Charles Dickens",
                "Lewis Carroll",
                "Oscar Wilde"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
            "correct_answer": "India",
            "incorrect_answers": [
                "United States of America",
                "Soviet Union",
                "Poland"
            ]
        }
    ]
}`

var end= JSON.parse (one)


for(var i = 0; i < end.results.length; i++ ){

    var Li= document.createElement("li")
    Li.textContent = end.results[i].category
    Li.style.textAlign = "center"
    Li.style.color = "red"
    Li.style.fontSize = "30px"
    document.body.append(Li)

    
    var Li2= document.createElement("li")
    Li2.textContent = end.results[i].type
    Li2.style.textAlign = "center"
    Li2.style.color = "blue"
    Li2.style.fontSize = "30px"
    document.body.append(Li2)

    var Li3= document.createElement("li")
    Li3.textContent = end.results[i].difficulty
    Li3.style.textAlign = "center"
    Li3.style.color = "red"
    Li3.style.fontSize = "30px"
    document.body.append(Li3)


    var Li4= document.createElement("li")
    Li4.textContent = end.results[i].question
    Li4.style.textAlign = "center"
    Li4.style.color = "blue"
    Li4.style.fontSize = "30px"
    document.body.append(Li4)

    var Li5= document.createElement("li")
    Li5.textContent = end.results[i].correct_answer
    Li5.style.textAlign = "center"
    Li5.style.color = "red"
    Li5.style.fontSize = "30px"
    document.body.append(Li5)

    var Li6= document.createElement("li")
    Li6.textContent = end.results[i].incorrect_answers
    Li6.style.textAlign = "center"
    Li6.style.color = "blue"
    Li6.style.fontSize = "30px"
    document.body.append(Li6)


}