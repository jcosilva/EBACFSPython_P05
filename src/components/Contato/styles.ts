import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { LCBotao } from '../../styles'

export const LCBarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const LCBotaoCancelarRemover = styled(LCBotao)`
  background-color: ${variaveis.corVermelho};
`
