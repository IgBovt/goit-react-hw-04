import css from './LoadMoreBtn.module.css';

export default function LoadMoreButton({ onLoad }) {
  return (
    <button className={css.btn} type="button" onClick={onLoad}>
      <p>Load more</p>
    </button>
  );
}
