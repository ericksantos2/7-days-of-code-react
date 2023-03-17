import styled from 'styled-components';
import { margem, fonte2 } from '@/styles/variaveis.jsx';

export const AssinaturaNewsletterForm = styled.form`
  padding: 0 ${margem};
  margin-bottom: 228px;
`;

export const Texto = styled.p`
  line-height: 26px;
  max-width: 481px;
  opacity: 0.5;
  margin-bottom: 37px;
`;

export const TextoInicio = styled.p`
  font-size: 22px;
  opacity: 0.5;
  line-height: 27px;
  margin-bottom: 12px;
`;

export const TextoGrande = styled.p`
  font-family: ${fonte2};
  font-weight: 900;
  font-size: 82px;
  line-height: 94px;
  margin-bottom: 24px;
`;

export const MensagemErro = styled.p`
  color: red;
  position: absolute;
  bottom: 80px;
  opacity: .7;
  left: ${margem};
`
