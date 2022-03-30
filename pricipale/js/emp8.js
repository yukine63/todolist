const emp8 = document.querySelector("#date-8")
const check8 = document.querySelector("#check-8")

const test8date = localStorage.getItem("date8")
const test8afaire = localStorage.getItem("afaire8")
const test8check = localStorage.getItem("emp8check")

if (test8date == null){
    localStorage.setItem("date8", "non renseigné")
}

if (test8afaire == null){
    localStorage.setItem("afaire8", "non renseigné")
}
if (test8check == null){
    localStorage.setItem("emp8check", "non")
}

/********** CONTENU ************/

emp8.innerHTML = `${localStorage.getItem("date8")} / ${localStorage.getItem("afaire8")}`

// CHECK

if(localStorage.getItem("emp8check") == "oui"){
    check8.checked = true
}

if(localStorage.getItem("emp8check") == "non"){
    check8.checked = false
}

check8.addEventListener("click", function() {
    if(check8.checked == true){
        localStorage.setItem("emp8check", "oui")
    }

    if(check8.checked == false){
        localStorage.setItem("emp8check", "non")
    }
})