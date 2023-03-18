import { CardDiv, CardPlanta, DivTexto, ItemConseguir, ListaConseguir } from './styled';
import { TextoInicio, TextoGrande } from '../AssinaturaNewsletter/styled';

export default function Card() {
  const estiloGrande = {
    fontSize: '42px',
    lineHeight: '48px',
    marginBottom: '32px'
  }

  return (
    <CardDiv>
      <CardPlanta>
        <DivTexto>
          <TextoInicio>Como conseguir</TextoInicio>
          <TextoGrande style={estiloGrande}>minha planta</TextoGrande>
          <ListaConseguir>
            <ItemConseguir>Escolha sua plantas</ItemConseguir>
            <ItemConseguir>Faça seu pedido</ItemConseguir>
            <ItemConseguir>Aguarde na sua casa</ItemConseguir>
          </ListaConseguir>
        </DivTexto>
      </CardPlanta>
    </CardDiv>
  );
}
