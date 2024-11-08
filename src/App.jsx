
import {createContext} from 'react'

const todoContext = createContext()

  export const TodoProvider = ({children}) => {
    const [textos, setTextos] = useState([])

    const addTexto = {texto, completado: false} //diz que o texto ainda está incompleto
    setTexto([...texto, novoTexto]) //adc novoTexto no fim do array texto

    const alterarTexto = (index) => {
      const novoTexto = textos.map((texto, i) => {
        if (i === index) {
          return {
            ...texto,
            completado: !texto.completado,
            completadoAt: !texto.completado ? new Date().toISOString() : null, 
          };
          return (
            
          )
        }
        })
      }
      }

function App() {
  return (
    <div 
      className="
        min-h-screen w-screen
        bg-cinza-600 text-cinza-100 antialiased
      "
    >
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="" />
      </header>

      <section className="w-full max-w-3xl m-auto ">
        
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <input onChange={(e) => setTexto(e.target.value)}
            type="text"
            className="
            bg-cinza-500 text-cinza-100
              border-[1px] border-cinza-700 rounded-md
              h-12 p-4 leading-normal outline-none
              w-full

            "  
          />
          <button 
            className="
              flex justify-center items-center
              h-12 p-4
              bg-azul-dark text-cinza-100
              hover:bg-azul
              border-0 rounded-md
              font-bold text-sm
              transition-all
            "
          >
            Criar
          </button>
        </div>


        {/* Lista */}
        <div className="flex flex-col gap-6">

          <header className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-azul">
              <p className="text-sm">Tarefas criadas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                0
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-roxo">
              <p className="text-sm">Concluídas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                0 de 0
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-3">
            <img classname="" src="Empty.svg" alt="" />
          </div>

        </div>

      </section>

    </div>
  )
}

export default App
