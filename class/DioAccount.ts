export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus() === true){
      this.balance = this.balance + valor;
      console.log(`Voce depositou ${valor}R$`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.status === true && this.balance > valor){
      this.balance = this.balance - valor;
      console.log(`Voce sacou ${valor}R$`)
    }
  }
  getBalance = (): void => {
    console.log(`O seu saldo é de: ${this.balance}R$`)
  }
  addBalance = (valor: number):void =>{
    this.balance += valor;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
