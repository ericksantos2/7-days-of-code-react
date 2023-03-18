import { useRef, useState } from 'react';
import {
  UlMenuSelecionador,
  LiItemSelecionador,
  DivSelecionador,
  Placeholder,
} from './styled';

function MenuSelecionador(props) {
  const { setValue, setMostraMenu, itens } = props;
  const ulRef = useRef(null);

  return (
    <UlMenuSelecionador ref={ulRef} bottom={`-${(itens.length + 1) * 24 + 4}px`}>
      <ItemSelecionador
        onClick={() => {
          setValue('');
          setMostraMenu(false);
        }}
      >
        {''}
      </ItemSelecionador>
      {itens.map((item, index) => (
        <ItemSelecionador
          key={index}
          onClick={() => {
            setValue(item);
            setMostraMenu(false);
          }}
        >
          {item}
        </ItemSelecionador>
      ))}
    </UlMenuSelecionador>
  );
}

function ItemSelecionador({ onClick, children }) {
  return (
    <LiItemSelecionador className='inselecionavel' onClick={onClick}>
      {children}
    </LiItemSelecionador>
  );
}

export default function Selecionador({
  placeholder = 'selecione um',
  right,
  value,
  setValue,
  opcoes = [],
}) {
  const [mostraMenu, setMostraMenu] = useState(false);
  const [itens, setItens] = useState([...opcoes]);
  return (
    <DivSelecionador right={right}>
      <Placeholder
        className='inselecionavel'
        onClick={() => setMostraMenu(!mostraMenu)}
      >
        {value ? value : placeholder}
      </Placeholder>
      {mostraMenu && (
        <MenuSelecionador
          {...{ setValue, setMostraMenu, itens }}
        ></MenuSelecionador>
      )}
    </DivSelecionador>
  );
}
