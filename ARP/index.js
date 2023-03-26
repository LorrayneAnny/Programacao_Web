const lista = document.getElementById('medicamentos-lista');
const form = document.getElementById('medicamentos-form');
const input = document.getElementById('medicamento-nome');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = input.value.trim();
  if (nome) {
    const item = document.createElement('li');
    item.innerText = nome;
    const botao = document.createElement('button');
    botao.classList.add('remover');
    botao.innerText = 'Remover';
    botao.addEventListener('click', () => {
      item.remove();
    });
    item.appendChild(botao);
    lista.appendChild(item);
    input.value = '';
    input.focus();
  }
});

lista.addEventListener('click', (event) => {
  if (event.target.classList.contains('remover')) {
    event.target.parentNode.remove();
  }
});
