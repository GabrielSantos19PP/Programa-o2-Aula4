import TelaCadastroCliente from "./telas/TelaCadastroCliente";
import TelaHardware from "./telas/TelaHardware";
import TelaLogin from "./telas/TelaLogin";
import TelaMenu from "./telas/TelaMenu";
import { useState } from "react";
import { createContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ContextoLogin = createContext();

function App() {
  const [dadosLogin, setDadosLogin] = useState({ usuario: "", logado: false});
  
  if (dadosLogin.logado){
  return (
    <div className="App">
    <ContextoLogin.Provider value={{dadosLogin, setDadosLogin}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<TelaMenu/>}></Route>
        <Route path="/cliente" element={<TelaCadastroCliente/>}></Route>
        <Route path="/hardware" element={<TelaHardware/>}></Route>
      </Routes>
    </BrowserRouter>
    </ContextoLogin.Provider>
    </div>
  );
} else {
    return (
      <div className="App">
        <ContextoLogin.Provider value={{dadosLogin, setDadosLogin}}>
        <TelaLogin/>
        </ContextoLogin.Provider>
      </div>
    );
}
}

export default App;
