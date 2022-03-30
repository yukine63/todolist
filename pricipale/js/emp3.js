const emp3 = document.querySelector("#date-3")
const check3 = document.querySelector("#check-3")

const test3date = localStorage.getItem("date3")
const test3afaire = localStorage.getItem("afaire3")
const test3check = localStorage.getItem("emp3check")

if (test3date == null){
    localStorage.setItem("date3", "non renseigné")
}

if (test3afaire == null){
    localStorage.setItem("afaire3", "non renseigné")
}
if (test3check == null){
    localStorage.setItem("emp3check", "non")
}

/********** CONTENU ************/

emp3.innerHTML = `${localStorage.getItem("date3")} / ${localStorage.getItem("afaire3")}`

// CHECK

if(localStorage.getItem("emp3check") == "oui"){
    check3.checked = true
}

if(localStorage.getItem("emp3check") == "non"){
    check3.checked = false
}

check3.addEventListener("click", function() {
    if(check3.checked == true){
        localStorage.setItem("emp3check", "oui")
    }

    if(check3.checked == false){
        localStorage.setItem("emp3check", "non")
    }
})