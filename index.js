const telefonesInput = document.getElementById('telefones');
const botao = document.getElementById('formatarBtn');
const resultadoDiv = document.getElementById('resultado');
const copiarBtn = document.getElementById('copiarBtn');

function formatarTelefone(telefone) {
    let novoTelefone = '';
    for (let i = 0; i < telefone.length; i++) {
        if (telefone[i] !== ' ' && telefone[i] !== '-' && telefone[i] !== '+') {
            novoTelefone += telefone[i];
        }
    }
    return novoTelefone;
}

botao.onclick = function () {
    // Obtém a lista de telefones e separa por linha
    const telefones = telefonesInput.value.split('\n');

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Formata cada telefone e exibe no div de resultado
    telefones.forEach(telefone => {
        const telefoneFormatado = formatarTelefone(telefone);
        resultadoDiv.innerHTML += `${telefoneFormatado}\n`;
    });
};

copiarBtn.onclick = function () {
    const textToCopy = resultadoDiv.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copiou')
        }).catch(err => {
            console.log(err)
        });
    } else {
        console.log('Erro')
    }
};
