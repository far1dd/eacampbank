var mainbutton = document.querySelector('.qeydiyyat')
var a = document.querySelector('.input1')
var b = document.querySelector('.input2')
var c = document.querySelector('.email-error-1-title')
var d = document.querySelector('.sifre-error-1-title')

var e1 = localStorage.getItem('email') 
var s1 = localStorage.getItem('sifre')



var qeydiyyatdankec = document.querySelector('.qeydiyyatucun')

qeydiyyatdankec.addEventListener('click', () => {
    window.location.href = 'index.html'
})


mainbutton.addEventListener('click' , () => {
    if (a.value === '') {
        c.innerHTML = 'zehmet olmasa emailinizi daxil edin'
    }
    
    if (b.value === '') {
        d.innerHTML = 'zehmet olmasa sifrenizi daxil edin'
    }

    if (!(b.value === '')) {
        d.innerHTML = ''
    }

    if (!(a.value === '')) {
        c.innerHTML = ''
    }

    if ((a.value === e1) && (b.value === s1)) {
        
        window.location.href = 'index3.html'
    } else if (!(b.value === '') && !(a.value === '') && !(a.value === e1 && b.value === s1)) {
        c.innerHTML = 'email ve ya sifre dogru deyil'
    }

})