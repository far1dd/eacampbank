var kreditbutton = document.querySelector('.kredit')

var faizbutton = document.querySelector('.faiz')

var cixisbutton = document.querySelector('.cixis')

kreditbutton.addEventListener('click', () => {
    window.location.href = 'index3kredit.html'
})

cixisbutton.addEventListener('click', () => {
    window.location.href = 'index2.html'
})

faizbutton.addEventListener('click', () => {
    window.location.href = 'index3faiz.html'
})

var u = document.querySelector('.name')
u.innerHTML = ''
u.innerHTML = localStorage.getItem('ad') + ' ' + localStorage.getItem('soyad') 