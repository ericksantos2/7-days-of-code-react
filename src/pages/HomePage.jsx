import AssinaturaNewsletter from '../components/AssinaturaNewsletter';
import Menu from '../components/Menu';
import Card from '../components/Card';
import { Background, Conteudo } from './styled';

export default function HomePage() {
  return (
    <>
      <Background />
      <Menu />
      <main style={{ marginTop: '150px', opacity: 0.999999 }}>
        <AssinaturaNewsletter />
        <Card />
      </main>
    </>
  );
}
