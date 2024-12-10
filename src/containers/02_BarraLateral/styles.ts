import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const LCAside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.corCinza};
  height: 85vh;
`

export const LCFiltros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
