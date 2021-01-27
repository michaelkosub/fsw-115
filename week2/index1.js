var hello = `{
    "response_code": 0,
    "results": [
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
            "correct_answer": "Hammer",
            "incorrect_answers": [
                "Wrench",
                "Drill",
                "Screwdriver"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the name of the main healing item in Dark Souls?",
            "correct_answer": "Estus Flask",
            "incorrect_answers": [
                "Health Potion",
                "Orange Juice",
                "Ashen Flask"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "&quot;Lift Your Spirit&quot; is an album by which artist?",
            "correct_answer": "Aloe Blacc",
            "incorrect_answers": [
                "Lena Meyer-Landrut",
                "Stevie Wonder",
                "Taylor Swift"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the name of a popular franchise that includes placing blocks down and surviving in an open world? ",
            "correct_answer": "Minecraft",
            "incorrect_answers": [
                "Unturned",
                "Roblox",
                "Grand Theft Auto V"
            ]
        }
    ]
}`
var bye = JSON.parse(hello)

for(var i = 0; i < bye.results.length; i++ ){

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].category
    document.body.append(H3)

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].type
    document.body.append(H3)

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].difficulty
    document.body.append(H3)

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].question
    document.body.append(H3)

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].correct_answer
    document.body.append(H3)

    var H3= document.createElement("h3")
    H3.textContent = bye.results[i].incorrect_answers
    document.body.append(H3)


}

