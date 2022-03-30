const emp1 = document.querySelector("#date-1")
const check1 = document.querySelector("#check-1")

const test1date = localStorage.getItem("date1")
const test1afaire = localStorage.getItem("afaire1")
const test1check = localStorage.getItem("emp1check")

if (test1date == null){
    localStorage.setItem("date1", "non renseigné")
}

if (test1afaire == null){
    localStorage.setItem("afaire1", "non renseigné")
}
if (test1check == null){
    localStorage.setItem("emp1check", "non")
}

/********** CONTENU ************/

emp1.innerHTML = `${localStorage.getItem("date1")} / ${localStorage.getItem("afaire1")}`

// CHECK

if(localStorage.getItem("emp1check") == "oui"){
    check1.checked = true
}

if(localStorage.getItem("emp1check") == "non"){
    check1.checked = false
}

check1.addEventListener("click", function() {
    if(check1.checked == true){
        localStorage.setItem("emp1check", "oui")
    }

    if(check1.checked == false){
        localStorage.setItem("emp1check", "non")
    }
})