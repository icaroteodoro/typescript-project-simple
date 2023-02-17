import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount';
import { NewAccount } from './class/NewAccount';
import { PeopleAccount } from './class/PeopleAccount'

const ca: CompanyAccount = new CompanyAccount('Dio.me', 1);
// GET NAME
console.log(ca.getName());
// DEPOSIT
ca.deposit(1000);
// WITHDRAW
ca.withdraw(10);
// GET BALANCE
ca.getBalance();
// GET LOAN
ca.getLoan(200);

console.log('----------------------------------------------------------------');
const pa: PeopleAccount = new PeopleAccount(123456, 'Ícaro Teodoro', 2);
// GET NAME
console.log(pa.getName());
// DEPOSIT
pa.deposit(200);
// WITHDRAW
pa.withdraw(30);
// GET BALANCE
pa.getBalance();

console.log('----------------------------------------------------------------');
const na: NewAccount = new NewAccount('Maria Ferreira', 3);
// GET NAME
console.log(na.getName());
// DEPOSIT
na.deposit(100);
// WITHDRAW
na.withdraw(10);
// GET BALANCE
na.getBalance();