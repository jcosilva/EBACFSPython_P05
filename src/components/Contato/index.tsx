import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import {
  LCBotao,
  LCBotaoSalvar,
  LCCampo,
  LCCard,
  LCLabel,
  LCOpcao,
  LCOpcoes
} from '../../styles'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  telefone01: telefone01Original,
  telefone02: telefone02Original,
  email: emailOriginal,
  categoria: categoriaOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone01, setTelefone01] = useState('')
  const [telefone02, setTelefone02] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
  }, [nomeOriginal])

  useEffect(() => {
    setTelefone01(telefone01Original)
  }, [telefone01Original])

  useEffect(() => {
    setTelefone02(telefone02Original)
  }, [telefone02Original])

  useEffect(() => {
    setEmail(emailOriginal)
  }, [emailOriginal])

  useEffect(() => {
    setCategoria(categoriaOriginal)
  }, [categoriaOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone01(telefone01Original)
    setTelefone02(telefone02Original)
    setEmail(emailOriginal)
    setCategoria(categoriaOriginal)
  }

  return (
    <LCCard>
      {estaEditando ? (
        <>
          <LCLabel>
            <b>Nome:&ensp;</b>
            <LCCampo
              type="text"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </LCLabel>
          <LCLabel>
            <b>Telefone #01:&ensp;</b>
            <LCCampo
              type="text"
              value={telefone01}
              onChange={(evento) => setTelefone01(evento.target.value)}
            />
          </LCLabel>
          <LCLabel>
            <b>Telefone #02:&ensp;</b>
            <LCCampo
              type="text"
              value={telefone02}
              onChange={(evento) => setTelefone02(evento.target.value)}
            />
          </LCLabel>
          <LCLabel>
            <b>E-Mail:&ensp;</b>
            <LCCampo
              type="text"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </LCLabel>
          <LCOpcoes>
            <b>Categoria: </b>
            {Object.values(enums.Categoria).map((categoria) => (
              <LCOpcao key={categoria}>
                <input
                  type="radio"
                  name="categoria"
                  value={categoria}
                  id={categoria}
                  defaultChecked={categoria === categoriaOriginal}
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                />{' '}
                <span>{categoria}</span>
              </LCOpcao>
            ))}
          </LCOpcoes>
        </>
      ) : (
        <>
          <LCLabel>
            <b>Nome: {nome}</b>
          </LCLabel>
          <LCLabel>
            <b>Telefone #01:&ensp;</b>
            {telefone01}
          </LCLabel>
          <LCLabel>
            <b>Telefone #02:&ensp;</b>
            {telefone02}
          </LCLabel>
          <LCLabel>
            <b>E-Mail:&ensp;</b>
            {email}
          </LCLabel>
          <LCLabel>
            <b>Categoria:&ensp;</b>
            {categoria}
          </LCLabel>
        </>
      )}

      <S.LCBarraAcoes>
        {estaEditando ? (
          <>
            <LCBotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    telefone01,
                    telefone02,
                    email,
                    categoria
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </LCBotaoSalvar>
            <S.LCBotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.LCBotaoCancelarRemover>
          </>
        ) : (
          <>
            <LCBotao onClick={() => setEstaEditando(true)}>Editar</LCBotao>
            <S.LCBotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.LCBotaoCancelarRemover>
          </>
        )}
      </S.LCBarraAcoes>
    </LCCard>
  )
}

export default Contato
