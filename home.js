
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
    window.location.href='/index.html'
})







