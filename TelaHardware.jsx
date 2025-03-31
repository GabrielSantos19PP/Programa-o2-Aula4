import Pagina from "../templates/Pagina";

export default function TelaHardware(props) {
    return (
        <Pagina titulo="Cadastro de Hardware/Peças">
            <div className="flex flex-col space-y-4">
                <a href="/" className="text-blue-500 hover:underline">Voltar ao Menu</a>
                <form className="space-y-2">
                    <label>ID da Peça</label>
                    <input type="text" className="border p-2 w-full" />

                    <label>Nome da Peça</label>
                    <input type="text" className="border p-2 w-full" />

                    <label>Fabricante</label>
                    <input type="text" className="border p-2 w-full" />

                    <label>Quantidade</label>
                    <input type="number" className="border p-2 w-full" />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Buscar</button>
                </form>
            </div>
        </Pagina>
    );
}