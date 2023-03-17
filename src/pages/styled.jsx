import styled from 'styled-components';
import { ReactComponent as VectorSvg } from '@/assets/vector.svg';
import * as variaveis from '@/styles/variaveis.jsx';

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
  margin: 0 ${variaveis.margem};
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const Conteudo = styled.div`
  width: 100%;
  // position: absolute;
  top: 0;
  left: 0;
`;

function ImagemItem() {
  return (
    <Imagem src='/imagens/imagem-hero1.png' alt='Imagem de uma árvore' />
  );
}

export function Background() {
  return (
    <BackgroundDiv>
      <Vector />
      <ImagemDiv>
        <ImagemItem />
      </ImagemDiv>
    </BackgroundDiv>
  );
}
