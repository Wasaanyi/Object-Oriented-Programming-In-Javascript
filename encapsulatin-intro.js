// global scope
// has no access to what is inside the private function scope
let backMoney = 3000;
let walletMoney = 10;

function totalMoney(){
    // private function scope
    // has access both to inside and outside
    return `Your total is $${backMoney + walletMoney}`;
}

console.log(totalMoney());