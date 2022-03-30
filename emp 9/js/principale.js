const date = document.querySelector("#date")
const a_faire = document.querySelector("#a-faire")
const valider = document.querySelector("#valider")

valider.addEventListener("click", function() {
    localStorage.setItem("date9", date.value)
    localStorage.setItem("afaire9", a_faire.value)
})