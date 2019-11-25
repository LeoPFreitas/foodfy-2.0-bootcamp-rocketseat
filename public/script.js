const recipes = document.querySelectorAll('.recipe')
const buttons = document.getElementsByClassName('button')

for (let recipe of recipes) {
    recipe.addEventListener("click", function () {
        const recipeId = recipe.getAttribute('id')

        window.location.href = `receitas/${recipeId}`
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