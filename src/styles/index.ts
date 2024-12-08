import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinza4};
  border-color: ${variaveis.cinza4};
  width: 100%;
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza5};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
