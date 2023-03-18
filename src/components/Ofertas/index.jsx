import { useEffect, useState } from 'react';
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

const listaOfertas = await conectaApi();

export default function Ofertas() {
  const preco = (numero) => String(numero.toFixed(2)).replace('.', ',');
  const [ordenador, setOrdenador] = useState('');
  const [filtro, setFiltro] = useState('');
  const [ofertas, setOfertas] = useState(listaOfertas);

  function handleOrdenador() {
    let ofertasInicial = [...ofertas];
    if (ordenador === 'preço') {
      ofertasInicial.sort((a, b) => a.preco - b.preco);
    } else if (ordenador === 'nome') {
      ofertasInicial.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
      });
    } else {
      ofertasInicial = listaOfertas;
      setFiltro('')
    }
    setOfertas([...ofertasInicial]);
  }
  
  function handleFiltro() {
    let ofertasInicial = [...ofertas];
    if (ofertasInicial.length !== listaOfertas.length) {
      ofertasInicial = listaOfertas;
    }
    if (filtro === 'R$ 10-29,99') {
      ofertasInicial = ofertasInicial.filter((item) => (item.preco >= 10 & item.preco < 30));
    } else if (filtro === 'R$ 30+') {
      ofertasInicial = ofertasInicial.filter((item) => item.preco > 30)
    } else {
      ofertasInicial = listaOfertas;
      setOrdenador('')
    }
    setOfertas([...ofertasInicial])
  }

  useEffect(() => {
    handleOrdenador();
  }, [ordenador]);

  useEffect(() => {
    handleFiltro();
  }, [filtro]);

  return (
    <OfertasDiv>
      <TextoInicio>Conheça nossas</TextoInicio>
      <TextoGrande style={{ marginBottom: '5px' }}>plantas</TextoGrande>
      <OfertasDivCards>
        {ofertas.map((item, index) => (
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
        value={ordenador}
        setValue={setOrdenador}
        placeholder='ordenar por'
        opcoes={['preço', 'nome']}
        right={'8.5rem'}
      />
      <Selecionador
        value={filtro}
        setValue={setFiltro}
        placeholder='filtrar por'
        opcoes={['R$ 10-29,99', 'R$ 30+']}
      />
    </OfertasDiv>
  );
}
