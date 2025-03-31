import Pagina from "../templates/Pagina";
import FormCadastroCliente from "./formulario/FormCadastroCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState, useEffect } from "react";
import { obterClientes } from "../services/cliente";
import { obterCidades } from "../services/cidade";


export default function TelaCadastroCliente(props) {
    const [mostrarTabela, setMostrarTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState([]);
    const [cidades, setCidades] = useState([]);

    
    useEffect(()=>{
        obterClientes().then((lista)=>{ 
            setListaDeClientes(lista);
        });
    },[]);

    useEffect(()=>{
        obterCidades().then((lista)=>{
            setCidades(lista);
        });
    },[]);
    
    const [clienteSelecionado, setClienteSelecionado] = useState({  
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

      const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Pagina titulo="Tela de Cadastro de Cliente">
            {
                mostrarTabela ? <TabelaClientes mostrarTabela={mostrarTabela}
                                                setMostrarTabela={setMostrarTabela}
                                                listaDeClientes={listaDeClientes}
                                                setListaDeClientes={setListaDeClientes}
                                                setClienteSelecionado={setClienteSelecionado}
                                                setModoEdicao={setModoEdicao}
              /> :
                                <FormCadastroCliente    mostrarTabela={mostrarTabela}
                                                        setMostrarTabela={setMostrarTabela}
                                                        listaDeClientes={listaDeClientes}
                                                        setListaDeClientes={setListaDeClientes}
                                                        listaDeCidades={cidades}
                                                        clienteSelecionado={clienteSelecionado}
                                                        setClienteSelecionado={setClienteSelecionado}
                                                        modoEdicao={modoEdicao}
                                                        setModoEdicao={setModoEdicao}/>                        
            }
        </Pagina>
        
    )
}