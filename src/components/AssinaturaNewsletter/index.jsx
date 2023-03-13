import { useEffect, useState } from 'react';
import InputEmail from './InputEmail';
import MensagemSucesso from './MensagemSucesso';
import * as styledComponents from './styled';

const {AssinaturaNewsletterForm, Texto, TextoInicio, TextoGrande, MensagemErro} = styledComponents;

export default function AssinaturaNewsletter() {

  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const regex = /^[^@]+@[^@.]{3,}(?:\.[\w]{2,})+$/
  
  useEffect(() => {
    limpaErro()
  }, [email])
  
  function limpaErro() {
    erro !== '' && setErro('');
  }
  
  function handleSubmit(evento) {
    evento.preventDefault();
    if (email.match(regex) === null) {
      setErro('Email Inválido!');
      return;
    }
    let emailMensagem = email;
    setEmail('');
    setSucesso(emailMensagem);
  }

  return (
    <AssinaturaNewsletterForm onSubmit={handleSubmit}>
      <TextoInicio>Sua casa com as</TextoInicio>
      <TextoGrande>melhores <br/>plantas</TextoGrande>
      <Texto>
        Encontre aqui uma vasta seleção de plantas para decorar a <br/>sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. <br/>Entre com seu e-mail e
        assine nossa newsletter para saber <br/>das novidades da marca.
      </Texto>
      {erro !== '' && <MensagemErro>{erro}</MensagemErro>}
      <InputEmail value={email} onChange={(evento) => setEmail(evento.target.value)}>
          Assinar newsletter
      </InputEmail>
      {sucesso && <MensagemSucesso onClick={() => setSucesso('')}>Obrigado pela sua assinatura, você receberá nossas<br/> novidades no e-mail {sucesso}</MensagemSucesso>}
    </AssinaturaNewsletterForm>
  );
}
