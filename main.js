const billAmount = document.querySelector('.bill-amount');
const noOfPerson = document.querySelector('.number-of-people')
const customTip = document.querySelector('.custom');
const tipButtons = document.querySelectorAll('.btn');
const tipAmount = document.querySelector('.tip-amount')
const amountPerPerson = document.querySelector('.total-per-person')
const resetBtn = document.querySelector('.reset')
let moneyPerPerson;


noOfPerson.addEventListener('input', () => { 
    if (noOfPerson.value != "" || noOfPerson.value != 0)  {
        moneyPerPerson =  parseInt(billAmount.value) / parseInt(noOfPerson.value);
        amountPerPerson.textContent = `$${moneyPerPerson}`
    }else {
        amountPerPerson.textContent = `$0.00` 
    } 
})


