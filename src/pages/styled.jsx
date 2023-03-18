import styled from 'styled-components';
import { ReactComponent as VectorSvg } from '@/assets/vector.svg';
import { ReactComponent as LinhasSvg } from '@/assets/linhas.svg';
import { margem } from '@/styles/variaveis.jsx';
import { useEffect, useState } from 'react';

const Imagem = styled.img`
  position: absolute;
  right: 34px;
  top: -8px;
`;

const Vector = styled(VectorSvg)`
  position: absolute;
  right: 0;
`;

const ImagemDiv = styled.div`
  position: relative;
  margin: 0 ${margem};
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  right: 0;
`;

const Linhas = styled(LinhasSvg)`
height: ${props => props.height}px;
width: 100%;
content: '';
position: absolute;
top: 0;
left: -34px;
`;

function ImagemItem() {
  return <Imagem src='/imagens/imagem-hero1.png' alt='Imagem de uma árvore' />;
}

export function Background() {
  const [alturaLinhas, setAlturaLinhas] = useState(0);
  useEffect(() => {
    setAlturaLinhas(document.body.scrollHeight);
  }, [])

  return (
    <BackgroundDiv>
      <Linhas height={alturaLinhas}/>
      <Vector />
      <ImagemDiv>
        <ImagemItem />
      </ImagemDiv>
    </BackgroundDiv>
  );
}
