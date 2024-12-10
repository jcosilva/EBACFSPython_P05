import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import FiltroCard from '../../components/FiltroCard'
import { LCBotao, LCCampo } from '../../styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.LCAside>
      <div>
        {mostrarFiltros ? (
          <>
            <LCCampo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.LCFiltros>
              <FiltroCard
                categoria={enums.Categoria.EMERGENCIA}
                legenda="EMERGENCIA"
              />
              <FiltroCard
                categoria={enums.Categoria.FAMILIA}
                legenda="FAMILIA"
              />
              <FiltroCard categoria={enums.Categoria.OUTROS} legenda="OUTROS" />
              <FiltroCard
                categoria={enums.Categoria.SERVICOS}
                legenda="SERVICOS"
              />
              <FiltroCard
                categoria={enums.Categoria.TRABALHO}
                legenda="TRABALHO"
              />
              <FiltroCard categoria="TODOS" legenda="TODOS" />
            </S.LCFiltros>
          </>
        ) : (
          <LCBotao onClick={() => navigate('/')}>
            Volta a Lista de Contatos
          </LCBotao>
        )}
      </div>
    </S.LCAside>
  )
}
export default BarraLateral
