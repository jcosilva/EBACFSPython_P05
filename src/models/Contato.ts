import * as enums from '../utils/enums/Contato'

class Contato {
  id: number
  nome: string
  telefone01: string
  telefone02: string
  email: string
  categoria: enums.Categoria | string

  constructor(
    id: number,
    nome: string,
    telefone01: string,
    telefone02: string,
    email: string,
    categoria: enums.Categoria | string
  ) {
    this.id = id
    this.nome = nome
    this.telefone01 = telefone01
    this.telefone02 = telefone02
    this.email = email
    this.categoria = categoria
  }
}

export default Contato
