const billAmount = document.querySelector('.bill-amount');
const noOfPerson = document.querySelector('.number-of-people')
const customTip = document.querySelector('.custom');
const tipButtons = [...document.querySelectorAll('.btn')]; //CONVERT NODELIST TO ARRAY
const tipAmountPerPerson = document.querySelector('.tip-amount')
const amountPerPerson = document.querySelector('.total-per-person')
const resetBtn = document.querySelector('.reset')
let moneyPerPerson;

//CALCULATE TIP WHEN A USER CLICKS ON A SELECT TIP BUTTON
tipButtons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.textContent == '5%'){
           tipCalculation('5')
        }
        if(e.target.textContent == '10%'){
            tipCalculation('10')
         }
         if(e.target.textContent == '15%'){
            tipCalculation('15')
         }
         if(e.target.textContent == '25%'){
            tipCalculation('25')
         }
         if(e.target.textContent == '50%'){
            tipCalculation('50')
         }
    })
})

//CALCULATE TIPS & BILLS WHEN A USER INPUT IN THE CUSTOM BILL INPUT
customTip.addEventListener('input', () => {
    num = parseInt(customTip.value)
    tipCalculation(num)
})

//REUSABLE FUNCTION FOR CALCULATING TIPS
function tipCalculation (num){
    let bill = parseInt(billAmount.value);
    let totalTip = parseInt((bill * num) / 100)
    let totalBillPlusTip = totalTip + bill;
    console.log(totalBillPlusTip)
    
    noOfPerson.addEventListener('input', (e) => { 

     if(noOfPerson.value != '' || noOfPerson.value != 0 ){
        amountPerPerson.textContent = `$${totalBillPlusTip / parseInt(noOfPerson.value)}`
        tipAmountPerPerson.textContent = `$${totalTip / parseInt(noOfPerson.value)}`
    }else if (e.target.value == 0){
        //noOfPerson.parentElement.classList.add('error')
        amountPerPerson.textContent = `$0.00`
        tipAmountPerPerson.textContent = `$0.00`
        console.log('hiiiiii')
    }
    })
}

//RESET ALL INPUT WHEN THE RESET BUTTON IS CLICKED
resetBtn.addEventListener('click', () => {
    billAmount.value = '';
    noOfPerson.value = '';
    customTip.value = ''
    tipAmountPerPerson.textContent = `$0.00`
    amountPerPerson.textContent = `$0.00`
    //console.log('rreddddddd')
})