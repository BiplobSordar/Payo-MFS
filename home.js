// let addMoney = document.getElementById('addMoney')
// let cashOut = document.getElementById('cashOut')
// let getBonus = document.getElementById('getBonus')
// let payBill = document.getElementById('payBill')
// let transaction = document.getElementById('transaction')
// let transferMoney = document.getElementById('transferMoney')
// let currentBalance = document.getElementById('balance')

// // Form Sections

// // let latestPaymentSection = document.getElementById('latestPaymentSection')
// // let addMoneyForm = document.getElementById('addMoneyForm')
// // let cashOutForm = document.getElementById('cashOutForm')
// // let transferMoneyForm = document.getElementById('transferMoneyForm')
// // let getBonusForm = document.getElementById('getBonusForm')
// // let payBillForm = document.getElementById('payBillForm')
// // let transactionHistory = document.getElementById('transactionHistory')

// let balance = document.getElementById('balance')

// const forms = {
//     latestPaymentSection: document.getElementById('latestPaymentSection'),
//     addMoneyForm: document.getElementById('addMoneyForm'),
//     cashOutForm: document.getElementById('cashOutForm'),
//     transferMoneyForm: document.getElementById('transferMoneyForm'),
//     getBonusForm: document.getElementById('getBonusForm'),
//     payBillForm: document.getElementById('payBillForm'),
//     transactionHistory: document.getElementById('transactionHistory')
// };
// let gPin = 4545


// let previousForm = forms.latestPaymentSection;
// let curr

// let elements = [addMoney, cashOut, getBonus, payBill, transaction, transferMoney]



// elements.forEach((ele) => {
//     const nameValue = ele.getAttribute('name');


//     ele.addEventListener('click', (e) => {
//         if (curr) {

//             curr.classList.remove('bg-blue-200')
//         }
//         ele.classList.add('bg-blue-200')
//         curr = ele

//         showform(nameValue)


//     })
// })

// function getCurrentTime() {
//     const now = new Date();
//     return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
// }

// function showform(nameValue) {

//     console.log(nameValue)

//     switch (nameValue) {

//         case "addMoneyForm":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]



//             break;

//         case "cashOutForm":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]


//             break


//         case "getBonusForm":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]



//             break

//         case "payBillForm":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]



//             break

//         case "transferMoneyForm":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]



//             break


//         case "transactionHistory":
//             previousForm.classList.add('hidden')

//             forms[nameValue].classList.remove('hidden')

//             previousForm = forms[nameValue]



//             break

//         default:

//             break;
//     }

// }

// function createTransaction(text) {

//     const transactionDiv = document.createElement('div');

//     transactionDiv.className = 'w-full h-[70px] mb-3 flex justify-between items-center px-3 bg-white rounded-md';


//     transactionDiv.innerHTML = `
//         <div class="flex h-[40px] gap-4 justify-center items-center">
//             <img src="./assets/money1.png" class="w-[20px] h-[20px]" alt="Transaction Icon">
//             <div>
//                 <h3 class="font-semibold text-[16px]">${text}</h3>
//                 <p class="text-gray-500 text-[12px]">Today ${getCurrentTime()}</p>
//             </div>
//         </div>
//         <div>
//             <i class="fa-solid fa-ellipsis-vertical"></i>
//         </div>
//     `;

//     forms.latestPaymentSection.appendChild(transactionDiv);
// }

// document.getElementById('addMoney-btn').addEventListener('click', (e) => {

//     e.preventDefault()

//     let value = document.getElementById('addMoney-input').value
//     let bankAc = document.getElementById("bank-acc-num").value
//     let pin = document.getElementById('add-money-pin').value
//     console.log(pin, 'this is')

//     if (bankAc.length < 11) {
//         alert("Invalid Account Number")
//         return
//     }

//     if (parseInt(pin) !== gPin) {
//         alert('Invalid Pin Number')
//         return
//     }


//     balance.innerText = Number(balance.innerText) + Number(value)



//     createTransaction('Add Money')

//     forms.addMoneyForm.classList.add('hidden')

