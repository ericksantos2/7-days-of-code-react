import InputEmail from './InputEmail';
import * as styledComponents from './styled';

const {AssinaturaNewsletterForm, Texto, TextoInicio, TextoGrande} = styledComponents;

export default function AssinaturaNewsletter() {
  return (
    <AssinaturaNewsletterForm>
      <TextoInicio>Sua casa com as</TextoInicio>
      <TextoGrande>melhores plantas</TextoGrande>
      <Texto>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </Texto>
      <InputEmail>
          Assinar newsletter
      </InputEmail>
    </AssinaturaNewsletterForm>
  );
}
