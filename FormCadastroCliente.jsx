import { Form, Row, Col, Button, InputGroup, Alert } from "react-bootstrap";
import { useState } from "react";

export default function FormCadastroCliente(props) {
  const [validado, setValidado] = useState(false);
  const [cliente, setCliente] = useState(props.clienteSelecionado);

  function manipularSubmissao(evento) {
    evento.preventDefault();
    const form = evento.currentTarget;

    if (form.checkValidity() === false) {
      setValidado(true);
    } 
    else {
        if (!props.modoEdicao){
          
            props.setListaDeClientes([...props.listaDeClientes, cliente]);
        }
        else{
            const novaLista = props.listaDeClientes;
            const indice = props.listaDeClientes.findIndex(c => c.cpf == cliente.cpf);
            novaLista[indice] = cliente;
            props.setListaDeClientes(novaLista); 
        }
        props.setModoEdicao(false);
        props.setClienteSelecionado({
            cpf: "",
            modelocomputador: "",
            usuario: "",
            placaDeVideo: "",
            processador: "",
            placaMae: "",
            memoriaRam: "",
            fonte: "",
            senha: "",
            cidade: { id: 1, nome: "Sao Paulo", estado: "SP" }
          });
        props.setMostrarTabela(true);
    }

    evento.stopPropagation();
  }

  function atualizarCliente(evento) {
    setCliente({ ...cliente, [evento.target.name]: evento.target.value });
  }

  function selecionarCidade(evento) {
    const id_cidade = evento.target.value;
    const indice = props.listaDeCidades.findIndex(cidade => cidade.id == id_cidade);
    setCliente({ ...cliente, cidade: props.listaDeCidades[indice] });
  }

  return (
    <>
      <div className="border text-center">
        <h3>Formulário de Cadastro de Cliente</h3>
      </div>
      <Alert className="text-center"><h2>Cadastro Cliente</h2></Alert>
      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cliente.cpf}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe o CPF
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Modelo computador</Form.Label>
            <Form.Control
              required
              id="modelocomputador"
              name="modelocomputador"
              type="text"
              placeholder="Modelo computador"
              value={cliente.modelocomputador}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe o modelo do computador
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Usuario</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder=""
                id="usuario"
                name="usuario"
                aria-describedby="inputGroupPrepend"
                required
                value={cliente.usuario}
                onChange={atualizarCliente}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, insira um usuario.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Placa de Vídeo</Form.Label>
            <Form.Control
              required
              id="placaDeVideo"
              name="placaDeVideo"
              type="text"
              placeholder="Placa de vídeo"
              value={cliente.placaDeVideo}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe a placa de vídeo
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Processador</Form.Label>
            <Form.Control
              required
              id="processador"
              name="processador"
              type="text"
              placeholder="Processador"
              value={cliente.processador}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe o processador
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Placa Mãe</Form.Label>
            <Form.Control
              required
              id="placaMae"
              name="placaMae"
              type="text"
              placeholder="Placa mãe"
              value={cliente.placaMae}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe a placa mãe
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Memória RAM</Form.Label>
            <Form.Control
              required
              id="memoriaRam"
              name="memoriaRam"
              type="text"
              placeholder="Memória RAM"
              value={cliente.memoriaRam}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe a memória RAM
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Fonte</Form.Label>
            <Form.Control
              required
              id="fonte"
              name="fonte"
              type="text"
              placeholder="Fonte"
              value={cliente.fonte}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe a fonte
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              required
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              value={cliente.senha}
              onChange={atualizarCliente}
            />
            <Form.Control.Feedback type="invalid">
              Informe uma senha
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
          <Form.Label>Cidade</Form.Label>
            <Form.Select aria-label="Default select example" value={cliente.cidade.id} onChange={selecionarCidade}>
              <option disabled>Selecione a Cidade</option>
              {props?.listaDeCidades.map((cidade) => (
                <option key={cidade.id} value={cidade.id}>
                  {cidade.id + " - " + cidade.nome + "/" + cidade.uf}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="4">
                <Form.Label>Endereco</Form.Label>
                <Form.Control
                    required
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Rua/Avenida/Travessa"
                    defaultValue=""
                    value={cliente.endereco}
                    onChange={atualizarCliente}
                />
                <Form.Control.Feedback type="invalid">Por favor informe o endereco</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="4">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                    required
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Vila/Jardim"
                    defaultValue=""
                    value={cliente.bairro}
                    onChange={atualizarCliente}
                />
                <Form.Control.Feedback type="invalid">Por favor informe o bairro</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row ClassName="mb=3">
              <Form.Group as={Col} md="4" mb="2">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                      required
                      type="text"
                      id="telefone"
                      name="telefone"
                      placeholder="( ) 0000-0000"
                      defaultValue=""
                      value={cliente.telefone}
                      onChange={atualizarCliente}
                  />
                  <Form.Control.Feedback type="invalid">Por favor informe o telefone</Form.Control.Feedback>
              </Form.Group>
        </Row>
        <Row ClassName="mb=3">
              <Form.Group as={Col} md="4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      required
                      type="text"
                      id="email "
                      name="email"
                      placeholder="email@dominio.com"
                      defaultValue=""
                      value={cliente.email}
                      onChange={atualizarCliente}
                  />
                  <Form.Control.Feedback type="invalid">Por favor informe o email</Form.Control.Feedback>
              </Form.Group>
        </Row>
        <Button type="submit">{props.modoEdicao ? "Atualizar" : "Cadastrar"}</Button>
        <Button onClick={() => {
            props.setModoEdicao(false);
            props.setMostrarTabela(true)
            }}>Voltar</Button>
      </Form>
    </>
  );
}
