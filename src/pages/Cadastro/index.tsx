import Cabecalho from '../../containers/01_Cabecalho'
import BarraLateral from '../../containers/02_BarraLateral'
import Formulario from '../../containers/03-02_Formulario'
import Rodape from '../../containers/04_Rodape'
import { LCContainer } from '../../styles'

const Cadastro = () => (
  <>
    <Cabecalho />
    <LCContainer>
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </LCContainer>
    <Rodape />
  </>
)

export default Cadastro
