function validarFormulario() {
    var nacionalidade = document.getElementById('nacionalidade').value;
    var documento = document.getElementById('documento').value;
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var sexo = document.getElementById('sexo').value;
    var celular = document.getElementById('celular').value;
    var cep = document.getElementById('cep').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var pais = document.getElementById('pais').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var novaSenha = document.getElementById('novaSenha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (nacionalidade === "") {
      alert("Por favor, selecione a nacionalidade.");
      return false;
    }
    
    if (documento === "") {
      alert("Por favor, preencha o campo documento.");
      return false;
    }
    
    if (nomeCompleto === "") {
      alert("Por favor, preencha o campo nome completo.");
      return false;
    }
    
    if (email === "") {
      alert("Por favor, preencha o campo e-mail.");
      return false;
    }
    
    if (dataNascimento === "") {
      alert("Por favor, preencha o campo data de nascimento.");
      return false;
    }
    
    if (sexo === "") {
      alert("Por favor, selecione o sexo.");
      return false;
    }
    
    if (celular === "") {
      alert("Por favor, preencha o campo celular.");
      return false;
    }
    
    if (cep === "") {
      alert("Por favor, preencha o campo CEP.");
      return false;
    }
    
    if (logradouro === "") {
      alert("Por favor, preencha o campo logradouro.");
      return false;
    }
    
    if (numero === "") {
      alert("Por favor, preencha o campo número.");
      return false;
    }
    
    if (bairro === "") {
      alert("Por favor, preencha o campo bairro.");
      return false;
    }
    
    if (pais === "") {
      alert("Por favor, selecione o país.");
      return false;
    }
    
    if (estado === "") {
      alert("Por favor, selecione o estado.");
      return false;
    }
    
    if (cidade === "") {
      alert("Por favor, selecione a cidade.");
      return false;
    }
    
    if (novaSenha === "") {
      alert("Por favor, preencha o campo nova senha.");
      return false;
    }
    
    if (confirmarSenha === "") {
      alert("Por favor, preencha o campo confirmar senha.");
      return false;
    }
    
    if (novaSenha !== confirmarSenha) {
      alert("A nova senha e a confirmação de senha não correspondem.");
      return false;
    }
    
    // Se todos os campos obrigatórios estiverem preenchidos corretamente
    return true;
  }