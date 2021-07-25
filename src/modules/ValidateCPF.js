// 705.484.450-52 070.987.720-03
export default class ValidateCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    });
  }

  isSequency() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  generateNewCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidateCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidateCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequency()) return false;
    this.generateNewCPF();

    return this.novoCPF === this.cpfLimpo;
  }
}