import { ReactComponent as Logo } from '../../assets/logo.svg';
import React from 'react';
import { Separador, Cabecalho, LinkDaLista, ListaLinks } from './styled.jsx';

const links = [
  {
    texto: 'Como fazer',
    link: '#',
  },
  {
    texto: 'Ofertas',
    link: '#',
  },
  {
    texto: 'Depoimentos',
    link: '#',
  },
  {
    texto: 'Vídeos',
    link: '#',
  },
  {
    texto: 'Meu carrinho',
    link: '#',
  },
];

export default function Menu() {
  return (
    <Cabecalho>
      <Logo />
      <ListaLinks>
        {links.map((item, index) => (
          <React.Fragment key={index}>
            <LinkDaLista>
              <a href={item.link}>{item.texto}</a>
            </LinkDaLista>
            {index !== links.length - 1 && <Separador />}
          </React.Fragment>
        ))}
      </ListaLinks>
    </Cabecalho>
  );
}
