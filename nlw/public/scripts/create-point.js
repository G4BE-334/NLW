function populateUFs() {
    const UFSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(answer => answer.json())
        .then(states => {

            for (const state of states) {
                UFSelect.innerHTML += `<option value ="${state.id}">${state.sigla}</option>`
            }

        })
}

populateUFs()

function getCities(event) {
    const stateInput = document.querySelector("input[name=state]")
    const selectCities = document.querySelector("select[name=city]")
    const UF = event.target.value
    stateInput.value = event.target.options[event.target.selectedIndex].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios
    `

    /* Clean the cities field to populate from new state*/
    selectCities.innerHTML = "<option value>Selecione a Cidade</option>"
    selectCities.disabled = true


    fetch(url).then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                selectCities.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            selectCities.disabled = false

        })

}

console.log("Hello, world!")
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

/* Itens de coleta */
const itemsToColect = document.querySelectorAll(".items-grid li")

for (const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")


let selectedItems = []

function handleSelectedItem(event) {
    /* Add or remove selected class with JS */
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemID = itemLi.dataset.id

    /* Verify if there are items selected */
    /* if Yes, take selected items */

    const alreadySelected = selectedItems.findIndex(item => {
        /* it Will return true or false */
        return item == itemID
    })


    /* If they are already selected remove from selection */
    if (alreadySelected >= 0) {

        const filteredItems = selectedItems.filter(item => {
            return item != itemID
        })

        selectedItems = filteredItems
    }
    /* If they are not already selected add to selection */
    else {

        selectedItems.push(itemID)

    }
    /* Update hidden input with selected items */
    collectedItems.value = selectedItems
}
