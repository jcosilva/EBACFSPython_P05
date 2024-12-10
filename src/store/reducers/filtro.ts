import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  categoria:
    | 'EMERGENCIA'
    | 'FAMILIA'
    | 'OUTROS'
    | 'SERVICOS'
    | 'TODOS'
    | 'TRABALHO'
}

const initialState: FiltroState = {
  termo: '',
  categoria: 'TODOS'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.categoria = action.payload.categoria
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
