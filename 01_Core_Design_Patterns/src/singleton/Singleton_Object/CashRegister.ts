let cash: number =0; // this varibale is private


const CashRegister: any = {
    credit: (amount: number) => {
        cash = cash + amount;

        return cash;
    },
    debit: (amount: number)=> {
        if(amount <= cash) {
            cash = cash - amount;
            return true;
        } else {
            return false;
        }
    },
    total: () => cash,
};

export default CashRegister; 