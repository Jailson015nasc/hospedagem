let suites = [
    { img: 'img/suite1.jpg', titulo: 'Suíte, N°1', preco: '140,00R$' },
    { img: 'img/suite2.jpg', titulo: 'Suíte, N°2', preco: '160,00R$' },
    { img: 'img/suite3.jpg', titulo: 'Suíte, N°3', preco: '180,00R$' },
    { img: 'img/suite4.jfif', titulo: 'Suíte, N°4', preco: '200,00R$' },
    { img: 'img/suite5.jpg', titulo: 'Suíte, N°5', preco: '220,00R$' },
    { img: 'img/suite6.jpg', titulo: 'Suíte, N°6', preco: '240,00R$' },
    { img: 'img/suite7.jpg', titulo: 'Suíte, N°7', preco: '260,00R$' },
    { img: 'img/suite8.jpg', titulo: 'Suíte, N°8', preco: '300,00R$' },
    { img: 'img/suite9.jpg', titulo: 'Suíte, N°9', preco: '320,00R$' },
    { img: 'img/suite10.jpg', titulo: 'Suíte, N°10', preco: '360,00R$' },
    { img: 'img/suite11.jpg', titulo: 'Suíte, N°11', preco: '400,00R$' },
    { img: 'img/suite12.jpg', titulo: 'Suíte, N°12', preco: '420,00R$' },
    { img: 'img/suite13.jpg', titulo: 'Suíte, N°13', preco: '460,00R$' },
    { img: 'img/suite14.jpg', titulo: 'Suíte, N°14', preco: '480,00R$' },
    { img: 'img/suite15.jpg', titulo: 'Suíte, N°15', preco: '500,00R$' },
];

let suiteAtual = 0;
let suiteElement = document.querySelector('.caixa-suite');
let imgElement = suiteElement.querySelector('.img');
let tituloElement = suiteElement.querySelector('h2');
let precoElement = suiteElement.querySelector('p');
 
function atualizarSuite() {
    imgElement.src = suites[suiteAtual].img;
    tituloElement.textContent = suites[suiteAtual].titulo;
    precoElement.innerHTML = `Preço <br> ${suites[suiteAtual].preco}`;

    document.getElementById('suiteEscolhida').value = suites[suiteAtual].titulo;
    document.getElementById('precoEscolhida').value = suites[suiteAtual].preco;

}
atualizarSuite();

document.querySelector('.ant').addEventListener('click', function () {
    suiteAtual--;
    if (suiteAtual < 0) {
        suiteAtual = suites.length - 1;
    }
    atualizarSuite();
});
document.querySelector('.pro').addEventListener('click', function () {
    suiteAtual++;
    if (suiteAtual >= suites.length) {
        suiteAtual = 0;
    }
    atualizarSuite();
});



// ResultHorario
  // Função para obter a data e hora atual formatada
  function getCurrentDateTime() {
    const now = new Date();
    const options = {  hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return now.toLocaleDateString('pt-BR', options);
  }

  // Função para atualizar os elementos HTML com a data e hora atual
  function updateDateTime() {
    const currentDateTime = getCurrentDateTime();

    // Atualizar elementos apenas para check-in
    document.getElementById("checkInTime").textContent = currentDateTime.split(" ")[1];
  }

  // Chamar a função para a primeira atualização
  updateDateTime();

  // Atualizar a cada segundo
  setInterval(updateDateTime, 1000);





   // Extrai o número do dia da URL
   var numeroDia = window.location.search.replace("?dia=", "");

   // Exibe o número do dia na página
   document.getElementById("checkInDate").innerText = numeroDia;