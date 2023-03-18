import styled from 'styled-components';
import { margemVertical, margem } from '../../styles/variaveis';

export const Separador = styled.p`
  &::before {
    content: '/';
  }
`;

export const Cabecalho = styled.header`
  display: flex;
  align-items: flex-end;
  padding: ${margemVertical} ${margem};
  justify-content: space-between;
  opacity: 0.999999;
`;

export const ListaLinks = styled.ul`
  display: flex;
  gap: 13px;
  line-height: 20px;
  font-size: 16px;
`;

export const LinkDaLista = styled.li`
  &:hover {
    transition: 500ms;
    opacity: 0.5;
  }
`;