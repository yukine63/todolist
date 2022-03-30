const emp9 = document.querySelector("#date-9")
const check9 = document.querySelector("#check-9")

const test9date = localStorage.getItem("date9")
const test9afaire = localStorage.getItem("afaire9")
const test9check = localStorage.getItem("emp9check")

if (test9date == null){
    localStorage.setItem("date9", "non renseigné")
}

if (test9afaire == null){
    localStorage.setItem("afaire9", "non renseigné")
}
if (test9check == null){
    localStorage.setItem("emp9check", "non")
}

/********** CONTENU ************/

emp9.innerHTML = `${localStorage.getItem("date9")} / ${localStorage.getItem("afaire9")}`

// CHECK

if(localStorage.getItem("emp9check") == "oui"){
    check9.checked = true
}

if(localStorage.getItem("emp9check") == "non"){
    check9.checked = false
}

check9.addEventListener("click", function() {
    if(check9.checked == true){
        localStorage.setItem("emp9check", "oui")
    }

    if(check9.checked == false){
        localStorage.setItem("emp9check", "non")
    }
})