const emp6 = document.querySelector("#date-6")
const check6 = document.querySelector("#check-6")

const test6date = localStorage.getItem("date6")
const test6afaire = localStorage.getItem("afaire6")
const test6check = localStorage.getItem("emp6check")

if (test6date == null){
    localStorage.setItem("date6", "non renseigné")
}

if (test6afaire == null){
    localStorage.setItem("afaire6", "non renseigné")
}
if (test6check == null){
    localStorage.setItem("emp6check", "non")
}

/********** CONTENU ************/

emp6.innerHTML = `${localStorage.getItem("date6")} / ${localStorage.getItem("afaire6")}`

// CHECK

if(localStorage.getItem("emp6check") == "oui"){
    check6.checked = true
}

if(localStorage.getItem("emp6check") == "non"){
    check6.checked = false
}

check6.addEventListener("click", function() {
    if(check6.checked == true){
        localStorage.setItem("emp6check", "oui")
    }

    if(check6.checked == false){
        localStorage.setItem("emp6check", "non")
    }
})