//     forms.latestPaymentSection.classList.remove('hidden')


//     previousForm = forms.latestPaymentSection



// })


// document.getElementById('cashOutBtn').addEventListener('click', (e) => {

//     e.preventDefault()
//     let value = document.getElementById('cashout-input').value
//     let acount = document.getElementById("cashout-account-num").value
//     let pin = document.getElementById('cashout-pin').value
//     console.log(acount)


//     if (acount.length < 11) {
//         alert("Invalid Account Number")
//         return
//     }

//     if (parseInt(pin) !== gPin) {
//         alert('Invalid Pin Number')
//         return
//     }

//     balance.innerText = Number(balance.innerText) - Number(value)


//     createTransaction('Cash Out')

//     forms.cashOutForm.classList.add('hidden')

//     forms.latestPaymentSection.classList.remove('hidden')


//     previousForm = forms.latestPaymentSection
// })



// document.getElementById('get-bonus-btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     let cupon = document.getElementById('bonus-cupon').value


//     if (cupon.length != 8) {
//         alert('Please Provide 8 Digit Valid Cupon Number')
//         return
//     }


//     balance.innerText = parseInt(balance.innerText) + Math.floor(Math.random() * 8) * 10

//     createTransaction('Get Bonus')

//     forms.getBonusForm.classList.add('hidden')

//     forms.latestPaymentSection.classList.remove('hidden')


//     previousForm = forms.latestPaymentSection

// })



// document.getElementById('biller-acount-btn').addEventListener('click', (e) => {
//     e.preventDefault()

//     let acc = document.getElementById('biller-acount-num').value
//     let pin = document.getElementById('biller-acount-pin').value
//     let amo = document.getElementById('biller-acount-amount').value

//     console.log(amo, 'thsi is the value')




//     if (acc.length < 11) {
//         alert("Invalid Account Number")
//         return
//     }

//     if (parseInt(pin) !== gPin) {
//         alert('Invalid Pin Number')
//         return
//     }



//     balance.innerText = parseInt(balance.innerText) - parseInt(amo)

//     createTransaction('Pay Bill')

//     forms.payBillForm.classList.add('hidden')

//     forms.latestPaymentSection.classList.remove('hidden')


//     previousForm = forms.latestPaymentSection

// })


// document.getElementById('transfermoney-btn').addEventListener('click', (e) => {
//     e.preventDefault()

//     let acc = document.getElementById('transfermoney-acount-num').value
//     let pin = document.getElementById('transfermoney-acount-pin').value
//     let amo = document.getElementById('transfermoney-acount-amount').value





//     if (acc.length < 11) {
//         alert("Invalid Account Number")
//         return
//     }

//     if (parseInt(pin) !== gPin) {
//         alert('Invalid Pin Number')
//         return
//     }



//     balance.innerText = parseInt(balance.innerText) - parseInt(amo)

//     createTransaction('Transfer Money')

//     forms.transferMoneyForm.classList.add('hidden')

//     forms.latestPaymentSection.classList.remove('hidden')


//     previousForm = forms.latestPaymentSection

// })








//  Get all main elements


let balance = document.getElementById('balance');

let gPin = 4545;

const forms = {

    latestPaymentSection: document.getElementById('latestPaymentSection'),

    addMoneyForm: document.getElementById('addMoneyForm'),

    cashOutForm: document.getElementById('cashOutForm'),

    transferMoneyForm: document.getElementById('transferMoneyForm'),

    getBonusForm: document.getElementById('getBonusForm'),

    payBillForm: document.getElementById('payBillForm'),

    transactionHistory: document.getElementById('transactionHistory')
};

let elements = [

    { el: document.getElementById('addMoney'), name: "addMoneyForm" },

    { el: document.getElementById('cashOut'), name: "cashOutForm" },

    { el: document.getElementById('getBonus'), name: "getBonusForm" },

    { el: document.getElementById('payBill'), name: "payBillForm" },

    { el: document.getElementById('transaction'), name: "transactionHistory" },

    { el: document.getElementById('transferMoney'), name: "transferMoneyForm" }
];


