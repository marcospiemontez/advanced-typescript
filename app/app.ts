import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form') as HTMLInputElement;

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adicionar();
});