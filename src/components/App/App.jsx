import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import { fetchImages } from '../../fetch';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(e.target.input.value);
    e.target.reset();
  }

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchImages(query, 1);
        setImages(data);
      } catch (error) {
      } finally {
      }
    }
    getData();
  }, [query]);
  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
