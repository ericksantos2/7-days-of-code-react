import AssinaturaNewsletter from '../components/AssinaturaNewsletter';
import Menu from '../components/Menu';
import { Background, Conteudo } from './styled';

export default function HomePage() {
  return (
    <>
      <Background />
      <Conteudo>
        <Menu />
        <main style={{ marginTop: '150px' }}>
          <AssinaturaNewsletter />
        </main>
      </Conteudo>
    </>
  );
}
