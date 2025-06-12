// Essa função será chamada quando o botão for clicado
function GerarCronometro() {
  const numeroInput = document.getElementById('numeroInput');
  let numero = parseInt(numeroInput.value);

  const resultadoDiv = document.getElementById('Resultado_Cronometro');
  resultadoDiv.innerHTML = '';

  if (isNaN(numero)) {
    resultadoDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
    return;
  }

  resultadoDiv.innerHTML += `<h2>Cronômetro do ${numero}</h2>`;

  for (let i = numero; i >= 0; i--) {
    resultadoDiv.innerHTML += `<p>${i}</p>`;
  }
}

document.getElementById('GerarBotao').addEventListener('click', GerarCronometro);
