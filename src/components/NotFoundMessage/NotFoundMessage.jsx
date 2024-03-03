import css from './NotFoundMessage.module.css';

export default function NotFoundMessage() {
  return (
    <div className={css.container}>
      <p>Results not found... </p>
    </div>
  );
}
