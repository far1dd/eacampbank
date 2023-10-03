const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseAlp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const emailverification = ["@", "."]

var correction = document.querySelector('.qeydiyyat-raziliq')
var duyme = document.querySelector('.qeydiyyat')
var a = document.querySelector('button')
var b = document.querySelector('.ad-error-1-title')
var y = document.querySelector('.soyad-error-1-title')
var z = document.querySelector('.email-error-1-title')
var q = document.querySelector('.password-error-1-title')
var f = document.querySelector('.password-error-2-title')
var c = document.querySelector('.input1')
var o = document.querySelector('.input2')
var t = document.querySelector('.input3')
var h = document.querySelector('.input4')
var l = document.querySelector('.input5')

var hesabinizvar = document.querySelector('.hesabinizvarbutton')


hesabinizvar.addEventListener('click', () => {
    window.location.href = 'index2.html'
})

var yoxlanis2 = false
var dogru1 = false
var dogru2 = false
var dogru3 = false
var dogru4 = false
var dogru5 = false
var dogru6 = false
var yoxlanis = false
var sifreuzunlugu = false

duyme.addEventListener('click', () => {



    if ((sifreuzunlugu === true) && (dogru6 === true) ) {
        yoxlanis = true
    }


    if ((h.value.length < 8) && (h.value.length > 0)) {
        alert('Shifre en az 8 simvoldan ibaret olmalidir')
        sifreuzunlugu = false
    }

    if (!(h.value.length < 8) && (h.value.length > 0)) {
        sifreuzunlugu = true
    }



    for (var d of c.value) {


    }

    for (var i of o.value) {

    }

    for (var g of t.value) {

    }

    for (var j of h.value) {

    }

    for (var s of l.value) {

    }

    if (!(lowerAlph.includes(d) || upperCaseAlp.includes(d))) {
        b.innerHTML = 'zehmet olmasa adinizi duzgun qeyd edin'
    }

    if ((lowerAlph.includes(d) || upperCaseAlp.includes(d))) {
        b.innerHTML = ''
        dogru1 = true
    }

    if (!(lowerAlph.includes(i) || upperCaseAlp.includes(i))) {
        y.innerHTML = 'zehmet olmasa soyadinizi duzgun qeyd edin'
    }

    if ((lowerAlph.includes(i) || upperCaseAlp.includes(i))) {
        y.innerHTML = ''
        dogru2 = true
    }

    if (!(t.value === '') && true) {
        z.innerHTML = ''
        dogru3 = true
    }

    if (t.value === '') {
        z.innerHTML = 'zehmet olmasa emailinizi qeyd edin'
    }

    if (h.value === '') {
        q.innerHTML = 'zehmet olmasa sifre qeyd edin'
    }

    if (l.value === '') {
        f.innerHTML = 'zehmet olmasa sifre qeyd edin'
    }

    if (!(h.value === '')) {
        q.innerHTML = ''
        dogru4 = true
    }

    if (!(l.value === '')) {
        f.innerHTML = ''
        dogru5 = true

    }

    if (!(l.value === '') && !(h.value === '') && h.value === l.value ) {
        yoxlanis2 = true
        dogru6 = true
    } else if (!(l.value === '')) {
        f.innerHTML = 'sifreler uygun deyil'
        
    }

    if (dogru1 === true && dogru2 === true && dogru3 === true && dogru4 === true && dogru5 === true && dogru6 === true && !(correction.checked)) {
        alert('Zehmet olmasa qaydalarla raziliginizi bildirin')
    }


    if (dogru1 === true && dogru2 === true && dogru3 === true && dogru4 === true && dogru5 === true && dogru6 === true && correction.checked && sifreuzunlugu === true && yoxlanis === true && yoxlanis2 === true) {

        var email1 = t.value
        var sifre1 = h.value
        window.location.href = 'index2.html'
        console.log(email1);
        console.log(sifre1);
    }
    localStorage.setItem('email', email1)
    localStorage.setItem('sifre', sifre1)




    var adinput1 = document.querySelector('.input1')
    var adinput2 = document.querySelector('.input2')

    localStorage.setItem('ad', adinput1.value)
    localStorage.setItem('soyad', adinput2.value)



})


