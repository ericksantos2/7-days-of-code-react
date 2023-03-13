import styled from "styled-components";
import { fonte1 } from "../../styles/variaveis";

const MensagemDiv = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Mensagem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1.5rem;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  line-height: 20px;
`

const BotaoConfirmar = styled.button`
  font-family: ${fonte1};
  border: none;
  font-size: 16px;
  background-color: #ffcb47;
  width: auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: #fff;
  &:hover {
    transition: 500ms;
    opacity: 0.5;
    cursor: pointer;
  }
`

export default function MensagemSucesso({onClick, children}) {
  return (
    <MensagemDiv>
      <Mensagem>
        <p>{children}</p>
        <BotaoConfirmar onClick={onClick} type='button'>Confirmar</BotaoConfirmar>
      </Mensagem>
    </MensagemDiv>
  )
}