import GenerateCPF from './modules/GenerateCPF'
import './assets/css/style.css';

(() => {
  const cpfGenerate = document.querySelector('.cpf')
  cpfGenerate.innerHTML = new GenerateCPF().generateNewCPF()
})()