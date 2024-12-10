import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  categoria:
    | 'EMERGENCIA'
    | 'FAMILIA'
    | 'OUTROS'
    | 'SERVICOS'
    | 'TODOS'
    | 'TRABALHO'
}

const FiltroCard = ({ legenda, categoria }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const contatos = useSelector((state: RootReducer) => state.contatos)

  const verificaEstaAtivo = () => {
    const mesmaCategoria = filtro.categoria === categoria
    return mesmaCategoria
  }

  const contarTarefas = () => {
    if (categoria === 'TODOS') {
      return contatos.itens.length
    } else {
      return contatos.itens.filter((item) => item.categoria === categoria)
        .length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        categoria
      })
    )
  }

  const ativo = verificaEstaAtivo()

  const contador = contarTarefas()

  return (
    <S.LCCardSmall $ativo={ativo} onClick={filtrar}>
      <S.LCContador>{contador}</S.LCContador>
      <S.LCCategoria>{legenda}</S.LCCategoria>
    </S.LCCardSmall>
  )
}

export default FiltroCard
