const emp7 = document.querySelector("#date-7")
const check7 = document.querySelector("#check-7")

const test7date = localStorage.getItem("date7")
const test7afaire = localStorage.getItem("afaire7")
const test7check = localStorage.getItem("emp7check")

if (test7date == null){
    localStorage.setItem("date7", "non renseigné")
}

if (test7afaire == null){
    localStorage.setItem("afaire7", "non renseigné")
}
if (test7check == null){
    localStorage.setItem("emp7check", "non")
}

/********** CONTENU ************/

emp7.innerHTML = `${localStorage.getItem("date7")} / ${localStorage.getItem("afaire7")}`

// CHECK

if(localStorage.getItem("emp7check") == "oui"){
    check7.checked = true
}

if(localStorage.getItem("emp7check") == "non"){
    check7.checked = false
}

check7.addEventListener("click", function() {
    if(check7.checked == true){
        localStorage.setItem("emp7check", "oui")
    }

    if(check7.checked == false){
        localStorage.setItem("emp7check", "non")
    }
})