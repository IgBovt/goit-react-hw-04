import css from './SearchBar.module.css';
import { GoSearch } from 'react-icons/go';
import toast from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.input.value.trim();
    if (inputValue === '') {
      toast.error('You must fill the field');
      return;
    }
    onSearch(inputValue);
    e.target.reset();
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
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
