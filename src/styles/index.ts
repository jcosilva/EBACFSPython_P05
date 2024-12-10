import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
  }
`

export const LCBotao = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: ${variaveis.corBranco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corPreto};
  border-radius: 8px;
  margin-right: 8px;
`

export const LCBotaoSalvar = styled(LCBotao)`
  background-color: ${variaveis.corVerde};
`

export const LCCampo = styled.input`
  padding: 8px;
  background-color: ${variaveis.corBranco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.corPreto};
  border: 3px solid ${variaveis.corPreto};
  width: 100%;
  outline: none;

  :focus {
    outline: none;
  }
`

export const LCCard = styled.div`
  background-color: ${variaveis.corBranco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const LCContainer = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const LCLabel = styled.label`
  text-wrap: nowrap;
`

export const LCMain = styled.main`
  padding: 0 40px;
  height: 85vh;
  overflow-y: scroll;
`

export const LCOpcao = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  span {
    margin-left: 6px;
  }
`

export const LCOpcoes = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  b {
    margin-right: 8px;
  }
`

export const LCTitulo = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
`

export default EstiloGlobal
