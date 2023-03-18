import { useState } from 'react';
import { TextoGrande, TextoInicio } from '../AssinaturaNewsletter/styled';
import Selecionador from '../Selecionador';
import {
  CardOferta,
  OfertaPreco,
  OfertasDiv,
  OfertasDivCards,
  OfertaTexto,
} from './styled';

async function conectaApi() {
  const itens = await fetch('http://127.0.0.1:3000/ofertas');
  return itens.json();
}

let listaOfertas = await conectaApi();

export default function Ofertas() {
  const preco = (numero) => String(numero.toFixed(2)).replace('.', ',');
  const [ordenadorValor, setOrdenadorValor] = useState('');
  const [filtroValor, setFiltroValor] = useState('');

  return (
    <OfertasDiv>
      <TextoInicio>Conheça nossas</TextoInicio>
      <TextoGrande style={{ marginBottom: '5px' }}>plantas</TextoGrande>
      <OfertasDivCards>
        {listaOfertas.map((item, index) => (
          <CardOferta
            imagem={item.img}
            key={index}
            botaoDesabilitado={item.ordem === 0}
          >
            <OfertaTexto>{item.name}</OfertaTexto>
            <OfertaPreco>{preco(item.preco)}</OfertaPreco>
          </CardOferta>
        ))}
      </OfertasDivCards>
      <Selecionador
        value={ordenadorValor}
        setValue={setOrdenadorValor}
        placeholder='ordenar por'
        opcoes={['preço', 'nome']}
        right={'8.5rem'}
      />
      <Selecionador
        value={filtroValor}
        setValue={setFiltroValor}
        placeholder='filtrar por'
        opcoes={['R$ 10-29,99', 'R$ 30+']}
      />
    </OfertasDiv>
  );
}
