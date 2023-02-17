import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  getLoan = (valor:number): void => {
    if(this.validateStatus() === true){
      this.addBalance(valor);
      console.log(`Voce pegou um empréstimo de ${valor}R$`)
    }else{
      console.log('Voce não pode pegar um empréstimo')
    }
    
  }
}
