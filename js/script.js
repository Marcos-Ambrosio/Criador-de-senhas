const inputRange = document.querySelector(".input-range")
const checkBoxUppercase = document.querySelector("#uppercase")
const checkBoxLowercase = document.querySelector("#lowercase")
const checkNumbers = document.querySelector("#numbers")
const checkEspecialsCaracters = document.querySelector("#especials")
const btnCreate = document.querySelector(".btnCreate")
const output = document.querySelector(".output")
let passwordField = document.querySelector(".password-field")

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = uppercase.toLocaleLowerCase()
const especialsCaracters = ",.-!#$%&/@£§€=?><"
const numbers = "0123456789"

checkBoxUppercase.value = uppercase
checkBoxLowercase.value = lowercase
checkEspecialsCaracters.value = especialsCaracters
checkNumbers.value = numbers


inputRange.addEventListener("input" , ()=> {
    output.innerHTML = inputRange.value
})

btnCreate.addEventListener("click" , ()=> {

    passwordField.innerHTML = ""

    const checkBoxs = document.querySelectorAll("input[type=checkbox]:checked")
    let allCharactes = ""

    checkBoxs.forEach(group => {
        allCharactes += group.value
    })

    for(let i = 0; i < inputRange.value ; i++){
        const numRandom = Math.floor(Math.random()*allCharactes.length)
        const caracter = allCharactes.charAt(numRandom)

        passwordField.innerHTML += caracter

        if(passwordField.innerHTML === "") {
            passwordField.innerHTML = "Selecione um grupo de caracteres"
            return
        }
    }

})