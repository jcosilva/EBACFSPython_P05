import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  $ativo: boolean
}

export const LCCardSmall = styled.div<Props>`
  padding: 8px;
  border: 3px solid ${variaveis.corPreto};
  background-color: ${(props) =>
    props.$ativo ? variaveis.corAmarelo : variaveis.corBranco};
  color: ${variaveis.corPreto};
  border-radius: 8px;
  cursor: pointer;
`

export const LCContador = styled.span`
  font-size: 12px;
  font-weight: bold;
  display: block;
`

export const LCCategoria = styled.span`
  font-size: 10px;
  font-weight: bold;
`
