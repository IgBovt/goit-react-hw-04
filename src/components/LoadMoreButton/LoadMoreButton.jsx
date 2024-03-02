import css from './LoadMoreButton.module.css';
import { MdExpandMore } from 'react-icons/md';

export default function LoadMoreButton({ onLoad }) {
  return (
    <button className={css.btn} type="button" onClick={onLoad}>
      <p>Load more</p>
      <MdExpandMore className={css.icon} />
    </button>
  );
}
