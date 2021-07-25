import ValidateCPF from "./ValidateCPF";

export default class GenerateCPF {  
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatCPF(cpf) {
      return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
      )
    }

  generateNewCPF() {
    const cpf = this.rand()
    const digiteOne = ValidateCPF.geraDigito(cpf)
    const digiteTwo = ValidateCPF.geraDigito(cpf + digiteOne)

    return this.formatCPF(cpf + digiteOne + digiteTwo)
  }
}