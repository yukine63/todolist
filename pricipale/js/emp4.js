const emp4 = document.querySelector("#date-4")
const check4 = document.querySelector("#check-4")

const test4date = localStorage.getItem("date4")
const test4afaire = localStorage.getItem("afaire4")
const test4check = localStorage.getItem("emp4check")

if (test4date == null){
    localStorage.setItem("date4", "non renseigné")
}

if (test4afaire == null){
    localStorage.setItem("afaire4", "non renseigné")
}
if (test4check == null){
    localStorage.setItem("emp4check", "non")
}

/********** CONTENU ************/

emp4.innerHTML = `${localStorage.getItem("date4")} / ${localStorage.getItem("afaire4")}`

// CHECK

if(localStorage.getItem("emp4check") == "oui"){
    check4.checked = true
}

if(localStorage.getItem("emp4check") == "non"){
    check4.checked = false
}

check4.addEventListener("click", function() {
    if(check4.checked == true){
        localStorage.setItem("emp4check", "oui")
    }

    if(check4.checked == false){
        localStorage.setItem("emp4check", "non")
    }
})