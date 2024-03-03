import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreButton from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import NotFoundMessage from '../NotFoundMessage/NotFoundMessage';
import { fetchImages } from '../../fetch';
import css from './App.module.css';
import { Circles } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalLink, setModalLink] = useState('#');
  const [dataReceived, setDataReceived] = useState(false);

  function handleSubmit(inputQuery) {
    setQuery(inputQuery);
    setPage(1);
    setImages([]);
    setTotal(0);
    setDataReceived(false);
  }

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    async function getData() {
      try {
        setSpinner(true);
        setError(false);
        const data = await fetchImages(query, page);

        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
        setTotal(data.total_pages);
        setDataReceived(true);
      } catch (error) {
        setError(true);
      } finally {
        setSpinner(false);
      }
    }
    getData();
  }, [query, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function getImage(link) {
    setModalLink(link);
  }

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          getImage={getImage}
        />
      )}
      {images.length > 0 && total > page && !spinner && (
        <LoadMoreButton onLoad={handleLoadMore} />
      )}
      {spinner && (
        <Circles
          color="rgb(67, 96, 240, 0.8)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          visible={spinner}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        getLink={modalLink}
      />

      {!spinner && dataReceived && images.length === 0 && <NotFoundMessage />}

      <Toaster position="top-right" />
    </>
  );
}
