const loginBtn = document.getElementById('login-btn')
const numberInput = document.getElementById('number-input')
const pinInput = document.getElementById('pin-input')



loginBtn.addEventListener('click', (e) => {
    let num=17154628971
    let pin=4545
    e.preventDefault()
    
    if (parseInt(numberInput.value) == num && parseInt(pinInput.value) == pin) {
        window.location.href = './home.html'
        
    }else{

        alert('Please Provide Correct Details')
    }



})