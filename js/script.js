const modalOverlay = document.querySelector('.modal-overlay')
const recips = document.querySelectorAll('.recipe')

for (let recip of recips) {
    recip.addEventListener("click", function () {
        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = recip.querySelector('img').src
        modalOverlay.querySelector('.modal-content h3').innerHTML = recip.querySelector('h3').textContent
        modalOverlay.querySelector('.modal-overlay p').innerHTML = recip.querySelector('p').textContent

    })
}

document.querySelectorAll('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('.active')

    modalOverlay.querySelector('img').src = ''
    modalOverlay.querySelector('.modal-content h3').innerHTML = ''
    modalOverlay.querySelector('.modal-overlay p').innerHTML = ''
})