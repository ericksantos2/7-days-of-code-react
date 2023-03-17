import styled from 'styled-components';
import { ReactComponent as VectorSvg } from '@/assets/vector.svg';
import { margem } from '@/styles/variaveis.jsx';

const Imagem = styled.img`
  position: absolute;
  right: 34px;
  top: -8px;
`;

const Vector = styled(VectorSvg)`
  position: absolute;
  right: 0;
`;

const Linhas = styled.span`
  ::before {
    height: ${document.body.scrollHeight}px;
    min-width: 100%;
    background-image: url(/assets/linhas.svg);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  }
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

function ImagemItem() {
  return <Imagem src='/imagens/imagem-hero1.png' alt='Imagem de uma árvore' />;
}

export function Background() {
  return (
    <BackgroundDiv>
      <Linhas />
      <Vector />
      <ImagemDiv>
        <ImagemItem />
      </ImagemDiv>
    </BackgroundDiv>
  );
}
