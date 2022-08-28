//Creating a simple bank account management app with below methods
//diposit();
//withdraw();
//getBalance();
class Bank {
    constructor (amount) {
        this.balance = amount;
    }

    withdraw (amount){
        if(amount < 0){
            return this.balance;
        }
        if(amount <= this.getBalance()){
            this.balance -= amount;
            return this.balance;
        }else{
            return 'Insufficient balance';
        }
    }
    diposit(amount){
        if(amount < 0){
            return 'Please enter valid amount';
        }
        this.balance += amount;
        return this.balance;
    }
    getBalance(){
        console.log(this.balance);
        return this.balance;
    }
}

const account = new Bank(0);
// console.log('Current Balance is: ',account.getBalance());
// console.log('Money withdrawn & current Balance is: ',account.withdraw(1000));
// console.log('Cash diposited & current Balance is: ',account.diposit(500));

const inputAmount = document.getElementById('amount-input');
const getBalanceBtn = document.getElementById('check-balance');
const withdrawBtn = document.getElementById('withdraw');
const dipositBtn = document.getElementById('diposit');
const currBalance = document.getElementById('curr-balance');
const withdrawFailed = document.getElementById('withdraw-failed');

getBalanceBtn.onclick = () => {
    // console.log(amount);
    const balance = account.getBalance();
    inputAmount.value='';
    withdrawFailed.innerText='';
    showDetails(balance);
}

withdrawBtn.onclick = () => {
    const amount = Number(inputAmount.value);
    // console.log(amount);
    const balance = account.withdraw(amount);
    inputAmount.value='';
    withdrawFailed.innerText='';
    showDetails(balance);
}

dipositBtn.onclick = () => {
    const amount = Number(inputAmount.value);
    // console.log(amount);
    const balance = account.diposit(amount);
    inputAmount.value='';
    withdrawFailed.innerText='';
    showDetails(balance);
}

const showDetails = (balance) => {
    // console.log(account.getBalance());
    if(balance === "Insufficient balance" || balance === "Please enter valid amount"){
        withdrawFailed.innerText = balance;
    }else if(balance != 'Insufficient balance'){
        currBalance.innerText = balance;
    }
     
}
