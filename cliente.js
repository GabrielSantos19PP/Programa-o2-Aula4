const endPointClientes= 'http://localhost:4000/clientes';

export async function obterClientes(){
    const resposta = await fetch(endPointClientes, {method: 'GET'});
    const dados = await resposta.json();
    let clientes = [];
    if (dados.status){
        clientes = dados.clientes;
    }
    return clientes;
}

