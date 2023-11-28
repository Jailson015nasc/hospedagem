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


// validacao
const form = document.getElementById('form');
const username = document.getElementById('username');
const emailoucpf = document.getElementById('emailouCpf');
const telefone = document.getElementById('telefone');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    centroInputs()
    // const success = centroInputs();
    // if (success) {
    //     window.location.href = "reservado.handlebars";
    // }
});

function centroInputs() {
    let success = true;

    const usernameValue = username.value.trim();
    const emailouCpfValue = emailoucpf.value.trim();
    const telefoneValue = telefone.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Preencha este campo');
        success = false;
    } else {
        setSuccessFor(username);
    }

    if (emailouCpfValue === '') {
        setErrorFor(emailoucpf, 'Preencha este campo');
        success = false;
    } else {
        if (isValidEmail(emailouCpfValue)) {
            setSuccessFor(emailoucpf);
        } else if (isValidCPF(emailouCpfValue)) {
            setSuccessFor(emailoucpf);
        } else {
            setErrorFor(emailoucpf, 'Email ou CPF inválido, tente de novo');
            success = false;
        }
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, 'Preencha este campo');
        success = false;
    } else if (telefoneValue.length < 11) {
        setErrorFor(telefone, 'só aceitamos numero de telefone');
        success = false;
    } else {
        setSuccessFor(telefone);
    }

    return success;
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isValidEmail(value) {
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(value);
}
function isValidCPF(value) {
    const cpfRegex = /^\d{11}$/;
    return cpfRegex.test(value);
}