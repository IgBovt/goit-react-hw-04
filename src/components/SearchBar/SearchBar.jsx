import css from './SearchBar.module.css';
import { GoSearch } from 'react-icons/go';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSearch}>
        <input
          className={css.input}
          type="text"
          name="input"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <GoSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
