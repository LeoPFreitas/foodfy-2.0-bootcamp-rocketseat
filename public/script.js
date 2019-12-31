const recipes = document.querySelectorAll('.recipe')
const buttons = document.getElementsByClassName('button')

// Recipe click event
for (let recipe of recipes) {
    recipe.addEventListener("click", function () {
        const recipeId = recipe.getAttribute('id')

        const url = window.location.href

        if (url === 'http://localhost:3000/admin/recipes'){
            window.location.href = `recipes/${recipeId}`
        } else {
            window.location.href = `admin/recipes/${recipeId}`
        }
    })
}

for (let button of buttons) {
    button.addEventListener("click", function () {
        if (button.textContent == "Esconder") {
            button.textContent = "Mostrar"
        } else {
            button.textContent = "Esconder"
        }

        const idName = button.getAttribute('id')
        const content = document.querySelector(`.${idName}-content`)
        content.classList.toggle('hide')
    })
}