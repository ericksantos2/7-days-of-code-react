import styled from 'styled-components';
import { ReactComponent as VectorSvg } from '@/assets/vector.svg';
import * as variaveis from '@/styles/variaveis.jsx';

const Imagem = styled.img`
  position: absolute;
  right: 0px;
  top: -18px;
`;

const Vector = styled(VectorSvg)`
  position: absolute;
  right: 0;
`;

const ImagemDiv = styled.div`
  position: relative;
  margin: 0 ${variaveis.margem};
`;

export const Conteudo = styled.div`
  width: 100vw;
  position: absolute;
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
    <div>
      <Vector />
      <ImagemDiv>
        <ImagemItem />
      </ImagemDiv>
    </div>
  );
}
