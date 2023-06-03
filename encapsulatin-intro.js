// global scope
// has no access to what is inside the private function scope
// let bankMoney = 3000;
// let walletMoney = 10;

function totalMoney(){
    // private function scope
    let bankMoney = 3000;
    let walletMoney = 10;
    // has access both to inside and outside
    return `Your total is $${bankMoney + walletMoney}`;
}

console.log(totalMoney());
// below does not work with bankMoney in the global scope commented out 
// hence encapsulation
// console.log(bankMoney);