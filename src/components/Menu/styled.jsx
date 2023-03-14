import styled from 'styled-components';
import * as variaveis from '../../styles/variaveis';

const {margemVertical, margem} = variaveis;

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
`

export const ListaLinks = styled.ul`
  display: flex;
  gap: 13px;
  line-height: 20px;
  font-size: 16px;
`

export const LinkDaLista = styled.li`
  &:hover {
    transition: 500ms;
    opacity: .5;
  }
`;
