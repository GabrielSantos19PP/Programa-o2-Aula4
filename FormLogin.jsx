import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useRef } from 'react';
import { ContextoLogin } from "../../App";

export default function FormLogin() {
    const contextoLogin = useContext(ContextoLogin);
    const usuario = useRef();
    const senha = useRef();

    function verificaCredencias(evento){
        evento.preventDefault(); // Impede o reload da página
        evento.stopPropagation();

        const usuarioInformado = usuario.current.value;
        const senhaInformado = senha.current.value;

        if (usuarioInformado === 'Gabriel' && senhaInformado === '12345') {
            contextoLogin.setDadosLogin({
                usuario: usuarioInformado,
                logado: true
            });
        } else {
            window.alert("Usuário ou senha inválidos!");
        }
    }

    return (
        <Container className="mb-3 p-4 border">
            <Form onSubmit={verificaCredencias}>
              <Form.Group className="mb-3">
                <Form.Label>Usuário</Form.Label>
                <Form.Control 
                    type="text" 
                    id="usuario"
                    name="usuario" 
                    placeholder="Informe Login" 
                    ref={usuario}/>
                <Form.Text className="text-muted">
                  Não compartilhe suas informações
                </Form.Text>    
              </Form.Group>
        
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Digite a senha" 
                    id="senha" 
                    name="senha"
                    ref={senha}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Logar
              </Button>
            </Form>
        </Container>
    );
}