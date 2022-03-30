const emp2 = document.querySelector("#date-2")
const check2 = document.querySelector("#check-2")

const test2date = localStorage.getItem("date2")
const test2afaire = localStorage.getItem("afaire2")
const test2check = localStorage.getItem("emp2check")

if (test2date == null){
    localStorage.setItem("date2", "non renseigné")
}

if (test2afaire == null){
    localStorage.setItem("afaire2", "non renseigné")
}
if (test2check == null){
    localStorage.setItem("emp2check", "non")
}

/********** CONTENU ************/

emp2.innerHTML = `${localStorage.getItem("date2")} / ${localStorage.getItem("afaire2")}`

// CHECK

if(localStorage.getItem("emp2check") == "oui"){
    check2.checked = true
}

if(localStorage.getItem("emp2check") == "non"){
    check2.checked = false
}

check2.addEventListener("click", function() {
    if(check2.checked == true){
        localStorage.setItem("emp2check", "oui")
    }

    if(check2.checked == false){
        localStorage.setItem("emp2check", "non")
    }
})