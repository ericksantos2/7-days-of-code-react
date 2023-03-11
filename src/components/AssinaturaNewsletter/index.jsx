import styles from './AssinaturaNewsletter.module.scss';
import {ReactComponent as Mail} from '@/assets/mail.svg';

export default function AssinaturaNewsletter() {
  return (
    <div className={styles.assinatura}>
      <p className={styles.assinatura__texto__casa}>Sua casa com as</p>
      <p className={styles.assinatura__texto__melhores}>melhores plantas</p>
      <p className={styles['assinatura__texto']}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
      <div className={styles.assinatura__input}>
        <Mail className={styles.assinatura__input__email}/>
        <input type="text" className={styles.assinatura__input__campo} placeholder='Insira seu e-mail'/>
        <button className={styles.assinatura__input__botao}>Assinar newsletter</button>
      </div>
    </div>
  );
}
