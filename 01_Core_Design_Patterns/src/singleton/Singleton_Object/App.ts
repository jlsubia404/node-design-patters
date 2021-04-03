import Till from './CashRegister';
import Till1 from './CashRegister';

Till.credit(25);
Till.credit(35);


Till1.credit(20);

console.log(`Total amount Till1 ${Till1.total()}`);

Till.debit(5);
console.log(`Total amount Till ${Till.total()}`);
// Till and Till1 read and write at common private variable