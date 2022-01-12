let nome = window.document.getElementById ('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let map = document.querySelector ('#map')

nome.style.width = '100%'
email.style.width = '100%'

function validarNome(){
    let txtNome = document.querySelector ('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector ('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
   
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector ('#txtAssunto')
    if (assunto.value.length <= 100) {
        txtAssunto.innerHTML = 'Válido (100)'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }else {
        txtAssunto.innerHTML = 'Escreva no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Enviado com sucesso')
    }else {
        alert ('Preencha corretamente para enviar')
    }
}

function mapZoom () {
    map.style.width = '800px'
    map.style.heigth = '600px'
}

function mapNormal () {
    map.style.width = '400px'
    map.style.heigth = '250px'
}