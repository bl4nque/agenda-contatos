const form = document.getElementById('form-agenda');
const numero = [];
const contato = [];

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const numeroTelefone = document.getElementById('tel-contato');
    const nomeContato = document.getElementById('nome-contato');

    if (numero.includes(numeroTelefone.value) && contato.includes(nomeContato.value)){
        alert(`O número: ${numeroTelefone.value} já foi inserido para o contato: ${nomeContato.value}`)
    } else {

    numero.push(numeroTelefone.value);
    contato.push(nomeContato.value);


    let linha = '<tr>'
    linha += `<td> ${nomeContato.value} </td>`;
    linha += `<td> ${numeroTelefone.value} </td>`;
    linha += `</tr>`

    linhas += linha


    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas

    }

    numeroTelefone.value = ''
    nomeContato.value = ''
    


})