import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
        
      }
    deposit = (valor:number):void =>{
        console.log(`Você depositou ${valor}R$ e ganhou 10R$ de bonificação`);
        this.addBalance(valor + 10);
    }
}