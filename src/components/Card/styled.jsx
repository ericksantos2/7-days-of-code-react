import styled from 'styled-components';
import { TextoInicio as TextoClaro } from '../AssinaturaNewsletter/styled';

const tamanhoBolinha = '52px';

const Bolinha = styled.span`
  width: ${tamanhoBolinha};
  height: ${tamanhoBolinha};
  background-color: #ffcb47;
  border-radius: 100%;
  margin-right: 1rem;
`;

const LiConseguir = styled.li`
  display: flex;
  align-items: center;
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
`;

export const CardPlanta = styled.div`
  height: 440px;
  width: 995px;
  background: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  ::after {
    background-image: url(/imagens/image3.png);
    content: '';
    height: 100%;
    width: 585px;
    position: absolute;
  }
`;

export const DivTexto = styled.div`
  position: absolute;
  right: 0;
  width: calc(410px - 32px * 2);
  height: calc(100% - 58px * 2);
  display: flex;
  flex-direction: column;
  padding: 58px 32px;
`;

export const ListaConseguir = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
`;

export const ItemConseguir = ({children}) => {
  return (
    <LiConseguir>
      <Bolinha />
      <TextoClaro style={{ marginBottom: '0px' }}>{children}</TextoClaro>
    </LiConseguir>
  );
};
