import AssinaturaNewsletter from '../components/AssinaturaNewsletter';
import Menu from '../components/Menu';
import Card from '../components/Card';
import { Background } from './styled';
import Ofertas from '../components/Ofertas';

export default function HomePage() {
  return (
    <>
      <Background />
      <Menu />
      <main style={{ marginTop: '150px' }}>
        <AssinaturaNewsletter />
        <Card />
        <Ofertas />
      </main>
    </>
  );
}
