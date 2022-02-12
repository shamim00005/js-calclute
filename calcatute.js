document.getElementById('add-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-filed');
    const inputFieldValue = inputField.value;
    const showTag = document.getElementById('show-box');
    const showboxTag = showTag.innerText;
    // balance updated
    const balanceUpdate = document.getElementById('show-balance');
    const showBalanceTag = balanceUpdate.innerText;
    balanceUpdate.innerText =parseInt(inputField.value) + parseInt(balanceUpdate.innerText);
    // blance updated end
    showTag.innerText = parseInt(showTag.innerText) + parseInt(inputField.value);
    inputField.value =''
});

document.getElementById('clear').addEventListener('click', function(){
    const clearAllCalcalute = document.getElementById('show-box');
    const all = clearAllCalcalute.innerText;
    clearAllCalcalute.innerText = '00'
});

document.getElementById('withdrow-add-button').addEventListener('click', function(){
    const depoInputFeild = document.getElementById('dipo-input-filed')
    const dipoInputFeildValue = depoInputFeild.value;
    
    const showWithdrowBalance = document.getElementById('withdrow-show-box');
    const showBoxValue = showWithdrowBalance.innerText;


     showWithdrowBalance.innerText = parseInt(showBoxValue) + parseInt(dipoInputFeildValue)

// balance updated
const balanceUpdate = document.getElementById('show-balance');
const showBalanceTag = balanceUpdate.innerText;
balanceUpdate.innerText =parseInt(balanceUpdate.innerText) - parseInt(depoInputFeild.value);
// blance updated end


     depoInputFeild.value=''
    })