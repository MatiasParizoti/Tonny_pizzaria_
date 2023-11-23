let verificar = 0;

function Cadastro(nome, email, senha, confirmarSenha, telefone) {
    if (nome.length < 10) {
        console.log("Erro! Por favor insira seu nome completo");
    } else {
        verificar = verificar + 1;
        if (nome.includes("@", "#", "!", "$", "%", "¨", "*", ")", "(", "?", "/", "+", "=", "-", "_")) {
            console.log("Por favor, digite somente letras no seu nome");
        } else {
            verificar = verificar + 1;
            if (!email.includes("@")) {
                console.log("Email inválido");
            } else {
                verificar = verificar + 1;
                if (senha.length <= 7 || !senha.includes("@", "#", "!", "$", "%", "¨", "*",)) {
                    console.log("Por favor, digite sua senha com mais de 7 caracteres e use pelo menos 1 caractere especial (!,@,#,$,%,¨,&,*)");
                } else {
                    verificar = verificar + 1;
                    if (senha !== confirmarSenha) {
                        console.log("As senhas não coincidem");
                    } else {
                        verificar = verificar + 1;
                        if (telefone.length !== 11) {
                            console.log("Por favor, digite seu número de telefone corretamente");
                        } else {
                            verificar = verificar + 1;
                        }
                    }
                }
            }
        }
    }
if (verificar === 6) {
    console.log("Cadastro Feito com sucesso")
    
}
}

Cadastro("Matheus Parizoti de Araújo","matheus.parizoti@portalsesisp.org.br","123@4567","123@4567","11992106384");
console.log(verificar);
