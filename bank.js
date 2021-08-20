// handel deposite  button
document.getElementById('deposite-button').addEventListener('click',function(){
    // get Amound deposite
const depositeInpute = document.getElementById('deposite-input');
const newDepositeAmoundText = depositeInpute.value;
const newDepositeAmound = parseFloat(newDepositeAmoundText);
// update deposite total
const depositeTotal = document.getElementById('deposite-total');
const previceDepositeText = depositeTotal.innerText;
const previceDepositeTotal =parseFloat(previceDepositeText);
const newDepositeTotal = previceDepositeTotal + newDepositeAmound;

depositeTotal.innerText = newDepositeTotal;
// update account balance 
const accoundBalance = document.getElementById('total-balance');
const previcesAccoundBalanceText = accoundBalance.innerText;
const previcesAccoundBalanceTotal = parseFloat(previcesAccoundBalanceText);
const newAccoundBalance = previcesAccoundBalanceTotal + newDepositeAmound;
accoundBalance.innerText = newAccoundBalance;
// clear deposite input 
depositeInpute.value = '';
});
// handel withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawInputText = withdrawInput.value;
   const newdrawAmount = parseFloat(withdrawInputText);
//    update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previesWithdrawText = withdrawTotal.innerText;
    const previesWithdrawAmount = parseFloat(previesWithdrawText);
    const newWithdrawAmount = newdrawAmount + previesWithdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;
    // update Account Balance
    const totalBalance = document.getElementById('total-balance');
    const previceBalanceText = totalBalance.innerText;
    const previceTotalAmount = parseFloat(previceBalanceText);
    const newTotalAmount = previceTotalAmount - withdrawInputText;
    totalBalance.innerText = newTotalAmount;
    withdrawInput.value = '';
});