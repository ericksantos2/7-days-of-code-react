import styled from 'styled-components';
import * as variaveis from '@/styles/variaveis.jsx';

const { margem, fonte2 } = variaveis;

export const AssinaturaNewsletterForm = styled.form`
  padding: 0 ${margem};
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
  max-width: 375px;
  line-height: 94px;
  margin-bottom: 24px;
`;
