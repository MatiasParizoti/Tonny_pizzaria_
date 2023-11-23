
function login(email, senha) {
    if (clientes.length === 0) {
        console.log("Erro! Nenhum usuário cadastrado.")
        return
    }

    const usuario = clientes.find((usuario) => usuario.email === email)

    if (!usuario) {
        console.log("Usuário não encontrado. Verifique o email.")
        return
    }

    if (usuario.senha === senha) {
        console.log("Login bem-sucedido!")
    } else {
        console.log("Senha incorreta. Tente novamente.")
    }
}

// Exemplo de uso para múltiplos cadastros
Cadastro("Parizotiiiii", "mparizotio@gmail.com", "123@4567", "123@4567", "12345678901")
Cadastro("João Bruno Do Grau verde", "jhonbruno@professormoto", "12346@4242", "12346@4242", "98765432101")

// Exemplo de uso da função login
login("mparizotio@gmail.com", "123@4567")
login("jhonbruno@professormoto", "12346@4242")

console.log(clientes)


