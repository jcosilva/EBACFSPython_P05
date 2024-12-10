import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Policia',
      telefone01: '190',
      telefone02: '-',
      email: '-',
      categoria: enums.Categoria.EMERGENCIA
    },
    {
      id: 2,
      nome: 'SAMU',
      telefone01: '192',
      telefone02: '-',
      email: '-',
      categoria: enums.Categoria.EMERGENCIA
    },
    {
      id: 3,
      nome: 'Defesa Civil',
      telefone01: '199',
      telefone02: '-',
      email: '-',
      categoria: enums.Categoria.EMERGENCIA
    },
    {
      id: 4,
      nome: 'Mãe',
      telefone01: '+11-1111-1111',
      telefone02: '+11-911-111-111',
      email: 'mae@mae.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      id: 5,
      nome: 'João do Caminhão',
      telefone01: '+11-1111-1111',
      telefone02: '+11-911-111-111',
      email: 'joao@caminhao.com',
      categoria: enums.Categoria.OUTROS
    },
    {
      id: 6,
      nome: 'Pizzaria Bella Pizza',
      telefone01: '+11-1111-1111',
      telefone02: '+11-911-111-111',
      email: 'pizza@bellapizza.com',
      categoria: enums.Categoria.SERVICOS
    },
    {
      id: 7,
      nome: 'Chefe',
      telefone01: '+11-1111-1111',
      telefone02: '+11-911-111-111',
      email: 'chefe@meutrampo.com',
      categoria: enums.Categoria.TRABALHO
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const maiorId =
          state.itens.length > 0 ? Math.max(...state.itens.map((c) => c.id)) : 0
        const contatoNovo = {
          ...action.payload,
          id: maiorId + 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
