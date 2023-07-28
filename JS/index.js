var loginsec=document.querySelector('.login-section')
var loginlink=document.querySelector('.login-link')
var registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})