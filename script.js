document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio do formulário

    // Exemplo de envio de dados (simulado)
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("contato-form").reset();
});
