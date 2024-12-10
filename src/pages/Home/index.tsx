import Cabecalho from '../../containers/01_Cabecalho'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/02_BarraLateral'
import ListaDeTarefas from '../../containers/03-01_ListaDeContatos'
import Rodape from '../../containers/04_Rodape'
import { LCContainer } from '../../styles'

const Home = () => (
  <>
    <Cabecalho />
    <LCContainer>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeTarefas />
    </LCContainer>
    <Rodape />
    <BotaoAdicionar />
  </>
)

export default Home
