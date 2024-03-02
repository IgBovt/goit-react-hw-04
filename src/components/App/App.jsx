import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchImages } from '../../fetch';
import css from './App.module.css';
import { Circles } from 'react-loader-spinner';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(e.target.input.value);
    e.target.reset();
  }

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        setSpinner(true);
        setError(false);
        const data = await fetchImages(query, 1);
        setImages(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setSpinner(false);
      }
    }
    getData();
  }, [query]);

  function handleSearch(newQuery) {
    //  setSearchQuery(newQuery);
    //  setPage(1);
    //  setArticles([]);
  }

  //  const handleLoadMore = () => {
  //    setPage(page + 1);
  //  };

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {spinner && (
        <Circles
          color="rgb(67, 96, 240, 0.8)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          visible={spinner}
        />
      )}
    </>
  );
}
