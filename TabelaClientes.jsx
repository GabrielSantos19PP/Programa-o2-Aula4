import { Alert, Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    function excluirCliente(cliente){
        const novaLista = props.listaDeClientes.filter(c => c.cpf != cliente.cpf);
        props.setListaDeClientes(novaLista);
    }

    function selecionarClienteParaEdicao(cliente){
        props.setClienteSelecionado(cliente);
        props.setModoEdicao(true);
        props.setMostrarTabela(false);
    }
    return(
        <Container>
            <Alert className="text-center"><h1>Tabela Clientes</h1></Alert>
            <Button onClick={() =>{
                props.setMostrarTabela(false);
            }}className="mb-3" variant="primary">Novo Cliente</Button>{' '}
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>CPF</th>
                    <th>Modelo computador</th>
                    <th>Usuario</th>
                    <th>Placa de Vídeo</th>
                    <th>Processador</th>
                    <th>Placa Mãe</th>
                    <th>Memória RAM</th>
                    <th>Fonte</th>
                    <th>Senha</th>
                    <th>Cidade</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props?.listaDeClientes?.map((cliente) => {
                            return <tr key={cliente.cpf}>
                                <td>{cliente.cpf}</td>
                                            <td>{cliente.modelocomputador}</td>
                                            <td>{cliente.usuario}</td>
                                            <td>{cliente.placaDeVideo}</td> {/* Exibir esta propriedade */}
                                            <td>{cliente.processador}</td>
                                            <td>{cliente.placaMae}</td> {/* Exibir esta propriedade */}
                                            <td>{cliente.memoriaRam}</td> {/* Exibir esta propriedade */}
                                            <td>{cliente.fonte}</td>
                                            <td>{cliente.senha}</td>
                                            <td>{cliente.cidade.nome + "/" + cliente.cidade.estado}</td> 
                                            <td>{cliente.endereco}</td>
                                            <td>{cliente.bairro}</td>
                                            <td>{cliente.telefone}</td>
                                            <td>{cliente.email}</td>                                          
                                <td>
                                    <Button onClick={() => selecionarClienteParaEdicao(cliente)} variant="warning">Editar</Button>{' '}
                                    <Button onClick={() => {
                                        if (window.confirm("Deseja excluir?")){
                                        excluirCliente(cliente)
                                        }
                                    }} variant="danger">Excluir</Button>{' '}
                                </td>
                            </tr>
                        
                    })
                }
                </tbody>
                </Table>
        </Container>
    );
}