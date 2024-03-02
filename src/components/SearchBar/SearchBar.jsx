import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSearch}>
        <input
          className={css.input}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
