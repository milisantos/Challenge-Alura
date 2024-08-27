// Obtém os elementos de entrada e saída
const input = document.getElementById('input');
const output = document.getElementById('output');

// Botões
const criptografar = document.getElementById("cripto");
const descriptografar = document.getElementById("descripto");
const copiarTexto = document.getElementById("copiar");

// Funções de criptografia e descriptografia
const criptografarTexto = (texto) => {
    return texto
        .replace(/e/gmi, 'enter')
        .replace(/i/gmi, 'imes')
        .replace(/a/gmi, 'ai')
        .replace(/o/gmi, 'ober')
        .replace(/u/gmi, 'ufat');
};

const descriptografarTexto = (texto) => {
    return texto
        .replace(/enter/gmi, 'e')
        .replace(/imes/gmi, 'i')
        .replace(/ai/gmi, 'a')
        .replace(/ober/gmi, 'o')
        .replace(/ufat/gmi, 'u');
};

// Eventos de clique
criptografar.addEventListener('click', () => {
    output.value = criptografarTexto(input.value);
});

descriptografar.addEventListener('click', () => {
    output.value = descriptografarTexto(input.value);
});

copiarTexto.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    console.log('Texto copiado:', output.value);
});

// Função para verificar a presença de output
const verificarSeHaOutput = () => {
    const comOutput = document.getElementById('message');
    const semOutput = document.getElementById('no-message');

    if (output.value.trim() === "") {
        comOutput.style.display = 'none';
        semOutput.style.display = 'flex';
    } else {
        comOutput.style.display = 'flex';
        semOutput.style.display = 'none';
    }
};

// Verifica o output periodicamente
setInterval(verificarSeHaOutput, 500);
