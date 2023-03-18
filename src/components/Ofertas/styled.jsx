import styled from 'styled-components';
import { margem } from '@/styles/variaveis';
import {
  TextoGrande,
  TextoInicio as TextoClaro,
} from '../AssinaturaNewsletter/styled';
import { fonte1 } from '../../styles/variaveis';

export const OfertasDiv = styled.div`
  padding: 0 ${margem} 153px ${margem};
  text-align: center;
  position: relative;
`;

export const OfertasDivCards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 31px;
`;

export const OfertaTexto = styled(TextoGrande)`
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 8px;
`;

export const OfertaPreco = styled(TextoClaro)`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 24px;
  font-weight: bold;
  ::before {
    content: 'R$ ';
  }
`;

const CardConteudo = styled.span`
  width: 40%;
  position: absolute;
  right: 0;
  padding: 27px 25px 27px 0;
  text-align: start;

  .botaoComprar {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 16px;
    line-height: 20px;
    font-family: ${fonte1};
    padding: 0;
    color: #ffcb47;
    :hover {
      cursor: pointer;
    }
    ::after {
      content: url('/assets/seta.svg');
      margin-left: 26px;
    }
  }
  .botaoComprar-disabled {
    pointer-events: none;
    color: #202020;
    opacity: 0.5;
    :hover {
      cursor: default;
    }
    ::after {
      content: none;
      margin: 0;
    }
  }
`;

const Card = styled.div`
  height: 200px;
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  width: 100%;
  ::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0;
    background-position: -18px 5px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.imagem});
    background-size: contain;
  }
`;

export function CardOferta({ imagem, botaoDesabilitado = false, children }) {
  return (
    <Card imagem={imagem}>
      <CardConteudo>
        {children}
        <a
          className={`botaoComprar ${
            botaoDesabilitado && 'botaoComprar-disabled'
          } inselecionavel`}
          href='#'
        >
          {botaoDesabilitado ? 'Indisponível' : 'Comprar'}
        </a>
      </CardConteudo>
    </Card>
  );
}
