import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  LCBotaoSalvar,
  LCCampo,
  LCCard,
  LCLabel,
  LCMain,
  LCOpcao,
  LCOpcoes,
  LCTitulo
} from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone01, setTelefone01] = useState('')
  const [telefone02, setTelefone02] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone01,
        telefone02,
        email,
        categoria
      })
    )
    navigate('/')
  }

  return (
    <LCMain>
      <LCTitulo>Novo Contato</LCTitulo>
      <S.LCForm onSubmit={cadastrarContato}>
        <LCCard>
          <LCLabel>
            <b>Nome:&ensp;</b>
            <LCCampo
              type="text"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              placeholder="Nome do Contato"
            />
          </LCLabel>
          <LCLabel>
            <b>Telefone #01:&ensp;</b>
            <LCCampo
              type="text"
              value={telefone01}
              onChange={(evento) => setTelefone01(evento.target.value)}
              placeholder="Telefone #01 do Contato"
            />
          </LCLabel>
          <LCLabel>
            <b>Telefone #02:&ensp;</b>
            <LCCampo
              type="text"
              value={telefone02}
              onChange={(evento) => setTelefone02(evento.target.value)}
              placeholder="Telefone #02 do Contato"
            />
          </LCLabel>
          <LCLabel>
            <b>E-Mail:&ensp;</b>
            <LCCampo
              type="text"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder="E-Mail do Contato"
            />
          </LCLabel>
          <LCOpcoes>
            <b>Categoria:&ensp;</b>
            {Object.values(enums.Categoria).map((categoria) => (
              <LCOpcao key={categoria}>
                <input
                  type="radio"
                  name="categoria"
                  value={categoria}
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.OUTROS}
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                />{' '}
                <span>{categoria}</span>
              </LCOpcao>
            ))}
          </LCOpcoes>
          <LCBotaoSalvar type="submit">Cadastrar</LCBotaoSalvar>
        </LCCard>
      </S.LCForm>
    </LCMain>
  )
}

export default Formulario
