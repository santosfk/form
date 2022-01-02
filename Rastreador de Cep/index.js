'use strict'

function CleanForm() {
   alert('seus dados foram salvos')
   document.getElementById('cidade').value = ''
   document.getElementById('bairro').value = ''
   document.getElementById('endereco').value = ''
   document.getElementById('estado').value = ''
   document.getElementById('cep').value = ''
   document.getElementById('numero').value = ''
   document.getElementById('nome').value = ''
   document.getElementById('email').value = ''
}

const AdressReceive = (endereco) => {
   document.getElementById('cidade').value = endereco.localidade;
   document.getElementById('bairro').value = endereco.bairro;
   document.getElementById('endereco').value = endereco.logradouro;
   document.getElementById('estado').value = endereco.uf;
   console.log(endereco)
}




const searchCep = async () => {

   const cep = document.getElementById('cep').value
   const url = `http://viacep.com.br/ws/${cep}/json/`;



   if (cep.length == 8) {
      const dados = await fetch(url)
      const endereco = await dados.json()
      if (endereco.hasOwnProperty('erro')) {
         document.getElementById('endereco').value = 'endereço nao encontrado';
      } else {
         AdressReceive(endereco)
      }

   } else {
      document.getElementById('endereco').value = 'o cep está incorreto';
   }


}


document.getElementById('cep')
   .addEventListener('focusout', searchCep);