let previousForm = forms.latestPaymentSection;

let curr = null;






// show/hide forms


function showForm(nameValue) {

    if (previousForm) previousForm.classList.add('hidden');


    forms[nameValue].classList.remove('hidden');


    previousForm = forms[nameValue];

}





//  get current time


function getCurrentTime() {

    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}




//  create transaction item


function createTransaction(text) {
    const transactionDiv = document.createElement('div');
    transactionDiv.className = 'w-full h-[70px] mb-3 flex justify-between items-center px-3 bg-white rounded-md';

    transactionDiv.innerHTML = `
        <div class="flex h-[40px] gap-4 justify-center items-center">
            <img src="./assets/money1.png" class="w-[20px] h-[20px]" alt="Transaction Icon">
            <div>
                <h3 class="font-semibold text-[16px]">${text}</h3>
                <p class="text-gray-500 text-[12px]">Today ${getCurrentTime()}</p>
            </div>
        </div>
        <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;

    forms.latestPaymentSection.appendChild(transactionDiv);
}



// validate account and pin



function validateAccountAndPin(account, pin) {

    if (account.length < 11) {

        alert("Invalid Account Number")

        return false
    }
    if (parseInt(pin) !== gPin) {

        alert("Invalid Pin Number")

        return false;
    }
    return true;
}

//  update balance & transaction


function processTransaction(amount, type, isAddition = false) {

    balance.innerText = isAddition

        ? Number(balance.innerText) + Number(amount)

        : Number(balance.innerText) - Number(amount);

    createTransaction(type);
    showForm("latestPaymentSection");
}












//  Menu Click Handling

elements.forEach(({ el, name }) => {
    el.addEventListener('click', () => {
        if (curr) {
            curr.classList.remove('bg-blue-200')
        };
        el.classList.add('bg-blue-200');

        curr = el;

        showForm(name);
    });
});


//  Add Money



document.getElementById('addMoney-btn').addEventListener('click', (e) => {

    e.preventDefault();

    let value = document.getElementById('addMoney-input').value;

    let bankAc = document.getElementById("bank-acc-num").value;

    let pin = document.getElementById('add-money-pin').value;

    if (!validateAccountAndPin(bankAc, pin)) {

        return;

    }


    processTransaction(value, "Add Money", true);
});


// Cash Out

document.getElementById('cashOutBtn').addEventListener('click', (e) => {


    e.preventDefault()

    let value = document.getElementById('cashout-input').value

    let account = document.getElementById("cashout-account-num").value

    let pin = document.getElementById('cashout-pin').value


    if (!validateAccountAndPin(account, pin)) return

    processTransaction(value, "Cash Out")

});


// Get Bonus
document.getElementById('get-bonus-btn').addEventListener('click', (e) => {

    e.preventDefault()

    let cupon = document.getElementById('bonus-cupon').value

    if (cupon.length !== 8) {

        alert('Please Provide 8 Digit Valid Cupon Number')
        return;
    }

    let bonus = Math.floor(Math.random() * 8) * 10


    processTransaction(bonus, "Get Bonus", true)
});


//  Pay Bill


document.getElementById('biller-acount-btn').addEventListener('click', (e) => {

    e.preventDefault()

    let acc = document.getElementById('biller-acount-num').value

    let pin = document.getElementById('biller-acount-pin').value

    let amo = document.getElementById('biller-acount-amount').value


    if (!validateAccountAndPin(acc, pin)) {

        return;
    }



    processTransaction(amo, "Pay Bill")

});


//  Transfer Money

document.getElementById('transfermoney-btn').addEventListener('click', (e) => {

    e.preventDefault()

    let acc = document.getElementById('transfermoney-acount-num').value

    let pin = document.getElementById('transfermoney-acount-pin').value

    let amo = document.getElementById('transfermoney-acount-amount').value

    if (!validateAccountAndPin(acc, pin)) {

        return
    }
    processTransaction(amo, "Transfer Money")
});





document.getElementById('logout-btn').addEventListener('click',(e)=>{
    window.location.href='/login.html'
})







