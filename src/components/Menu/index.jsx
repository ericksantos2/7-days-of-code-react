import styles from './Menu.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import React from 'react';

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
    <header className={styles.cabecalho}>
      <Logo />
      <ul className={styles.cabecalho__links}>
        {links.map((item, index) => (
          <React.Fragment key={index}>
            <li className={styles['cabecalho__links--li']}>
              <a href={item.link}>
                {item.texto}
              </a>
            </li>
            {index !== links.length - 1 && <p className={styles.separador}></p>}
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}
