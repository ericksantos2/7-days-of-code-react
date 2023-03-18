import styled from 'styled-components';
import { margem } from '../../styles/variaveis';

export const DivSelecionador = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 1px;
  position: absolute;
  right: calc(${margem} + ${props => props.right ? props.right : '0px'});
  top: 96px;
`;

export const Placeholder = styled.span`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.6);
  line-height: 22px;
  min-width: 7rem;
  min-height: 22px;
`;

export const UlMenuSelecionador = styled.ul`
  position: absolute;
  min-width: 7rem;
  right: 0;
  padding: 5px 10px;
  bottom: ${(props) => props.bottom};
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

export const LiItemSelecionador = styled.li`
  line-height: 24px;
  min-height: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
