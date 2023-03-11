import AssinaturaNewsletter from "../components/AssinaturaNewsletter";
import Menu from "../components/Menu";
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <Menu />
      <main className={styles.conteudo}>
        <AssinaturaNewsletter />
      </main>
    </>
  )
}