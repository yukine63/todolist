const emp5 = document.querySelector("#date-5")
const check5 = document.querySelector("#check-5")

const test5date = localStorage.getItem("date5")
const test5afaire = localStorage.getItem("afaire5")
const test5check = localStorage.getItem("emp5check")

if (test5date == null){
    localStorage.setItem("date5", "non renseigné")
}

if (test5afaire == null){
    localStorage.setItem("afaire5", "non renseigné")
}
if (test5check == null){
    localStorage.setItem("emp5check", "non")
}

/********** CONTENU ************/

emp5.innerHTML = `${localStorage.getItem("date5")} / ${localStorage.getItem("afaire5")}`

// CHECK

if(localStorage.getItem("emp5check") == "oui"){
    check5.checked = true
}

if(localStorage.getItem("emp5check") == "non"){
    check5.checked = false
}

check5.addEventListener("click", function() {
    if(check5.checked == true){
        localStorage.setItem("emp5check", "oui")
    }

    if(check5.checked == false){
        localStorage.setItem("emp5check", "non")
    }
})