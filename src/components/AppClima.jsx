import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Loading from "./Loading"

const AppClima = () => {

    const { resultado, cargando }= useClima()

  return (
    <>
        <main className='dos-columnas'>
            <Formulario />
            {
                cargando ? <Loading /> : resultado?.name && <Resultado />
            }
        </main>
    </>
  )
}

export default AppClima