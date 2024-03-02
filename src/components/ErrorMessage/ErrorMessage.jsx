import { ImSad } from 'react-icons/im';
import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p>Ooops... something wrong happened... </p>
      <ImSad className={css.icon} />
    </div>
  );
}
