const emp10 = document.querySelector("#date-10")
const check10 = document.querySelector("#check-10")

const test10date = localStorage.getItem("date10")
const test10afaire = localStorage.getItem("afaire10")
const test10check = localStorage.getItem("emp10check")

if (test10date == null){
    localStorage.setItem("date10", "non renseigné")
}

if (test10afaire == null){
    localStorage.setItem("afaire10", "non renseigné")
}
if (test10check == null){
    localStorage.setItem("emp10check", "non")
}

/********** CONTENU ************/

emp10.innerHTML = `${localStorage.getItem("date10")} / ${localStorage.getItem("afaire10")}`

// CHECK

if(localStorage.getItem("emp10check") == "oui"){
    check10.checked = true
}

if(localStorage.getItem("emp10check") == "non"){
    check10.checked = false
}

check10.addEventListener("click", function() {
    if(check10.checked == true){
        localStorage.setItem("emp10check", "oui")
    }

    if(check10.checked == false){
        localStorage.setItem("emp10check", "non")
    }
})