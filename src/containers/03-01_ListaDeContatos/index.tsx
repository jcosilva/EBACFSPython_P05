import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { LCMain, LCTitulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, categoria } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (categoria !== 'TODOS') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria.search(categoria) >= 0
        )
      }
      contatosFiltrados = contatosFiltrados.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      )
      return contatosFiltrados
    } else {
      let contatosNaoFiltrados = itens
      contatosNaoFiltrados = contatosNaoFiltrados.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      )
      return contatosNaoFiltrados
    }
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (categoria === 'TODOS') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "TODOS" ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${categoria}" ${complementacao}`
    }
    return mensagem
  }

  const contatos = filtraContatos()

  const mensagem = exibeResultadoFiltrado(contatos.length)

  return (
    <LCMain>
      <LCTitulo as="p">{mensagem}</LCTitulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.id}>
            <Contato
              id={t.id}
              nome={t.nome}
              telefone01={t.telefone01}
              telefone02={t.telefone02}
              email={t.email}
              categoria={t.categoria}
            />
          </li>
        ))}
      </ul>
    </LCMain>
  )
}

export default ListaDeContatos
